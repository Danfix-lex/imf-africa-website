'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Chip,
  Collapse,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Church as ChurchIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
  AccountCircle as AccountCircleIcon,
  ExpandLess,
  ExpandMore,
  Home as HomeIcon,
  Info as InfoIcon,
  School as SchoolIcon,
  Article as ArticleIcon,
  Payment as PaymentIcon,
  ContactPhone as ContactIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  subItems?: { name: string; href: string }[];
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/welcome', icon: <HomeIcon /> },
  { 
    name: 'About Us', 
    href: '/site', 
    icon: <InfoIcon />,
    subItems: [
      { name: 'Our Story', href: '/about' },
      { name: 'Leadership', href: '/leadership' },
      { name: 'Mission & Vision', href: '/mission' }
    ]
  },
  { 
    name: 'Ministry', 
    href: '/programs', 
    icon: <ChurchIcon />,
    subItems: [
      { name: 'Programs', href: '/programs' },
      { name: 'Church Planting', href: '/church-planting' },
      { name: 'Training', href: '/training' }
    ]
  },
  { name: 'Resources', href: '/resources', icon: <SchoolIcon /> },
  { name: 'News & Events', href: '/news', icon: <ArticleIcon /> },
  { name: 'Donate', href: '/payment', icon: <PaymentIcon /> },
  { name: 'Contact', href: '/contact', icon: <ContactIcon /> },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleProfileMenuClose();
    router.push('/welcome');
  };

  const handleExpandClick = (itemName: string) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        p: 2,
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ChurchIcon sx={{ color: 'primary.main', fontSize: 28 }} />
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
            IMF AFRICA
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List sx={{ pt: 2 }}>
        {navigation.map((item) => (
          <Box key={item.name}>
            <ListItem 
              component={item.subItems ? 'div' : Link} 
              href={item.subItems ? undefined : item.href}
              onClick={item.subItems ? () => handleExpandClick(item.name) : handleDrawerToggle}
              sx={{ 
                cursor: 'pointer',
                '&:hover': { bgcolor: 'action.hover' },
                borderRadius: 1,
                mx: 1
              }}
            >
              <Box sx={{ mr: 2, color: 'primary.main', minWidth: 24 }}>
                {item.icon}
              </Box>
              <ListItemText 
                primary={item.name}
                sx={{ 
                  '& .MuiTypography-root': { 
                    fontWeight: 500,
                    color: 'text.primary',
                    fontSize: '1rem'
                  }
                }}
              />
              {item.subItems && (
                expandedItem === item.name ? <ExpandLess /> : <ExpandMore />
              )}
            </ListItem>
            
            {item.subItems && (
              <Collapse in={expandedItem === item.name} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem
                      key={subItem.name}
                      component={Link}
                      href={subItem.href}
                      onClick={handleDrawerToggle}
                      sx={{
                        pl: 6,
                        cursor: 'pointer',
                        '&:hover': { bgcolor: 'action.hover' },
                        borderRadius: 1,
                        mx: 1
                      }}
                    >
                      <ListItemText 
                        primary={subItem.name}
                        sx={{ 
                          '& .MuiTypography-root': { 
                            fontWeight: 400,
                            color: 'text.secondary',
                            fontSize: '0.9rem'
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>

      {/* Mobile User Profile */}
      {isAuthenticated && user && (
        <Box sx={{ mt: 'auto', p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                bgcolor: 'primary.main',
                color: 'white',
                fontWeight: 600,
              }}
            >
              {user.firstName[0]}{user.lastName[0]}
            </Avatar>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {user.country}
              </Typography>
            </Box>
          </Box>
          <Button
            fullWidth
            variant="outlined"
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
            sx={{ borderRadius: 2 }}
          >
            Sign Out
          </Button>
        </Box>
      )}
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          bgcolor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 2px 20px rgba(0,0,0,0.05)'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: { xs: 1, md: 1.5 }, minHeight: { xs: 64, md: 80 } }}>
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 2 } }}>
                <ChurchIcon 
                  sx={{ 
                    fontSize: { xs: 32, md: 40 }, 
                    color: 'primary.main',
                    filter: 'drop-shadow(0 2px 4px rgba(25, 118, 210, 0.3))',
                  }} 
                />
                <Box>
                  <Link href="/welcome" style={{ textDecoration: 'none' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        color: 'primary.main',
                        fontSize: { xs: '1.1rem', md: '1.4rem' },
                        letterSpacing: '0.5px',
                        lineHeight: 1,
                      }}
                    >
                      IMF AFRICA
                    </Typography>
                  </Link>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      display: 'block',
                      lineHeight: 1,
                      fontSize: { xs: '0.7rem', md: '0.8rem' },
                      fontWeight: 500,
                      letterSpacing: '0.3px',
                    }}
                  >
                    International Ministers Forum
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + 0.3 
                      }}
                    >
                      <Button
                        component={Link}
                        href={item.href}
                        startIcon={item.icon}
                        sx={{
                          color: 'text.primary',
                          fontWeight: 600,
                          px: { xs: 1.5, md: 2 },
                          py: 1,
                          borderRadius: 2,
                          fontSize: { xs: '0.85rem', md: '0.9rem' },
                          textTransform: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)',
                          },
                        }}
                      >
                        {item.name}
                      </Button>
                    </motion.div>
                  ))}
                  
                  {/* Desktop User Profile Section */}
                  {isAuthenticated && user ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 2 }}>
                      <Chip
                        label={user.country}
                        size="small"
                        sx={{ 
                          bgcolor: 'primary.main', 
                          color: 'white',
                          fontWeight: 500,
                          fontSize: '0.75rem'
                        }}
                      />
                      <IconButton
                        onClick={handleProfileMenuOpen}
                        sx={{
                          p: 0,
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                          transition: 'transform 0.2s ease',
                        }}
                      >
                        <Avatar
                          sx={{
                            width: { xs: 36, md: 40 },
                            height: { xs: 36, md: 40 },
                            bgcolor: 'primary.main',
                            color: 'white',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            boxShadow: '0 2px 10px rgba(25, 118, 210, 0.3)',
                          }}
                        >
                          {user.firstName[0]}{user.lastName[0]}
                        </Avatar>
                      </IconButton>
                    </Box>
                  ) : (
                    <Box sx={{ ml: 2 }}>
                      <Button
                        component={Link}
                        href="/auth"
                        variant="contained"
                        sx={{
                          px: 3,
                          py: 1,
                          borderRadius: 2,
                          fontWeight: 600,
                          textTransform: 'none',
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                          '&:hover': {
                            background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Join Us
                      </Button>
                    </Box>
                  )}
                </Box>
              </motion.div>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {isAuthenticated && user && (
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: 'primary.main',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                    }}
                  >
                    {user.firstName[0]}{user.lastName[0]}
                  </Avatar>
                )}
                <IconButton
                  color="primary"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    ml: 1,
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          '& .MuiPaper-root': {
            borderRadius: 3,
            minWidth: 220,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            border: '1px solid rgba(0,0,0,0.05)',
          },
        }}
      >
        {user && (
          <Box sx={{ p: 3 }}>
            <Typography variant="subtitle1" fontWeight={600}>
              {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
            {user.position && (
              <Chip
                label={user.position}
                size="small"
                sx={{ mt: 1, bgcolor: 'grey.100' }}
              />
            )}
          </Box>
        )}
        <Divider />
        <MenuItem onClick={() => router.push('/dashboard')} sx={{ py: 1.5 }}>
          <AccountCircleIcon sx={{ mr: 2 }} />
          Dashboard
        </MenuItem>
        <MenuItem onClick={handleProfileMenuClose} sx={{ py: 1.5 }}>
          <PersonIcon sx={{ mr: 2 }} />
          My Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout} sx={{ color: 'error.main', py: 1.5 }}>
          <LogoutIcon sx={{ mr: 2 }} />
          Sign Out
        </MenuItem>
      </Menu>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            bgcolor: 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;