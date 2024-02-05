'use client'
import MyInput from '@/components/atoms/myInput'
import MyButton from '@/components/atoms/myButton'
import GoogleButton from '@/components/molecules/googleButton'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import FieldCustom from '../../../components/atoms/fieldCustom'
import { RegisterSchema } from '@/utils/authFormSchema'

interface Values {
  name: string
  email: string
  password: string
  confirmPassword: string
}
export default function Page() {
  const initialValues: Values = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const handleSubmit = async (values: Values) => {
    console.log(values)
  }
  return (
    <div className="max-w-sm p-8 bg-white">
      <h1 className="mb-8 text-3xl font-bold leading-snug">Register Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={(values: Values) => handleSubmit(values)}
      >
        <Form>
          <FieldCustom
            name="name"
            type="text"
            id="name"
            label="Name"
            placeholder="Jane Doe"
            className="border px-3 py-2 my-2 text-sm w-full text-gray-600"
          />
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
            label="Password"
            className="border px-3 py-2 my-2 text-sm w-full text-gray-600"
          />
          <FieldCustom
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            label="Password Confirm"
            className="border px-3 py-2 my-2 text-sm w-full text-gray-600"
          />
          <MyButton type="submit">Register</MyButton>
          <GoogleButton />
        </Form>
      </Formik>
    </div>
  )
}
