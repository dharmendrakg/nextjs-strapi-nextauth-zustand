import create from 'zustand';
import {devtools} from 'zustand/middleware';

type CounterState = {
  count: number;
  increment: (by: number) => void;
  decrement: () => void;
}

const useCounterStore = create<CounterState>()(
  devtools(
    (set) => ({
      count: 0,
      increment: (by)=>set((state) => ({
        count: state.count + by
      })),
      decrement: ()=>set((state) => ({
        count: state.count -1
      }))
    })
  )
)

export {useCounterStore}