import {Box, Typography, Button} from '@mui/material';
import { useBearStore } from '../store';

export default function BearCounter() {
  const {bears, increasePopulation} = useBearStore(state => state);
  return (
    <Box>
      <Typography variant="h4">Bear Counter {bears}</Typography>
      <Button onClick={increasePopulation}>Increase Population</Button>
    </Box>
  );
}