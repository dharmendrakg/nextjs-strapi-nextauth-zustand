import create from 'zustand';
import {devtools} from 'zustand/middleware';

type TodoState = {
  todo: {
    id: number;
    text: string;
  }[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}

const useTodo = create<TodoState>()(
  devtools(
    (set) => ({
      todo: [],
      addTodo: (text: string) => set((state) => ({todo: [...state.todo, {id: state.todo.length, text}]})),
      removeTodo: (id: number) => set((state) => ({todo: state.todo.filter((todo) => todo.id !== id)})),
    })
  )
)

export {useTodo}