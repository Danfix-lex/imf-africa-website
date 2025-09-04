import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, BookOpen, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Users className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">About IMF Africa</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connecting, equipping, and empowering ministers and church leaders across the African continent for Kingdom advancement.
          </p>
        </div>

        {/* Vision and Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Eye className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To see a unified body of ministers across Africa, empowered by the Holy Spirit, transforming communities and nations through the Gospel of Jesus Christ.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Target className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To provide a platform for fellowship, training, and resource-sharing that equips ministers for effective, Christ-centered leadership and ministry.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* President's Message Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">A Message From The President</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center gap-8">
            <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-primary/20">
              <AvatarImage src="/placeholder-avatar.jpg" alt="President's Photo" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-muted-foreground italic leading-relaxed">
                "It is with great joy that I welcome you to the official online home of the International Ministers Forum for Africa. Our continent is at a pivotal moment, and the role of servant leaders in the body of Christ has never been more critical. Our vision is to raise up a generation of ministers who are not only spiritually vibrant but also equipped with the practical tools to lead with integrity and excellence. We are committed to fostering unity and collaboration, breaking down denominational barriers to advance a single cause: the Great Commission. Join us as we labor together for a spiritual awakening across Africa."
              </p>
              <p className="text-right font-semibold mt-4">- President's Name, IMF Africa</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default About;