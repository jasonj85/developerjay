const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Email
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is not valid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "'email' field is required";
  }
  // Password
  if (Validator.isEmpty(data.password)) {
    errors.password = "'password' field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};