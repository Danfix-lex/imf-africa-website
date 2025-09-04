import React from "react";
import Layout from "@/components/Layout";
import LeaderCard from "@/components/LeaderCard";

interface Leader {
  id: string;
  name: string;
  position: string;
  imageUrl: string;
  bio?: string;
}

const Leadership = () => {
  const founders: Leader[] = [
    {
      id: "1",
      name: "Rev. Dr. Michael Johnson",
      position: "Founder & Chairman",
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      bio: "Visionary leader with over 30 years of ministerial experience across Africa."
    },
    {
      id: "2", 
      name: "Pastor Sarah Okafor",
      position: "Co-Founder & Executive Director",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      bio: "Passionate advocate for ministerial development and community outreach."
    }
  ];

  const presidents: Leader[] = [
    {
      id: "3",
      name: "Bishop David Adeboye",
      position: "President",
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      bio: "Leading the forum's strategic initiatives across 15 African nations."
    }
  ];

  const boardOfTrustees: Leader[] = [
    {
      id: "4",
      name: "Dr. Grace Mwangi",
      position: "Chairman, Board of Trustees",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      bio: "Distinguished theologian and education advocate."
    },
    {
      id: "5",
      name: "Pastor James Mensah",
      position: "Trustee",
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in church administration and financial stewardship."
    },
    {
      id: "6",
      name: "Rev. Dr. Amara Bangura",
      position: "Trustee",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      bio: "Pioneer in women's ministry and youth development programs."
    }
  ];

  const boardOfDirectors: Leader[] = [
    {
      id: "7",
      name: "Pastor Emmanuel Kwame",
      position: "Director of Operations",
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      bio: "Oversees daily operations and program implementation."
    },
    {
      id: "8",
      name: "Dr. Fatima Al-Hassan",
      position: "Director of Programs",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      bio: "Manages educational and development programs across the continent."
    },
    {
      id: "9",
      name: "Rev. Peter Nakamura",
      position: "Director of Finance",
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      bio: "Ensures financial transparency and strategic resource allocation."
    }
  ];

  const leaders: Leader[] = [
    {
      id: "10",
      name: "Pastor Ruth Chioma",
      position: "Regional Coordinator - West Africa",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      bio: "Coordinates ministerial activities across West African nations."
    },
    {
      id: "11",
      name: "Bishop Samuel Tembo",
      position: "Regional Coordinator - East Africa",
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      bio: "Facilitates cross-border ministerial partnerships in East Africa."
    },
    {
      id: "12",
      name: "Rev. Dr. Nomsa Dlamini",
      position: "Regional Coordinator - Southern Africa",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      bio: "Champions ministerial excellence and capacity building initiatives."
    }
  ];

  const LeadershipSection = ({ title, leaders, description }: { 
    title: string; 
    leaders: Leader[]; 
    description?: string;
  }) => (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {description && (
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader, index) => (
          <LeaderCard 
            key={leader.id} 
            leader={leader}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          />
        ))}
      </div>
    </section>
  );

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Leadership
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              Meet the dedicated leaders, visionaries, and servants who guide the International Ministers Forum Africa 
              in its mission to strengthen ministerial excellence across the continent.
            </p>
          </div>
        </section>

        {/* Leadership Sections */}
        <div className="container-custom py-16">
          <LeadershipSection 
            title="Founders"
            leaders={founders}
            description="The visionary pioneers who established IMF Africa with a heart for ministerial development and continental unity."
          />

          <LeadershipSection 
            title="Presidents"
            leaders={presidents}
            description="Executive leadership providing strategic direction and oversight for our continental initiatives."
          />

          <LeadershipSection 
            title="Board of Trustees"
            leaders={boardOfTrustees}
            description="Distinguished trustees ensuring governance, accountability, and long-term sustainability of our mission."
          />

          <LeadershipSection 
            title="Board of Directors"
            leaders={boardOfDirectors}
            description="Operational directors managing day-to-day activities and program implementation across Africa."
          />

          <LeadershipSection 
            title="Regional Leaders"
            leaders={leaders}
            description="Regional coordinators facilitating ministerial development and partnerships across African regions."
          />
        </div>

        {/* Call to Action */}
        <section className="bg-primary/5 py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of a growing network of ministers and leaders dedicated to transforming Africa through 
              excellence in ministry and servant leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3">
                Become a Member
              </button>
              <button className="btn-primary px-8 py-3" style={{ background: "transparent", border: "2px solid hsl(var(--primary))", color: "hsl(var(--primary))" }}>
                Contact Leadership
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Leadership;