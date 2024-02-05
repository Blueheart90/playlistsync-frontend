'use client'
import MyInput from '@/components/atoms/myInput'
import MyButton from '@/components/atoms/myButton'
import GoogleButton from '@/components/molecules/googleButton'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import FieldCustom from '../../../components/atoms/fieldCustom'
import { LoginSchema } from '@/utils/authFormSchema'

interface Values {
  email: string
  password: string
}
export default function Page() {
  const initialValues: Values = { email: '', password: '' }
  const handleSubmit = async (values: Values) => {
    console.log(values)
  }
  return (
    <div className="max-w-sm p-8 bg-white">
      <h1 className="mb-8 text-3xl font-bold leading-snug">Login Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values: Values) => handleSubmit(values)}
      >
        <Form>
          <FieldCustom
            name="email"
            type="text"
            id="email"
            label="E-mail"
            placeholder="Jane@Doe"
            className="border px-3 py-2 my-2 text-sm w-full text-gray-600"
          />
          <FieldCustom
            name="password"
            type="password"
            id="password"
            label="Contraseña"
            className="border px-3 py-2 my-2 text-sm w-full text-gray-600"
          />
          <MyButton type="submit">Login</MyButton>
          <GoogleButton />
        </Form>
      </Formik>
    </div>
  )
}
