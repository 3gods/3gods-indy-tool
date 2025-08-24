import { format, formatDistanceToNow, parseISO } from 'date-fns';

const safeParseISO = (
  iso8601DateString: string | null | undefined,
): Date | string => {
  if (!iso8601DateString) {
    return '';
  }

  const parsed = parseISO(iso8601DateString);

  if (isNaN(parsed.getTime())) {
    return iso8601DateString;
  }

  return parsed;
};

export const renderDate = (
  iso8601DateString: string | null | undefined,
  formatString: string = 'yyyy-MM-dd',
): string => {
  const parsed = safeParseISO(iso8601DateString);

  if (typeof parsed === 'string') {
    return parsed;
  }

  return format(parsed, formatString);
};

export const renderRelativeDate = (
  iso8601DateString: string | null | undefined,
): string => {
  const parsed = safeParseISO(iso8601DateString);

  if (typeof parsed === 'string') {
    return parsed;
  }

  return formatDistanceToNow(parsed, {
    includeSeconds: true,
    addSuffix: true,
  });
};
