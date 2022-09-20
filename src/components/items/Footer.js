import { Box, Typography } from '@mui/material'
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'var(--color-1)',
            padding: '1.5rem'
        }}
    >
        <Box sx={{ justifyContent: 'space-between', gap: '2rem' }}>
            <FacebookIcon fontSize='large' sx={{ color: 'var(--color-2)' }}/>
            <PinterestIcon fontSize='large' sx={{ color: 'var(--color-2)' }}/>
            <TwitterIcon fontSize='large' sx={{ color: 'var(--color-2)' }}/>
            <InstagramIcon fontSize='large' sx={{ color: 'var(--color-2)' }}/>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1.5rem' }}>
            <Box>
                <Typography variant='h6' fontWeight='700' align='left' sx={{ color: 'var(--color-2)'}}>FOOD VENDORS</Typography>
                <Typography sx={{ color: 'var(--color-2)'}}>Health and Nutrition</Typography>
                <Typography sx={{ color: 'var(--color-2)'}}>Current Vendor Information</Typography>
                <Typography sx={{ color: 'var(--color-2)'}}>Become a vendor</Typography>
            </Box>
            <Box>
                <Typography variant='h6' fontWeight='700' align='left' sx={{ color: 'var(--color-2)'}}>LOCATIONS</Typography>
                <Typography sx={{ color: 'var(--color-2)'}}>Location Finder</Typography>
            </Box>
            <Box>
                <Typography variant='h6' fontWeight='700' align='left' sx={{ color: 'var(--color-2)'}}>CATERING</Typography>
                <Typography sx={{ color: 'var(--color-2)'}}>Office</Typography>
                <Typography sx={{ color: 'var(--color-2)'}}>School</Typography>
                <Typography sx={{ color: 'var(--color-2)'}}>House of Worship</Typography>
            </Box>
            <Box>
                <Typography variant='h6' fontWeight='700' align='left' sx={{ color: 'var(--color-2)'}}>CAREERS</Typography>
                <Typography sx={{ color: 'var(--color-2)'}}>About Mary's BBQ</Typography>
                <Typography sx={{ color: 'var(--color-2)'}}>AR Online</Typography>
                <Typography sx={{ color: 'var(--color-2)'}}>Careers</Typography>
                <Typography sx={{ color: 'var(--color-2)'}}>About Us</Typography>
            </Box>
            <Box>
                <Typography variant='h6' fontWeight='700' align='left' sx={{ color: 'var(--color-2)'}}>ORDER ONLINE</Typography>
                <Typography sx={{ color: 'var(--color-2)'}}>Gift Cards</Typography>
                <Typography sx={{ color: 'var(--color-2)'}}>Mobile App</Typography>
                <Typography sx={{ color: 'var(--color-2)'}}>Online Ordering FAQ</Typography>
                <Typography sx={{ color: 'var(--color-2)'}}>Order Now</Typography>
            </Box>
        </Box>
        <Box>
            <Typography variant='caption' fontWeight='700' align='left' sx={{ color: 'var(--color-4)'}}>Terms and Conditions | Privacy | ©️QThibDev2022</Typography>
        </Box>
    </Box>
  )
}

export default Footer