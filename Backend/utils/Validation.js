const Joi = require("joi");

// ********************************    Register Validation   ******************
const RegisterValidation = (data) => {
  const ValidationSchema = Joi.object({
    firstName: Joi.string().required().messages({
      "string.empty": "first name cannot be an empty field",
      "string.required": "first name is a required field",
    }),
    lastName: Joi.string().required().messages({
      "string.empty": "last name cannot be an empty field",
      "string.required": "last name is a required field",
    }),

    email: Joi.string()
      .required()
      .email({
        minDomainSegments: 2,
      })
      .messages({
        "string.empty": "email cannot be an empty field",
        "string.email": "email must be a valid email",
        "string.required": "email is a required field",
      }),

    password: Joi.string()
      .required()
      .min(8)
      .pattern(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.])(?=.{8,})"
        )
      )
      .messages({
        "string.min": "Password length must be at least 8 characters",
        "string.pattern.base":
          "The password must contain at least 1 lowercase, 1 uppercase, 1 numeric character, one special character",
        "string.required": "email is a required field",
      }),
  });

  return ValidationSchema.validate(data);
};

module.exports.RegisterValidation = RegisterValidation;

// ********************************    Login Validation   ******************
// const LoginValidation = (data) => {
//   const ValidationSchema = Joi.object({
//     email: Joi.string()
//       .required()
//       .email({
//         minDomainSegments: 2,
//       })
//       .messages({
//         "string.empty": "email cannot be an empty field",
//         "string.email": "email must be a valid email",
//         "string.required": "email is a required field",
//       }),

//     password: Joi.string()
//       .required()
//       .min(8)
//       .pattern(
//         new RegExp(
//           "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.])(?=.{8,})"
//         )
//       )
//       .messages({
//         "string.min": "Password length must be at least 8 characters",
//         "string.pattern.base":
//           "The password must contain at least 1 lowercase, 1 uppercase, 1 numeric character, one special character",
//         "string.required": "email is a required field",
//       }),
//   });
// };

// module.exports.LoginValidation = LoginValidation;
