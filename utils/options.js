const optionsList = (List) => {
  const options = List?.map((item) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
  return options;
};
export default optionsList;
