import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scroll, Landmark } from 'lucide-react';

const Beliefs = () => {
  const beliefs = [
    {
      title: "The Scriptures",
      text: "We believe the Holy Bible to be the inspired, infallible, and authoritative Word of God. It is the final authority for faith and life."
    },
    {
      title: "The Godhead",
      text: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit. These three are co-equal and co-eternal."
    },
    {
      title: "The Person and Work of Christ",
      text: "We believe in the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and atoning death through His shed blood, in His bodily resurrection, in His ascension to the right hand of the Father, and in His personal return in power and glory."
    },
    {
      title: "Salvation",
      text: "We believe that for the salvation of lost and sinful people, regeneration by the Holy Spirit is absolutely essential. Salvation is by grace through faith in Jesus Christ alone."
    },
    {
      title: "The Holy Spirit",
      text: "We believe in the present ministry of the Holy Spirit by whose indwelling the Christian is enabled to live a godly life."
    },
    {
      title: "The Church",
      text: "We believe in the spiritual unity of believers in our Lord Jesus Christ, who are the body of Christ, the Church."
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Scroll className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Our Statement of Beliefs</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The foundational doctrines that guide our faith, ministry, and fellowship.
          </p>
        </div>

        <div className="space-y-6">
          {beliefs.map((belief, index) => (
            <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Landmark className="w-5 h-5 mr-3 text-primary" />
                  {belief.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{belief.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Beliefs;