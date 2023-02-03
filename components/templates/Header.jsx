import { AppBar, Box, Button, Link, Typography, Toolbar } from '@mui/material'
import NextLink from 'next/link'

const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Test Next App
          </Typography>
          <Button className="" color="inherit" component={NextLink} href="/">
            Projects
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
