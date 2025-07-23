// src/types/counter.ts
export interface CounterState {
    value: number;
    increment: () => void;
    decrement: () => void;
    incrementByAmount: (amount: number) => void;
    reset: () => void;
  }