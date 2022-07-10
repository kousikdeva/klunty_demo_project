import { Button } from '@mui/material'
import React from 'react'

const PrimaryButton = ({ children }) => {
    return (
        <>
            <Button variant="contained" sx={{ color: '#d3d3f2', bgcolor: '#5856ce', ':hover': { bgcolor: '#5856ce' } }}>
                {children}
            </Button>
        </>
    )
}

export default PrimaryButton