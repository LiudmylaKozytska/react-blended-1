import { formatDistanceToNow } from 'date-fns';
import { format } from 'date-fns';

export function formatDateToNow(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatDate(date) {
  return format(new Date(date), 'MM/dd/yyyy, p');
}
