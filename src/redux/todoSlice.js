import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodo: {
      reducer(state, { payload }) {
        state.todos.push(payload);
      },
    },

    deleteTodo(state, { payload }) {
      state.todos = state.todos.filter(({ id }) => {
        return id !== payload;
      });
    },

    editTodo(state, { payload }) {
      state.todos = state.todos.map(({ id, text }) =>
        id === payload.id ? { id, text: payload.text } : { id, text }
      );
    },
  },
});

export const todoReducer = todosSlice.reducer;

export const { addTodo, deleteTodo, editTodo } = todosSlice.actions;
