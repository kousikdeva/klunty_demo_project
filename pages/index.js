import Navbar from '../components/Navbar'
import LandingScreen from '../components/LandingScreen'
import { Box } from '@mui/material'


export default function Home() {
  return (
    <Box sx={{ width: '100vw' }}>
      <Navbar />
      <LandingScreen />
    </Box>
  )
}