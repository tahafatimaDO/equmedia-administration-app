import * as yup from 'yup';

export const registerSchema = yup.object({
  email: yup.string()
    .min(8)
    .max(50)
    .email()
    .required(),
  password: yup.string()
    .min(8)
    .max(30)
    .required(),
  passwordConfirm: yup.string()
    .oneOf([yup.ref('password'), null]),
})

export const loginSchema = yup.object({
  email: yup.string()
    .min(8)
    .max(50)
    .email()
    .required(),
  password: yup.string()
    .min(8)
    .max(30)
    .required(),
})