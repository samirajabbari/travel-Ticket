const cities = (list = [], province) => {
    const options = list
      .filter((item) => item.provinceId === province)
      .map((item) => {
        return { value: item.id, label: item.name };
      });
    return options;
  };
  
  export default cities;
  