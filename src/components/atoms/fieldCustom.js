import { useField, ErrorMessage } from 'formik'

function FieldCustom({ label, ...props }) {
  const [field, meta, helpers] = useField(props)
  // console.log(props.type);
  // console.log(field);
  return (
    <>
      <label htmlFor={field.name}>{label}</label>
      {props.type === 'textarea' ? (
        <textarea {...field} {...props} rows="6"></textarea>
      ) : (
        <input {...field} {...props} />
      )}

      {meta.touched && meta.error ? (
        <div className="   ">
          <span className=" text-red-500 text-sm">{meta.error}</span>
        </div>
      ) : null}
    </>
  )
}

export default FieldCustom
