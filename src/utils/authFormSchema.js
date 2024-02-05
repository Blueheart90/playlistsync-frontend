import * as Yup from 'yup'

export const RegisterSchema = Yup.object({
  name: Yup.string().min(5).required('El nombre es requerido'),
  email: Yup.string()
    .email('Debe ser un correo valido')
    .required('El email es requerido'),
  password: Yup.string().min(8).max(32).required('La contraseña es requerida'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('La confirmacion de contraseña es requerida')
})

// export const LoginSchema = Yup.object({
//   email: Yup.string()
//     .email('Debe ser un correo valido')
//     .required('El email es requerido'),
//   password: Yup.string().required('La contraseña es requerida')
// })
export const LoginSchema = RegisterSchema.pick(['email', 'password'])
