import { AppBar, Toolbar, Box, Button } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { appBarItems } from '../public/content'
import PrimaryButton from './PrimaryButton'

const linkStyle = {
    color: '#120155',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px'
}
const Navbar = () => {
    return (

        <AppBar position="static" color='transparent' sx={{ boxShadow: 'none' }}>
            <Toolbar sx={{ height: '120px', width: '100%' }}>
                <Box sx={{ display: 'flex', columnGap: '40px', flexGrow: 1, alignItems: 'center' }}>
                    <Image src='/../public/utils/BigLogo.png' width='129px' height='60px' />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, columnGap: '25px', alignItems: 'flex-end' }}>
                        {appBarItems.map((list, index) => <span key={index} style={linkStyle}>{list.name}</span>)}
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', columnGap: '15px', alignItems: 'center' }}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, columnGap: '15px', alignItems: 'center' }}>
                        <span style={{ ...linkStyle, fontSize: '18px', }}>Log in</span>
                        <Button variant="text" sx={{ color: '#5856ce', border: '1px solid #5856ce' }} >Schedule Demo</Button>
                    </Box>
                    <PrimaryButton>Try For Free</PrimaryButton>
                </Box>

            </Toolbar>
        </AppBar>

    )
}

export default Navbar