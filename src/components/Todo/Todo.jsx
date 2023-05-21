import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper, EditButton } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from 'redux/todoSlice';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    console.log('fghj')
    const newText = prompt('Input new text, please');
    dispatch(editTodo({ id, text: newText }));
  };
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <EditButton type="button" onClick={handleEdit}>
          Edit
        </EditButton>
        <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
