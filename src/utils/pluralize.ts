export const pluralizeString = (str: string, count: number) => {
  if (count === 1) {
    return str;
  }

  return `${str}s`;
};
