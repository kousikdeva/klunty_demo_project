import { Typography } from '@mui/material'
import React from 'react'

const PrimaryHeading = ({ variant = 'h3', children }) => {
    return (
        <>
            <Typography variant={variant} sx={{ color: '#120155', fontWeight: 'bold', letterSpacing: '1px' }}>{children}</Typography>
        </>
    )
}

export default PrimaryHeading