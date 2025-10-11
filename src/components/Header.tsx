'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  useTheme,
  useMediaQuery,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Badge,
  Container,
  ListItemText,
  Chip,
  alpha,
  Switch,
  FormControlLabel,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  AccountCircle as AccountIcon,
  Info as InfoIcon,
  History as HistoryIcon,
  Assignment as AssignmentIcon,
  Church as ChurchIcon,
  Person as PersonIcon,
  PhotoLibrary as PhotoLibraryIcon,
  Article as ArticleIcon,
  ContactMail as ContactIcon,
  Dashboard as DashboardIcon,
  Logout as LogoutIcon,
  Login as LoginIcon,
  Home as HomeIcon,
  AccountCircle as AccountCircleIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
} from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

// Organized navigation structure with logical grouping
const navigation: NavigationItem[] = [
  { name: 'Home', href: '/welcome' },
  { name: 'About', href: '/about' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Programs', href: '/programs' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const { user, logout, isAuthenticated } = useAuth();
  const { mode, toggleTheme } = useThemeContext();
  const router = useRouter();
  const pathname = usePathname();

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

  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: 'background.paper', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        p: 2,
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            component="img"
            src="https://res.cloudinary.com/dprrsr08j/image/upload/v1760178679/logo_wv6j8l.png"
            alt="IMF Africa Logo"
            sx={{
              width: 'auto',
              height: 24,
              objectFit: 'contain',
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/24x24?text=Logo';
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main', fontSize: '1.1rem' }}>
            IMF AFRICA
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} size="small">
          <CloseIcon />
        </IconButton>
      </Box>
      
      {/* Theme Toggle in Mobile Menu */}
      <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
        <FormControlLabel
          control={
            <Switch
              checked={mode === 'dark'}
              onChange={toggleTheme}
              icon={<LightModeIcon />}
              checkedIcon={<DarkModeIcon />}
            />
          }
          label={mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
          sx={{ 
            m: 0,
            width: '100%',
            justifyContent: 'space-between',
            ml: 0,
            '& .MuiFormControlLabel-label': {
              fontWeight: 500,
              fontSize: '0.95rem'
            }
          }}
        />
      </Box>
      
      <List sx={{ pt: 1, flex: 1 }}>
        {navigation.map((item) => (
          <ListItem 
            key={item.name}
            component={Link} 
            href={item.href}
            onClick={handleDrawerToggle}
            sx={{ 
              cursor: 'pointer',
              '&:hover': { bgcolor: 'action.hover' },
              borderRadius: 1,
              mx: 0.5,
              my: 0.25,
              py: 1.2,
              bgcolor: pathname === item.href ? alpha(theme.palette.primary.main, 0.1) : 'transparent'
            }}
          >
            <ListItemText 
              primary={item.name}
              sx={{ 
                '& .MuiTypography-root': { 
                  fontWeight: pathname === item.href ? 600 : 500,
                  color: pathname === item.href ? 'primary.main' : 'text.primary',
                  fontSize: '0.95rem'
                }
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Mobile User Profile */}
      {isAuthenticated && user && (
        <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: 'primary.main',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.8rem'
              }}
            >
              {user.firstName[0]}{user.lastName[0]}
            </Avatar>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.85rem' }}>
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                {user.country}
              </Typography>
            </Box>
          </Box>
          <Button
            fullWidth
            variant="outlined"
            size="small"
            onClick={handleLogout}
            startIcon={<LogoutIcon sx={{ fontSize: '1rem' }} />}
            sx={{ borderRadius: 1, py: 0.5, fontSize: '0.8rem' }}
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
          bgcolor: 'background.paper',
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ 
            justifyContent: 'space-between', 
            minHeight: 72,
            px: { xs: 2, sm: 3 }
          }}>
            {/* Logo Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                component="img"
                src="https://res.cloudinary.com/dprrsr08j/image/upload/v1760178679/logo_wv6j8l.png"
                alt="IMF Africa Logo"
                sx={{
                  height: '36px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/36x36?text=Logo';
                }}
              />
              <Link href="/welcome" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    fontSize: '1.3rem',
                    lineHeight: 1,
                    letterSpacing: '-0.5px'
                  }}
                >
                  IMF AFRICA
                </Typography>
              </Link>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {navigation.map((item) => (
                  <Button
                    key={item.name}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: pathname === item.href ? 'primary.main' : 'text.primary',
                      fontWeight: pathname === item.href ? 600 : 500,
                      px: 1.8,
                      py: 1,
                      borderRadius: 2,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      minWidth: 'auto',
                      position: 'relative',
                      '&:hover': {
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                      },
                      '&::after': pathname === item.href ? {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60%',
                        height: 3,
                        bgcolor: 'primary.main',
                        borderRadius: 3,
                      } : {}
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
                
                {/* Theme Toggle */}
                <IconButton
                  onClick={toggleTheme}
                  sx={{
                    mx: 1,
                    color: 'text.primary',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                    }
                  }}
                >
                  {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                
                {/* Desktop User Profile Section */}
                {isAuthenticated && user ? (
                  <IconButton
                    onClick={handleProfileMenuOpen}
                    sx={{
                      p: 0,
                      ml: 2,
                      border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                      '&:hover': {
                        border: `2px solid ${theme.palette.primary.main}`,
                      }
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 36,
                        height: 36,
                        bgcolor: 'primary.main',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                      }}
                    >
                      {user.firstName[0]}{user.lastName[0]}
                    </Avatar>
                  </IconButton>
                ) : (
                  <Button
                    component={Link}
                    href="/auth"
                    variant="contained"
                    size="medium"
                    sx={{
                      ml: 2,
                      px: 2.5,
                      py: 1,
                      borderRadius: 2,
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '0.9rem',
                      bgcolor: 'primary.main',
                      boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.25)}`,
                      '&:hover': {
                        bgcolor: 'primary.dark',
                        boxShadow: `0 6px 16px ${alpha(theme.palette.primary.main, 0.35)}`,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Join Us
                  </Button>
                )}
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {isAuthenticated && user && (
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: 'primary.main',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                    }}
                  >
                    {user.firstName[0]}{user.lastName[0]}
                  </Avatar>
                )}
                <IconButton
                  color="primary"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    p: 0.75,
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.2),
                    }
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
            borderRadius: 2,
            minWidth: 200,
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            mt: 1.5,
          },
        }}
      >
        {user && (
          <Box sx={{ p: 2.5, pb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: 'primary.main',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                {user.firstName[0]}{user.lastName[0]}
              </Avatar>
              <Box>
                <Typography variant="subtitle2" fontWeight={600}>
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {user.email}
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={() => router.push('/dashboard')} sx={{ py: 1.2, fontSize: '0.95rem', mx: 0.5, borderRadius: 1 }}>
          <AccountCircleIcon sx={{ mr: 1.5, fontSize: '1.1rem' }} />
          Dashboard
        </MenuItem>
        <MenuItem onClick={handleProfileMenuClose} sx={{ py: 1.2, fontSize: '0.95rem', mx: 0.5, borderRadius: 1 }}>
          <PersonIcon sx={{ mr: 1.5, fontSize: '1.1rem' }} />
          My Profile
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleLogout} sx={{ color: 'error.main', py: 1.2, fontSize: '0.95rem', mx: 0.5, borderRadius: 1 }}>
          <LogoutIcon sx={{ mr: 1.5, fontSize: '1.1rem' }} />
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
            borderLeft: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;