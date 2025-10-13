'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  School,
  TrendingUp,
  Building,
  BarChart,
  Users,
  Calendar,
  DollarSign,
  MapPin,
  X
} from 'lucide-react';

const programs = [
  {
    icon: School,
    title: 'Ministry Training Institute',
    description: 'Comprehensive theological and pastoral training programs for ministers and ministry leaders across Africa.',
    category: 'Ministry Training',
    status: 'Active',
    budget: '$5M',
    duration: '2020-2025',
    countries: ['Kenya', 'Ghana', 'Rwanda', 'Nigeria', 'Tanzania'],
    beneficiaries: '15K ministers',
    objectives: [
      'Train and equip pastors',
      'Develop theological education',
      'Strengthen ministry leadership',
      'Promote biblical literacy',
    ],
    achievements: [
      '3,500 ministers graduated',
      '150 training centers established',
      '2,200 leaders equipped',
      '95% graduation rate achieved',
    ],
    color: 'bg-blue-500',
  },
  {
    icon: Building,
    title: 'Youth Ministry Programs',
    description: 'Empowering young people through discipleship, leadership development, and skills training programs.',
    category: 'Youth Development',
    status: 'Active',
    budget: '$2.5M',
    duration: '2021-2026',
    countries: ['Ethiopia', 'Tanzania', 'Uganda', 'Zambia', 'Botswana'],
    beneficiaries: '100K youth',
    objectives: [
      'Disciple young people',
      'Develop youth leaders',
      'Provide skills training',
      'Combat social challenges',
    ],
    achievements: [
      '25K youth discipled',
      '500 youth leaders trained',
      '150 youth centers established',
      '75% program completion rate',
    ],
    color: 'bg-green-500',
  },

  {
    icon: TrendingUp,
    title: 'Women in Ministry',
    description: 'Empowering women in ministry leadership and ministry through training, mentorship, and leadership development.',
    category: 'Women Leadership',
    status: 'Active',
    budget: '$1.8M',
    duration: '2020-2025',
    countries: ['ECOWAS', 'EAC', 'SADC', 'COMESA'],
    beneficiaries: '50K women',
    objectives: [
      'Train women leaders',
      'Promote gender equality',
      'Develop mentorship programs',
      'Build leadership capacity',
    ],
    achievements: [
      '8K women trained',
      '200 mentorship circles formed',
      '1,500 women in leadership',
      '90% leadership advancement rate',
    ],
    color: 'bg-orange-500',
  },
  {
    icon: BarChart,
    title: 'Community Development',
    description: 'Holistic community development programs addressing social, economic, and spiritual needs in partnership with local ministries.',
    category: 'Community Outreach',
    status: 'Active',
    budget: '$4M',
    duration: '2019-2024',
    countries: ['Nigeria', 'South Africa', 'Kenya', 'Egypt', 'Ghana'],
    beneficiaries: '300K people',
    objectives: [
      'Address community needs',
      'Promote social justice',
      'Develop sustainable programs',
      'Build ministry-community partnerships',
    ],
    achievements: [
      '180 communities served',
      '500 development projects',
      '50K families impacted',
      '95% community satisfaction',
    ],
    color: 'bg-red-500',
  },
  {
    icon: Users,
    title: 'Global Missions Network',
    description: 'Connecting African ministries with global missions opportunities and building international ministry partnerships.',
    category: 'Global Missions',
    status: 'Active',
    budget: '$6M',
    duration: '2020-2030',
    countries: ['All 54 African Countries'],
    beneficiaries: '1M people',
    objectives: [
      'Coordinate missions efforts',
      'Build global partnerships',
      'Share ministry resources',
      'Expand kingdom impact',
    ],
    achievements: [
      '200+ partnerships established',
      '5K missionaries sent',
      '25 international connections',
      '90% missions success rate',
    ],
    color: 'bg-cyan-500',
  },
];

const ProgramsSectionShadcn: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = ['All', 'Ministry Training', 'Youth Development', 'Women Leadership', 'Community Outreach', 'Global Missions'];
  
  const filteredPrograms = selectedCategory === 'All' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  const handleProgramClick = (program: typeof programs[0]) => {
    setSelectedProgram(program);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProgram(null);
  };

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Ministry Programs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            Comprehensive ministry initiatives designed to equip leaders,
            strengthen ministries, and transform communities across Africa
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => {
              const count = category === 'All' ? programs.length : programs.filter(p => p.category === category).length;
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full px-4 py-2"
                >
                  {category}
                  <Badge variant="secondary" className="ml-2">
                    {count}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </motion.div>

        {/* Programs Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={`${selectedCategory}-${index}`}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="flex flex-col h-full rounded-xl border shadow-sm transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-4">
                        <div className={`flex items-center justify-center w-16 h-16 rounded-full ${program.color} text-white`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <Badge variant={program.status === 'Active' ? 'default' : 'secondary'}>
                          {program.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-semibold mb-2">
                        {program.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow pb-4">
                      <p className="text-muted-foreground mb-4">
                        {program.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{program.budget}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{program.beneficiaries}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-primary text-primary">
                        {program.category}
                      </Badge>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        className="w-full rounded-lg py-2 font-semibold transition-all hover:translate-y-[-2px]"
                        onClick={() => handleProgramClick(program)}
                      >
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Program Detail Modal */}
        {modalOpen && selectedProgram && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-background rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className={`${selectedProgram.color} text-white p-6 relative`}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 text-white hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </Button>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`flex items-center justify-center w-20 h-20 rounded-full bg-white/20`}>
                    <selectedProgram.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedProgram.title}</h3>
                    <Badge variant="secondary" className="mt-2">
                      {selectedProgram.category}
                    </Badge>
                  </div>
                </div>
                <p className="opacity-90">{selectedProgram.description}</p>
              </div>

              <div className="p-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <DollarSign className="w-10 h-10 mx-auto mb-2 text-primary" />
                    <h4 className="text-2xl font-bold text-primary">{selectedProgram.budget}</h4>
                    <p className="text-sm text-muted-foreground">Total Budget</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Calendar className="w-10 h-10 mx-auto mb-2 text-primary" />
                    <h4 className="text-lg font-bold text-primary">{selectedProgram.duration}</h4>
                    <p className="text-sm text-muted-foreground">Duration</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Users className="w-10 h-10 mx-auto mb-2 text-primary" />
                    <h4 className="text-lg font-bold text-primary">{selectedProgram.beneficiaries}</h4>
                    <p className="text-sm text-muted-foreground">Beneficiaries</p>
                  </div>
                </div>

                {/* Countries */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Target Countries/Regions
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProgram.countries.map((country, index) => (
                      <Badge key={index} variant="outline" className="border-primary text-primary">
                        {country}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Objectives */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Objectives</h4>
                  <div className="space-y-2">
                    {selectedProgram.objectives.map((objective, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full ${selectedProgram.color} mt-2`} />
                        <p className="text-sm">{objective}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
                  <div className="space-y-2">
                    {selectedProgram.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-33">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                        <p className="text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramsSectionShadcn;