'use client';

import { Box, Container, Typography, Paper, Grid, Avatar, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function LeadershipPage() {
  const founders = [
    {
      name: "Rev. Mary Louise Copeland",
      role: "First President, International Ministers Forum",
      image: "/images/leadership/mary-copeland.jpg",
      bioSections: [
        {
          title: "Early Life & Ministry Beginnings",
          content: "Born February 18, 1909, in Huffman, Mississippi County, Arkansas, USA. Died November 17, 1988, in Poplar Bluff, Butler County, Missouri at age 79. Originally started as a women's ministerial group with Sis. Louise Copeland as the first president, serving from 1960 until 1998."
        },
        {
          title: "Ministry & Leadership",
          content: "She was the pastor of Faith Tabernacle in Poplar Bluff, Missouri. Men were allowed to join around 1975 when they asked the group because of their integrity. The name was then changed to International Ministers Forum. Sis. Copeland became known as 'Preacher'."
        },
        {
          title: "Legacy & Transition",
          content: "IMF was incorporated in 1987 in Missouri the year before Sis. Copeland died in 1988. She was a true pioneer in the Pentecostal, Healing Revival, Latter Rain, and Charismatic Movements, ministering with many healing evangelists as part of the 'Voice of Healing' network."
        }
      ]
    },
    {
      name: "Pastor Doris Swartz",
      role: "Second President, International Ministers Forum",
      image: "/images/leadership/doris-swartz.jpg",
      bioSections: [
        {
          title: "Personal & Ministry Background",
          content: "Full name: Doris J. Swartz. Born: November 27, 1933. Died: May 22, 2012 at 4:01 AM in Dayton, Ohio at age 78. She was the Secretary Treasurer and trained under 'Preacher' Louise Copeland."
        },
        {
          title: "Leadership & Service",
          content: "Pastor of United Christian Center Church, Dayton, OH for 45 years. She later moved back to Ohio to pastor the United Christian Center in Dayton for over 40 years. Became the second president of IMF after Sis. Copeland's death in 1988 and served until her death in 2012."
        },
        {
          title: "Legacy & Transition",
          content: "After her death, services were held at United Christian Center with interment at Woodland Cemetery. She passed the leadership to Bishop Darrell & Kathy Gooden, who had been pastors for 43 years and married 53 years at that time."
        }
      ]
    }
  ];

  const currentLeaders = [
    {
      name: "Bishop Darrell & Pastor Kathy Gooden",
      role: "President, International Ministers Forum (IMF) USA",
      image: "/images/leadership/president.png",
      bioSections: [
        {
          title: "Leadership Role",
          content: "Current President of the International Ministers Forum (IMF) USA. They Pastor the Rehoboth Christian Center in Tallapoosa, Georgia. Headquarters are located in Tallapoosa in the Rehoboth Christian Center."
        },
        {
          title: "Ministry Experience",
          content: "They have been pastors for 43 years and married 53 years. They had IMF incorporated in Georgia. International Minister's Forum is recognized by the Federal Government as an established Ecclesiastical Fellowship."
        }
      ]
    },
    {
      name: "Pastor Paul Price",
      role: "Vice President, International Ministers Forum (IMF) USA",
      image: "/images/leadership/vice-president.jpg",
      bioSections: [
        {
          title: "Leadership Role",
          content: "Made Vice President in 2012. Pastor of Cornerstone Worship Center in Indiana, Pennsylvania."
        },
        {
          title: "Ministry Focus",
          content: "Serves as Vice President, supporting the President in overseeing the operations and strategic direction of the International Ministers Forum USA."
        }
      ]
    },
    {
      name: "Rev. Olusegun and Rev Dr Blessing Jibuike",
      role: "President, IMF Africa",
      image: "/images/leadership/africa-president.png",
      bioSections: [
        {
          title: "Regional Leadership",
          content: "President of IMF Nigeria and the entire IMF family in Nigeria and Africa. Recently inaugurated the IMF Lagos State chapter under the leadership of Rev Oladapo Taiwo."
        },
        {
          title: "African Ministry",
          content: "Dedicated to expanding the reach of IMF programs throughout Africa and supporting local church leaders in their spiritual development and community impact."
        }
      ]
    },
    {
      name: "Amb. Edward Grace",
      role: "Secretary General, IMF Africa",
      image: "/images/leadership/secretary-general.JPG",
      bioSections: [
        {
          title: "Administrative Leadership",
          content: "Serves as the Secretary General of IMF Africa, overseeing the administrative functions and coordination of the IMF Africa chapter."
        },
        {
          title: "Regional Coordination",
          content: "Responsible for facilitating communication and collaboration within IMF Africa, ensuring effective implementation of organizational initiatives across the African continent."
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