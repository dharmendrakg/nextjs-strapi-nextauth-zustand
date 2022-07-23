import {Box, Typography, Container, Stack, Button} from "@mui/material";
import { useCounterStore } from "../store";

export default function Counter() {
  const {count, increment, decrement} = useCounterStore(state => state);
  return (
    <Container>
      <Typography variant="h4">Counter: {count}</Typography>
      <Stack direction="row" spacing={1}>
        <Button onClick={()=>increment(5)}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </Stack>
    </Container>
  )
}