'use client'
import { Box, Container } from '@mui/system'
import Header from '@/components/templates/Header'

export const SiteWrapper = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box
        as="main"
        sx={{
          height: '100%',
          flexGrow: 1,
        }}
      >
        <Container sx={{ height: '100%' }}>{children}</Container>
      </Box>
    </Box>
  )
}
