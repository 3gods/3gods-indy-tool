import { format, parseISO } from 'date-fns';

export const renderDate = (
  iso8601DateString: string | null | undefined,
  formatString: string = 'yyyy-MM-dd',
): string => {
  if (!iso8601DateString) {
    return '';
  }

  const parsed = parseISO(iso8601DateString);

  if (isNaN(parsed.getTime())) {
    return iso8601DateString;
  }

  return format(parsed, formatString);
};
