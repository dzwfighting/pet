import users from "../fake-data/users";

export const checkExitByEmail = (email) => {
  let find = users.filter((user) => user.email === email);
  console.log(find.length);
  if (find.length == 0) {
    return false;
  } else {
    return true;
  }
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePassword = (password) => {
  return password.length >= 4 ? true : false;
};
