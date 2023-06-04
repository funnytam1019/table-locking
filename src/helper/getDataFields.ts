export const getDataFields = (data: object[]) => {
  if (data.length === 0) {
    return [];
  }
  return Object.keys(data[0]);
};
