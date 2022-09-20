import { Box, Grid } from '@mui/material'
import Hero from './items/Hero'
import LocationBanner from './items/LocationBanner'
import Featured from './items/Featured'

function Welcome() {
  return (
    <Grid container justifyContent='center'>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem',
            gap: '1rem',
          }}
      >
        <Hero />
        <LocationBanner />
        <Featured />
      </Box>
    
      </Grid>
    </Grid>
  )
}

export default Welcome