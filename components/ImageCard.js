import { Box, Paper, Grid, Typography, Divider } from '@mui/material'
import React from 'react'
import Image from 'next/image'


const containerStyle = {
    minHeight: '400px',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: 'none'
}

const imageContainer = {
    display: 'flex',
    justifyContent: 'center',
    minWidth: '340px'
}
const ImageCard = ({ item }) => {


    return (
        <Paper key={item.id} sx={containerStyle} >
            <Box sx={{ display: 'flex', py: '20px', flexDirection: { xs: 'column-reverse', md: 'row' } }}>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{}}>
                        <Image src='/../public/utils/Vector.png' width='105px' height='100px' />
                    </Box>
                    <Box >
                        <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#120155' }}>{item.description}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', columnGap: '20px', mt: '50px' }}>
                        <Image src={item.logo} width='100px' height='50px' />
                        <Divider orientation="vertical" flexItem />
                        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                            <Typography sx={{ fontWeight: 'Bold' }}>{item.name}</Typography>
                            <Typography>{item.work}</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={imageContainer}><Image src={item.picture} width='289px' height='351px' /></Box>
            </Box>
        </Paper>
    )
}

export default ImageCard