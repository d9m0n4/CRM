import moment from 'moment';

export const toYear = (date: string) => {
  return moment(date).format('YYYY');
};
