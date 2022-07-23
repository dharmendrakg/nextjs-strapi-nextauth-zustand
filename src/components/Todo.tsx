import {
  Box,
  Typography,
  Container,
  Stack,
  Button,
  TextField,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTodo } from "../store";

type Inputs = {
  todo: string;
};

export default function Todo() {
  const { todo, addTodo, removeTodo } = useTodo((state) => state);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({todo}) => {
    console.log(todo);
    addTodo(todo);
  }
  return (
    <Container>
      <Typography variant="h4">Todos:</Typography>
      <Stack direction="row" spacing={1}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField label="Todo" defaultValue="" {...register("todo")} />
          <Button
            variant="contained"
            type="submit"
          >
            Add
          </Button>
        </form>
      </Stack>
      <Stack direction="row" spacing={1}>
        {todo.map((todo) => (
          <Box key={todo.id}>
            <Typography variant="h6">{todo.text}</Typography>
            <Button
              onClick={() => removeTodo(todo.id)}
              variant="contained"
              color="secondary"
            >
              Remove
            </Button>
          </Box>
        ))}
      </Stack>
      <Stack direction="row" spacing={1}>
        <Button
          onClick={() => addTodo("New Todo")}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </Stack>
    </Container>
  );
}
