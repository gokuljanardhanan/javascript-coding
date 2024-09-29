const sum = (a) => {
  return (b) => {
    return b ? sum(a + b) : a;
  };
};

//sum(1)(2)()
