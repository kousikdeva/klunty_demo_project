import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

const DescriptionCard = ({ info }) => {
    return (
        <Paper elevation={2} sx={{
            width: '350px',
            minHeight: '250px',
            borderRadius: '20px',
            p: '25px',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '20px'
        }}>
            <Box sx={{}}>
                <Image src={info.logo} width='60' height='60' />
            </Box>
            <Box>
                <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#120155' }}>{info.heading}</Typography>
            </Box>
            <Box>
                <Typography sx={{}}>{info.description}</Typography>
            </Box>
        </Paper>
    )
}


export default DescriptionCard