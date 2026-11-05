import { differenceInCalendarDays, isValid, startOfDay } from 'date-fns';

export const countNights = (from?: Date, to?: Date, now = new Date()): number => {
  if (!from || !to || !isValid(from) || !isValid(to)) return 0;
  if (startOfDay(from) < startOfDay(now)) return 0;
  return Math.max(0, differenceInCalendarDays(to, from));
};
