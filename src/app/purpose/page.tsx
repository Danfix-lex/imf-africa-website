'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { 
  Church as ChurchIcon, 
  Check as CheckIcon, 
  ExpandMore as ExpandMoreIcon,
  Group as GroupIcon,
  Assignment as AssignmentIcon,
  Gavel as GavelIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PurposePage: React.FC = () => {
  const theme = useTheme();

  const purposes = [
    "To provide strength that will stand with members against satanic attack",
    "To give Godly counsel when needed",
    "To help the local Church stand as member of the body of Christ",
    "To promote fellowship with one another and provide a base of sharing ministries",
    "To offer protection",
    "To help promote unity among the brethren and to help bring peace where there is division",
    "International Ministries Forum, Inc. has no desire to own your property or to promote false gain in any way",
    "The most important outreach of the fellowship is to established a worldwide vision",
    "Our desire is to spread the Gospel to all people both at home and in all areas of the world, through many outreaches, feeding/clothing programs and whatever means available as a tool of ministry",
    "To host conventions in various parts of the world and to be of assistance in conventions and ministries of other fellowship with which we have networked"
  ];

  const membershipWelcome = [
    "Those who are called to serve the Lord Jesus Christ but have never been ordained",
    "Those who have been previously ordained, and desire to become a part of I.M.F",
    "Those who are ordained, a part of another Fellowship or Organization, but would like 'dual fellowship'",
    "Becoming a Member of I.M.F. does not affect any activity with other Fellowship"
  ];

  const stepsToJoin = [
    "Complete and submit the downloadable Application for consideration",
    "If you have been ordained, it is necessary to do so. Ordination services are held during all Conventions. I.M.F. has networked with other Fellowship, therefore, it is possible to arrangement through our office",
    "If you have been previously ordained, but share the vision of I.M.F and would like to become a part of it, you may apply for license with I.M.F"
  ];

  const ordinationVsLicense = [
    {
      title: "Ordination",
      content: "Ordination comes from God, and is the spiritual covering in regard to the responds of your answer to God's call in your life. This is done by the laying on of hands of the presbytery. And this, of course, is a lifetime commitment; therefore, it is only necessary once."
    },
    {
      title: "License",
      content: "Licensing is a legal covering and issued for a specific period of time. The I.M.F. has a membership fee of $75.00 and must be renewed annually. However, the Nigerian membership has been reconsidered to pay N50,000 for president of I.M.F. USA. All licenses expire on Dec. 31, of each year and biennially for Nigerians respectively."
    }
  ];

  const responsibilities = [
    "It is recommended that you file your certificate with your Recorder's office, either Country or State, whichever your State may require",
    "Finances must be properly handled and recorded, in order for you to provide safety for both your ministry and your supporters",
    "All funds are to be used solely for the purpose for which they were received and designated",
    "You bear the responsibility of meeting the requirement of I.R.S & FIRS (for Nigeria) respectively",
    "I.M.F. is a Fellowship, not an Organization, and we do not handle your finances nor hold your properties; therefore, I.M.F. cannot accept any responsibility for any actions outside the perimeter of the law"
  ];

  return (
    <>
      <Header />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: 15 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Purpose & Membership
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 400,
                  color: 'text.secondary',
                  maxWidth: 800,
                  mx: 'auto',
                }}
              >
                Understanding our purpose, who we welcome, and how to become part of our fellowship
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ mb: 10 }}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)',
                mb: 8,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 3,
                    }}
                  >
                    <ChurchIcon sx={{ fontSize: 32 }} />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Our Purpose
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}
                >
                  IMF is committed to the gospel of Christ. Thus we must consider our action and decision 
                  in whatever we do. The scripture in 2 Peter 1:10 advises us to make our calling and election 
                  sure, and to walk worthy of our vocation. Integrity, accountability and responsibility are 
                  what IMF represents which are keys to successful ministry.
                </Typography>
                
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                  Specific Purposes:
                </Typography>
                <List>
                  {purposes.map((purpose, index) => (
                    <ListItem key={index} sx={{ py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={purpose} 
                        primaryTypographyProps={{ 
                          variant: 'body1',
                          color: 'text.secondary'
                        }} 
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
              Who Is Welcome?
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr' }, gap: 4 }}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(0,0,0,0.05)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        bgcolor: 'secondary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                      }}
                    >
                      <GroupIcon />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      Membership Categories
                    </Typography>
                  </Box>
                  <List>
                    {membershipWelcome.map((item, index) => (
                      <ListItem key={index} sx={{ py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={item} 
                          primaryTypographyProps={{ 
                            variant: 'body1',
                            color: 'text.secondary'
                          }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Box>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
              Steps to Join
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr' }, gap: 4 }}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(0,0,0,0.05)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                      }}
                    >
                      <AssignmentIcon />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      Application Process
                    </Typography>
                  </Box>
                  <List>
                    {stepsToJoin.map((step, index) => (
                      <ListItem key={index} sx={{ py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={step} 
                          primaryTypographyProps={{ 
                            variant: 'body1',
                            color: 'text.secondary'
                          }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Box>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
              Ordination vs. License
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
              {ordinationVsLicense.map((item, index) => (
                <Box component="div" key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(0,0,0,0.05)',
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: '50%',
                            bgcolor: index === 0 ? 'primary.main' : 'secondary.main',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 3,
                          }}
                        >
                          <GavelIcon />
                        </Box>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                          {item.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{ color: 'text.secondary', lineHeight: 1.8 }}
                      >
                        {item.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      bgcolor: 'secondary.main',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 3,
                    }}
                  >
                    <AssignmentIcon sx={{ fontSize: 32 }} />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Responsibilities After Becoming Ordained or Licensed
                  </Typography>
                </Box>
                
                <List>
                  {responsibilities.map((responsibility, index) => (
                    <ListItem key={index} sx={{ py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={responsibility} 
                        primaryTypographyProps={{ 
                          variant: 'body1',
                          color: 'text.secondary'
                        }} 
                      />
                    </ListItem>
                  ))}
                </List>
                
                <Box sx={{ mt: 4, p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                    Record Keeping
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    I recommend the simplest form of record as the safest form of record keeping 
                    Kiss-keep It Simple Saints. The Priorities of I.M.F. are to promote Fellowship 
                    and Mission outreaches on your application you were asked to send Mission Offering 
                    of any size each month. This is the method in which we support our commitment.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default PurposePage;