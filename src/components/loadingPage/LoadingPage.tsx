import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Box sx={{ marginTop: '50px'}}>
      <CircularProgress color='secondary' size={70} />
    </Box>
  );
}
