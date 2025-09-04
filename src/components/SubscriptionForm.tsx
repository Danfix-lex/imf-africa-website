import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/utils/toast';
import { validateEmail, isRateLimited } from '@/utils/validation';

interface SubscriptionFormProps {
  className?: string;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Client-side rate limiting is for UX, not security.
      // Server-side rate limiting is the definitive protection.
      if (isRateLimited('email_subscription', 3, 15 * 60 * 1000)) {
        toast.error("Too many attempts. Please wait 15 minutes before trying again");
        return;
      }

      const emailValidation = validateEmail(email);
      if (!emailValidation.isValid) {
        toast.error(emailValidation.error || 'Invalid Email');
        return;
      }

      const sanitizedEmail = email.trim().toLowerCase();

      const { error: subscriptionError } = await supabase
        .from('email_subscriptions')
        .insert({ email: sanitizedEmail });

      if (subscriptionError) {
        if (subscriptionError.code === '23505') {
          toast.info("This email is already subscribed to our newsletter");
          setEmail('');
          return;
        }
        throw subscriptionError;
      }

      const { error: emailError } = await supabase.functions.invoke('send-welcome-email', {
        body: { email: sanitizedEmail }
      });

      if (emailError) {
        console.error('Error sending welcome email:', emailError);
      }

      toast.success("You've successfully subscribed to our newsletter. Check your email for a welcome message!");

      setEmail('');
    } catch (error: any) {
      console.error('Subscription error:', error);
      toast.error(error.message || "An error occurred while subscribing");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubscribe} className={`flex flex-col space-y-2 ${className || ''}`}>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-md border-border bg-background px-3 py-2 text-sm"
        disabled={isLoading}
      />
      <Button
        type="submit"
        className="btn-primary"
        disabled={isLoading}
      >
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
};

export default SubscriptionForm;