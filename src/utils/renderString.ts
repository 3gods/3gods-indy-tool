import { format, formatDistanceToNow, parseISO } from 'date-fns';

const NUMBER_FORMATTERS = {
  percent: new Intl.NumberFormat(['en'], {
    style: 'percent',
  }),
};

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

export const renderPercent = (ratio: number) => {
  if (ratio < 0 || ratio > 1) {
    return '??';
  }

  return NUMBER_FORMATTERS.percent.format(ratio);
};

export const renderNameInitials = (name: string): string => {
  if (name.includes(' ')) {
    return name
      .split(' ')
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toLocaleUpperCase();
  }

  const firstLetter = name[0];
  const nextLetter = name
    .slice(1)
    .split('')
    .find((c) => /[A-Z]/.test(c));
  return [firstLetter, nextLetter].join('').toLocaleUpperCase();
};
