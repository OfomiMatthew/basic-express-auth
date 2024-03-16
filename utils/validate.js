const validName = (name) => {
  const nameRegex = new RegExp(/[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/);
  return nameRegex.test(name)
};

const validEmail = (email) => {

  const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,"gm")
  return emailRegex.test(email)
};

const validPassword = (password) => {
  const passRegex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
  return passRegex.test(password)
};

module.exports = {
  validName,
  validPassword,
  validEmail,
};
