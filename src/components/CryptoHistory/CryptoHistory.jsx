import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import PropTypes from 'prop-types';
import { formatDate } from 'helpers/formatDateToNow';
export const CryptoHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {items.map((item, index) => (
          <Tr key={item.id}>
            <Td>{index + 1}</Td>
            <Td>{item.price}</Td>
            <Td>{item.amount}</Td>
            <Td>{formatDate(item.date)}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};
CryptoHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
