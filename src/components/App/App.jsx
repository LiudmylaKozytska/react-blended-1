// import { useState, useEffect } from 'react';

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
import { useSelector } from 'react-redux';

export const App = () => {
  const todos = useSelector(state => state.todos);

  // const [todos, setTodos] = useState(
  //   JSON.parse(localStorage.getItem('todos')) || []
  // );

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  // const addTodo = text => {
  //   const todo = {
  //     id: nanoid(),
  //     text,
  //   };

  //   setTodos(prevTodos => [...prevTodos, todo]);
  // };

  // const handleSubmit = data => {
  //   addTodo(data);
  // };

  // const deleteTodo = id => {
  //   // setTodos(prevTodos => {
  //   //   return prevTodos.filter(todo => todo.id !== id);
  //   // });
  // };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo id={todo.id} text={todo.text} counter={index + 1} />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
