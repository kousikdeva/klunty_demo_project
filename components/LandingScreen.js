import React, { useState } from 'react'
import { Grid, Typography, Button, Box, ButtonGroup, useTheme, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import DescriptionCard from './DescriptionCard'
import ImageCard from './ImageCard'
import { cardDetails, ImageCardContent } from '../public/content'
import PrimaryButton from './PrimaryButton'
import PrimaryHeading from './PrimaryHeading'


const LandingScreen = () => {
    const [sliderRef, setSliderRef] = useState(null)
    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up('md'))

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
    }

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '100%'
    }

    const firstChildContainer = {
        display: 'flex',
        justifyContent: 'center',
        height: { xs: '', lg: `calc(100vh -  110px)` },
        my: { xs: '50px', md: '' }
    }
    const gridContainerStyle = {
        rowGap: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        justifyContent: 'center',
        m: { xs: '50px', md: '' }
    }

    const secondChildContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        py: '80px',
        backgroundImage: 'linear-gradient(to bottom, #f6fbff, #f4faff, #f3faff, #f1f9ff, #eff8ff, #eff8ff, #eff8ff, #eff8ff, #f1f9ff, #f3faff, #f4faff, #f6fbff)',
        px: { xs: '20px', sm: '' }
    }

    const thirdChildContainer = {
        display: 'flex',
        width: { xs: '300px', sm: '500px', md: '1000px' },
        alignItems: 'center',
        flexDirection: 'column',
        py: '80px'
    }

    const descriptionCardContainer = {
        display: 'flex',
        justifyContent: 'space-evenly',
        minWidth: { xs: '', lg: '1200px' },
        flexDirection: { xs: 'column', lg: 'row' }
    }
    return (
        <Box sx={containerStyle}>


            <Grid container spacing={2} sx={firstChildContainer}>
                <Grid item xs={12} md={5} sx={gridContainerStyle}>
                    <PrimaryHeading >Don't just Integrate</PrimaryHeading>
                    <Typography variant='h3' sx={{ color: '#5856ce', fontWeight: 'bold', letterSpacing: '1px' }}>
                        Accelerate your CRM
                    </Typography>
                    <Typography sx={{ fontSize: '18px', }}>
                        Propel your sales team into a state of flow with CRM Accelerations. Switch out boring hours of repetitive work with high-impact activities. Build a repeatable sales process.
                    </Typography>
                    <Box sx={{ width: '100%' }}>
                        <PrimaryButton>Get started</PrimaryButton>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', m: { xs: '50px', md: '' } }}>
                    <Image src='/../public/utils/Group 1006.png' width='500' height='500' />
                </Grid>
            </Grid>



            <Box sx={secondChildContainer}>
                <Box sx={{ minHeight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', pb: '50px', rowGap: '20px' }}>
                    <PrimaryHeading>CRM Acceleration</PrimaryHeading>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'bold', textAlign: { xs: 'center', md: '' } }}>
                        Everything CRM integrations was supposed to be and more.
                    </Typography>
                </Box>
                <Box sx={descriptionCardContainer}>
                    {cardDetails.map((item, index) => <Box sx={{ pt: { xs: '20px', md: '' } }}><DescriptionCard key={index} info={item} /></Box>)}
                </ Box>
            </Box>



            <Box sx={thirdChildContainer}>
                <PrimaryHeading variant={matches ? 'h3' : 'h5'} >
                    What our customers have to say
                </PrimaryHeading>
                <Box sx={{ width: { xs: '400px', sm: '500px', md: '1000px' }, py: { xs: '', md: '' } }}>
                    <Slider ref={setSliderRef} {...sliderSettings} >
                        {ImageCardContent.map(item => <ImageCard key={item.id} item={item} />)}
                    </Slider>

                </Box>
                <ButtonGroup disableElevation variant="contained" sx={{ mt: { xs: '50px' } }}>
                    <Button onClick={sliderRef?.slickPrev}><ArrowBackIcon /></Button>
                    <Button onClick={sliderRef?.slickNext}><ArrowForwardIcon /></Button>
                </ButtonGroup>
            </Box >
        </Box >

    )
}

export default LandingScreen