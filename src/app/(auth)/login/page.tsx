'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
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
  const [errors, setErrors] = useState<string[]>([])
  const initialValues: Values = { email: '', password: '' }
  const router = useRouter()
  const handleSubmit = async (values: Values) => {
    const { email, password } = values

    console.log(values)
    const responseNextAuth = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    console.log(responseNextAuth)
    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(','))
      return
    }
    router.push('/dashboard')
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
          {errors.length > 0 && (
            <div className="alert alert-danger mt-2">
              <ul className="mb-0">
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          <MyButton type="submit">Login</MyButton>
          <GoogleButton />
        </Form>
      </Formik>
    </div>
  )
}
