import { useState } from 'react'
import { AppBar, Badge, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Mbbqlogo from '../../assets/mbbqlogo.png'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
      },
}))

function ProtectedNav() {
    const [anchorMenu, setAnchorMenu] = useState(null)
    const [anchorUser, setAnchorUser] = useState(null)

    const handleOpenMenu = (event) => {
        setAnchorMenu(event.currentTarget)
    }

    const handleOpenUser = (event) => {
        setAnchorUser(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorMenu(null)
    }

    const handleCloseUser = () => {
        setAnchorUser(null)
    }

  return (
    <AppBar className='navbar' position='static' sx={{ backgroundColor: 'var(--color-1)' }}>
        <Container maxWidth='l'>
            <Toolbar>
                <Box component='img' sx={{ height: 40, display: { xs: 'none', md: 'flex' } }} alt='Mbbqlogo' src={Mbbqlogo}/>
                <Typography 
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        ml: 2,
                        fontWeight: 700,
                        color: 'var(--color-2)',
                        textDecoration: 'none',
                    }}
                >
                    Mary's BBQ
                </Typography>
                
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenMenu}
                        sx={{ color: 'var(--color-2)' }}
                    >
                        <RestaurantMenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorMenu}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorMenu)}
                    onClose={handleCloseMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                        <MenuItem onClick={handleCloseMenu}>
                            <Typography textAlign="center">Menu</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseMenu}>
                            <Typography textAlign="center">Location</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseMenu}>
                            <Typography textAlign="center">About</Typography>
                        </MenuItem>
                    </Menu>
                </Box>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button
                        onClick={handleCloseMenu}
                        sx={{ my: 2, color: 'var(--color-2)', display: 'block' }}
                    >
                        "Products"
                    </Button>
                    <Button
                        onClick={handleCloseMenu}
                        sx={{ my: 2, color: 'var(--color-2)', display: 'block' }}
                    >
                        "Shady"
                    </Button>
                </Box>

                <IconButton sx={{ mr: 2 }}>
                    <StyledBadge badgeContent={4} sx={{ color: 'var(--color-4)' }}>
                        <ShoppingCartIcon sx={{ color: 'var(--color-2)' }} />
                    </StyledBadge>
                </IconButton>
                
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title='Open Settings'>
                        <IconButton onClick={handleOpenUser} sx={{ p: 0 }}>
                            <AccountCircleIcon sx={{ color: 'var(--color-2)' }} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px'}}
                        anchorEl={anchorUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        open={Boolean(anchorUser)}
                        onClose={handleCloseUser}
                    >
                        <MenuItem onClick={handleCloseUser}>
                            <Typography textAlign='center'>Settings</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseUser}>
                            <Typography textAlign='center'>Profile</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default ProtectedNav