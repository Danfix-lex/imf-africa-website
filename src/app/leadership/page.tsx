'use client';

import { Box, Container, Typography, Paper, Grid, Avatar, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function LeadershipPage() {
  const founders = [
    {
      name: "Rev. Mary Louise Copeland",
      role: "Founder, International Ministers Forum",
      image: "/images/leadership/mary-copeland.jpg",
      bioSections: [
        {
          title: "Early Life & Personal Data",
          content: "Born February 18, 1909, in Huffman, Mississippi County, Arkansas, USA. Died November 17, 1988, in Poplar Bluff, Butler County, Missouri at age 79."
        },
        {
          title: "Family & Spiritual Formation",
          content: "Her father was a Southern Baptist minister and her mother influenced her toward Pentecostalism. Her upbringing straddled Baptist and Pentecostal influences in the Southern US."
        },
        {
          title: "Ministry, Influence, & Legacy",
          content: "A true pioneer in the Pentecostal, Healing Revival, Latter Rain, and Charismatic Movements. She ministered with many healing evangelists as part of the 'Voice of Healing' network, serving as an evangelist and convention speaker. Her ministry intersected with multiple revival currents throughout the 20th century."
        },
        {
          title: "Publications & Tribute Works",
          content: "A book titled \"A Tribute to the Life and Legacy of Rev. Mary Louise Copeland\" offers a detailed biography and reflections on her influence, providing background on the major movements she participated in and highlighting her interactions with key leaders."
        }
      ]
    },
    {
      name: "Pastor Doris Swartz",
      role: "Secretary Treasurer, Founder of IMF",
      image: "/images/leadership/doris-swartz.jpg",
      bioSections: [
        {
          title: "Basic Data",
          content: "Full name: Doris J. Swartz. Born: November 27, 1933. Died: May 22, 2012 at 4:01 AM in Dayton, Ohio at age 78."
        },
        {
          title: "Family",
          content: "Parents: George Todd, Sr. (father), Gertrude Todd (mother). Siblings: George Todd, Jr.; Gloria Millat Todd; sister who predeceased her, Delores June Pierson. Children: David E. Swartz, Jr. (with wife Josephine), William K. Swartz. Grandchildren: 7 grandchildren and great-grandchildren alive at time of death."
        },
        {
          title: "Ministry & Work",
          content: "Pastor of United Christian Center Church, Dayton, OH for 45 years and President of the International Ministers’ Forum. Her ministry spanned over 50 years, impacting people on four continents and according to records reaching all seven continents through her ministry efforts."
        },
        {
          title: "Legacy & Other Notes",
          content: "Known for long-term pastoral leadership in Dayton with global influence through personal ministry in many places beyond her home church. After her death, services were held at United Christian Center with interment at Woodland Cemetery."
        }
      ]
    }
  ];

  const currentLeaders = [
    {
      name: "Bishop Darrell Gooden",
      role: "President, International Ministers Forum",
      image: "/images/leadership/president.png",
      bioSections: [
        {
          title: "Leadership Role",
          content: "Serves as the President of the International Ministers Forum, providing spiritual and organizational leadership for the global ministry."
        },
        {
          title: "Ministry Experience",
          content: "Brings extensive experience in pastoral ministry and church leadership to his role as IMF President, guiding the organization's vision and strategic direction."
        }
      ]
    },
    {
      name: "Pastor Paul Price",
      role: "Vice President, International Ministers Forum",
      image: "/images/leadership/vice-president.jpg",
      bioSections: [
        {
          title: "Leadership Role",
          content: "Serves as Vice President, supporting the President in overseeing the operations and strategic direction of the International Ministers Forum."
        },
        {
          title: "Ministry Focus",
          content: "Committed to strengthening the organization's impact through collaborative leadership and program development across all IMF chapters."
        }
      ]
    },
    {
      name: "Amb. Blessing Jibuike",
      role: "President, IMF Africa",
      image: "/images/leadership/africa-president.png",
      bioSections: [
        {
          title: "Regional Leadership",
          content: "Leads the Africa chapter of the International Ministers Forum, focusing on regional ministry initiatives and church planting efforts across the continent."
        },
        {
          title: "African Ministry",
          content: "Dedicated to expanding the reach of IMF programs throughout Africa and supporting local church leaders in their spiritual development and community impact."
        }
      ]
    },
    {
      name: "Amb. Edward Grace",
      role: "Secretary General, International Ministers Forum",
      image: "/images/leadership/secretary-general.JPG",
      bioSections: [
        {
          title: "Administrative Leadership",
          content: "Serves as the Secretary General, overseeing the administrative functions and international coordination of the IMF."
        },
        {
          title: "Global Coordination",
          content: "Responsible for facilitating communication and collaboration across all IMF chapters and international branches, ensuring effective implementation of organizational initiatives."
        }
      ]
    },
    {
      name: "Sherry Swiger",
      role: "Secretary, IMF USA",
      image: "/images/leadership/secretary-usa.jpg",
      bioSections: [
        {
          title: "Ministry Role",
          content: "Serves as Secretary for IMF USA, providing administrative leadership and support for the organization's operations in the United States."
        },
        {
          title: "Service & Dedication",
          content: "Committed to supporting the mission of the International Ministers Forum through dedicated service and organizational leadership."
        }
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center" color="primary">
          Our Leadership
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary" mb={6}>
          Visionary Leaders Who Shaped and Continue to Guide the International Ministers Forum
        </Typography>
      </MotionBox>

      {/* Founders Section */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography variant="h3" component="h2" gutterBottom align="center" color="secondary" mt={6} mb={4}>
          Founding Leaders
        </Typography>
      </MotionBox>

      <Grid container spacing={6}>
        {founders.map((founder, index) => (
          <Grid size={{ xs: 12 }} key={`founder-${index}`}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
            >
              <Paper elevation={4} sx={{ p: 4, borderRadius: 4 }}>
                <Grid container spacing={4} alignItems="center">
                  <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                    <Avatar
                      src={founder.image}
                      alt={founder.name}
                      sx={{
                        width: 200,
                        height: 200,
                        border: '4px solid',
                        borderColor: 'primary.main',
                        boxShadow: 3
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Typography variant="h3" component="h2" gutterBottom color="secondary">
                      {founder.name}
                    </Typography>
                    <Typography variant="h6" component="h3" gutterBottom color="primary" fontStyle="italic">
                      {founder.role}
                    </Typography>
                    
                    {founder.bioSections.map((section, secIndex) => (
                      <Box key={secIndex} mt={3}>
                        <Typography variant="h6" component="h4" gutterBottom color="primary" fontWeight="medium">
                          {section.title}
                        </Typography>
                        <Typography variant="body1" paragraph color="text.primary" lineHeight={1.8}>
                          {section.content}
                        </Typography>
                      </Box>
                    ))}
                  </Grid>
                </Grid>
              </Paper>
            </MotionBox>
          </Grid>
        ))}
      </Grid>

      {/* Divider between sections */}
      <Divider sx={{ my: 8, borderWidth: 2 }} />

      {/* Current Leadership Section */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Typography variant="h3" component="h2" gutterBottom align="center" color="secondary" mt={6} mb={4}>
          Current Leadership
        </Typography>
      </MotionBox>

      <Grid container spacing={6}>
        {currentLeaders.map((leader, index) => (
          <Grid size={{ xs: 12 }} key={`current-${index}`}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
            >
              <Paper elevation={4} sx={{ p: 4, borderRadius: 4 }}>
                <Grid container spacing={4} alignItems="center">
                  <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                    <Avatar
                      src={leader.image}
                      alt={leader.name}
                      sx={{
                        width: 200,
                        height: 200,
                        border: '4px solid',
                        borderColor: 'primary.main',
                        boxShadow: 3
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Typography variant="h3" component="h2" gutterBottom color="secondary">
                      {leader.name}
                    </Typography>
                    <Typography variant="h6" component="h3" gutterBottom color="primary" fontStyle="italic">
                      {leader.role}
                    </Typography>
                    
                    {leader.bioSections.map((section, secIndex) => (
                      <Box key={secIndex} mt={3}>
                        <Typography variant="h6" component="h4" gutterBottom color="primary" fontWeight="medium">
                          {section.title}
                        </Typography>
                        <Typography variant="body1" paragraph color="text.primary" lineHeight={1.8}>
                          {section.content}
                        </Typography>
                      </Box>
                    ))}
                  </Grid>
                </Grid>
              </Paper>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}