import { Box, Button, Grid, Typography } from '@mui/material'
import BBQ from '../../assets/bbqflip.jpg'

function Hero() {
  return (
    <Grid container >
        <Grid item xs={12}>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: 300,
                    backgroundImage: `url(${BBQ})`,
                    backgroundSize: 'cover',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'start'
                }}
            >
                <Grid container xs={12}p={2}>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: 210,
                                backgroundColor: 'rgba(221, 180, 115, 0.9)',
                                padding: '1rem',
                                borderRadius: '15px',
                            }}
                        >
                            <Box>
                                <Typography variant='h5' sx={{ color: 'var(--color-1)', fontWeight: 700 }} >Houston's Best</Typography>
                                <Typography variant='h6' sx={{ color: 'var(--color-1)', fontWeight: 700 }}>BEST SAUCE</Typography>
                                <Typography variant="body2" sx={{ color: 'var(--color-1)', fontWeight: 700 }}>BEST EXPERIENCE</Typography>
                                <Button variant='contained' sx={{ backgroundColor: 'var(--color-1)',color: 'var(--color-2)', fontWeight: 700 }}>Order Now</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </Grid>
  )
}

export default Hero