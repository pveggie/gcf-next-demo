'use client'
import { Box, LinearProgress, Typography } from '@mui/material'

const Loader = () => {
  return (
    <Box
      sx={{
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        textAlign: 'center',
      }}
    >
      <LinearProgress sx={{ marginBottom: 2 }} />
      <Typography variant="p">Loading...</Typography>
    </Box>
  )
}

export default Loader
