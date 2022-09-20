import { Box, Button, Grid, Typography } from '@mui/material'
import Ribs from '../../assets/ribs.jpg'
import Pork from '../../assets/pork.jpeg'
import Sammy from '../../assets/sammy.jpg'
import Tato from '../../assets/tato.png'
import Brisket from '../../assets/brisket.png'
import Family from '../../assets/family.jpg'
import Chicken from '../../assets/chicken.jpg'
import Soda from '../../assets/soda.jpg'
import Frozen from '../../assets/frozen.jpg'

function Featured() {
  return (
    <Grid container>
        <Grid item xs={12}>
            <Box>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                        <Typography variant='h3'>Featured</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'end' }}>
                            <Button variant="contained" size='small' sx={{ backgroundColor: 'var(--color-1)', color: 'var(--color-2)', fontWeight: 900 }} >Full Menu</Button>
                        </Box>
                    </Box>

                    <Grid
                        container
                        spacing={2}
                        sx={{ 
                            marginTop: '1rem'
                        }}
                    >
                        <Grid
                            item
                            xs={6}
                            sm={4}
                        >
                            <Box
                                sx={{
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    height: '15rem',
                                }}
                            >
                                <Box >
                                    <Box component='img' sx={{ height: '8rem', width: '100%', display: 'flex' }} alt='Mbbqlogo' src={Ribs}/>
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: 'var(--color-1)',
                                        padding: '1rem',
                                        borderRadius: '0 0 15px 15px',
                                    }}
                                >
                                    <Typography sx={{ color: 'var(--color-2)', fontWeight: 700 }} >Award Winning Ribs</Typography>
                                    <Typography sx={{ color: 'var(--color-2)' }}>The best ribs in the city! Guaranteed to love.</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid
                            item
                            xs={6}
                            sm={4}
                        >
                            <Box
                                sx={{
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    height: '15rem',
                                }}
                            >
                                <Box>
                                    <Box component='img' sx={{ height: '8rem', width: '100%', display: 'flex' }} alt='Mbbqlogo' src={Tato}/>
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: 'var(--color-1)',
                                        padding: '1rem',
                                        borderRadius: '0 0 15px 15px',
                                    }}
                                >
                                    <Typography sx={{ color: 'var(--color-2)', fontWeight: 700 }} >Mary's Terrific 'Tatos</Typography>
                                    <Typography sx={{ color: 'var(--color-2)' }} >The biggest and most delicious potatoes around!</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid
                            item
                            xs={6}
                            sm={4}
                        >
                            <Box
                                sx={{
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    height: '15rem'
                                }}
                            >   
                                <Box>
                                    <Box component='img' sx={{ height: '8rem', width: '100%', display: 'flex' }} alt='Mbbqlogo' src={Sammy}/>
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: 'var(--color-1)',
                                        padding: '1rem',
                                        borderRadius: '0 0 15px 15px',
                                    }}
                                >
                                    <Typography sx={{ color: 'var(--color-2)', fontWeight: 700 }} >BBQ Sandwich</Typography>
                                    <Typography sx={{ color: 'var(--color-2)' }} >Nothing beats our signature sandwiches!</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ marginTop: '1rem'}}>
                        <Grid item xs={6}>
                            <Box
                                sx={{
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    height: '15rem',
                                }}
                            >
                                <Box>
                                    <Box component='img' sx={{ height: '8rem', width: '100%', display: 'flex' }} alt='Mbbqlogo' src={Pork}/>
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: 'var(--color-1)',
                                        padding: '1rem',
                                        borderRadius: '0 0 15px 15px',
                                    }}
                                >
                                    <Typography sx={{ color: 'var(--color-2)', fontWeight: 700 }} >Happy Hogs</Typography>
                                    <Typography sx={{ color: 'var(--color-2)' }} >Peruse pleasant pork!</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box
                                sx={{
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    height: '15rem'
                                }}
                            >
                                <Box>
                                    <Box component='img' sx={{ height: '8rem', width: '100%', display: 'flex' }} alt='Mbbqlogo' src={Brisket}/>
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: 'var(--color-1)',
                                        padding: '1rem',
                                        borderRadius: '0 0 15px 15px',
                                    }}
                                >
                                    <Typography sx={{ color: 'var(--color-2)', fontWeight: 700 }} >Big Boy Brisket</Typography>
                                    <Typography sx={{ color: 'var(--color-2)' }} >Fresh delicious moist BRISKET!</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                        <Typography variant='h3'>Deals</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'end' }}>
                            <Button variant="contained" size='small' sx={{ backgroundColor: 'var(--color-1)', color: 'var(--color-2)', fontWeight: 900 }} >View All</Button>
                        </Box>
                    </Box>

                    <Grid
                        container
                        spacing={2}
                        sx={{ 
                            marginTop: '1rem'
                        }}
                    >
                        <Grid item xs={6}>
                            <Box
                                sx={{
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    height: '15rem',
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: 'var(--color-1)',
                                        padding: '1rem',
                                        borderRadius: '0 0 15px 15px',
                                        height: '100%',
                                        backgroundImage: `url(${Family})`,
                                        backgroundSize: 'contain'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            border: '11px solid var(--color-1)',
                                            height: '80%',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                backgroundColor: 'var(--color-1)',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <Typography sx={{ color: 'var(--color-2)', fontWeight: 700 }} >3 Meat Platter Family Deal!</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                        <Box
                                sx={{
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    height: '15rem',
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: 'var(--color-1)',
                                        padding: '1rem',
                                        borderRadius: '0 0 15px 15px',
                                        height: '100%',
                                        backgroundImage: `url(${Chicken})`,
                                        backgroundSize: 'contain'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            border: '11px solid var(--color-1)',
                                            height: '80%',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                backgroundColor: 'var(--color-1)',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <Typography sx={{ color: 'var(--color-2)', fontWeight: 700 }} >Whole Chicken Family Deal!</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                        <Typography variant='h3'>Beverages</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'end' }}>
                            <Button variant="contained" size='small' sx={{ backgroundColor: 'var(--color-1)', color: 'var(--color-2)', fontWeight: 900 }} >Drink Menu</Button>
                        </Box>
                    </Box>

                    <Grid container spacing={2} sx={{ marginTop: '1rem'}}>
                        <Grid item xs={6}>
                            <Box
                                sx={{
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    height: '15rem',
                                }}
                            >
                                <Box>
                                    <Box component='img' sx={{ height: '8rem', width: '100%', display: 'flex' }} alt='Mbbqlogo' src={Soda}/>
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: 'var(--color-1)',
                                        padding: '1rem',
                                        borderRadius: '0 0 15px 15px',
                                    }}
                                >
                                    <Typography sx={{ color: 'var(--color-2)', fontWeight: 700 }} >Beverages aplenty</Typography>
                                    <Typography sx={{ color: 'var(--color-2)' }} >Carbonated drinks, teas, and juices!</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box
                                sx={{
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    height: '15rem'
                                }}
                            >
                                <Box>
                                    <Box component='img' sx={{ height: '8rem', width: '100%', display: 'flex' }} alt='Mbbqlogo' src={Frozen}/>
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: 'var(--color-1)',
                                        padding: '1rem',
                                        borderRadius: '0 0 15px 15px',
                                    }}
                                >
                                    <Typography sx={{ color: 'var(--color-2)', fontWeight: 700 }} >Adult Beverages</Typography>
                                    <Typography sx={{ color: 'var(--color-2)' }} >Frozen ritas, hard liquors, and more!</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Grid>
    </Grid>
  )
}

export default Featured