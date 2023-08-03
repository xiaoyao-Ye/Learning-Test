// window.user = {name: "test"};
// window.innerHeight = 900;

// import { innerHeightFn } from "./window";

const getGlobalUser = () => {
  return "username is " + user.name;
};

const doubleHeight = () => {
  return innerHeight * 2;
};

// 间接层的处理技巧
// const doubleHeight = () => {
//   return innerHeightFn() * 2;
// };

export { getGlobalUser, doubleHeight };
