import { Box, Button, Grid, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';

function LocationBanner() {
  return (
    <Grid container >
        <Grid item xs={12}>
            <Box
                sx={{
                    display: 'flex',
                    backgroundColor: 'var(--color-1)',
                    borderRadius: '15px',
                    justifyContent: 'space-between'
                }}
            >
                <LocationOnIcon sx={{ color: 'var(--color-2)', alignSelf: 'center', padding: '1rem' } }/>
                <Box sx={{ alignSelf: 'center', padding: '1rem' }} >
                    <Typography sx={{ color: 'var(--color-2)'}} fontWeight='700' >Find your local store</Typography>
                </Box>
                <Box sx={{ alignSelf: 'center', padding: '1rem' }}>
                    <Button variant="contained" sx={{ backgroundColor: 'var(--color-2)', color: 'var(--color-1)', fontWeight: 900 }}>Find Deals</Button>
                </Box>
            </Box>
        </Grid>
    </Grid>
  )
}

export default LocationBanner