import React from 'react'
import { useField, ErrorMessage } from 'formik'

export default function MyInput(props) {
  const [field, meta, helpers] = useField(props)
  return (
    <input
      {...props}
      className="border  px-3 py-2 mt-1 mb-5 text-sm w-full text-gray-600"
    />
  )
}
