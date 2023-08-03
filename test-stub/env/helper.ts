const getUserName = () => {
  return `username is ` + process.env.USER_NAME;
  // return `username is ` + (import.meta.env.USER_NAME);
};

export { getUserName };
