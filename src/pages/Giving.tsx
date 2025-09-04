import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartHandshake, Landmark, Globe } from 'lucide-react';

const Giving = () => {
  const paymentUrl = 'https://imf-payment-xdde.onrender.com';

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your generous contributions empower us to connect, train, and support ministers across Africa. Thank you for partnering with us.
          </p>
        </div>

        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Online Giving</CardTitle>
            <CardDescription>
              Click the button below to make a secure one-time or recurring donation.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button
              size="lg"
              className="px-12 py-6 text-lg"
              onClick={() => window.open(paymentUrl, '_blank')}
            >
              Give Securely Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Giving;