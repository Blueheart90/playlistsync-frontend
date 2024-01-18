import MyInput from '@/components/atoms/myInput'
import MyButton from '@/components/atoms/myButton'
import GoogleButton from '@/components/molecules/googleButton'

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen text-black bg-black sm:py-12 font-dmsans">
      <div className="max-w-sm p-8 bg-white">
        <h1 className="mb-8 text-3xl font-bold leading-snug">Login Form</h1>
        <div>
          <form action="">
            <label htmlFor="email">E-mail</label>
            <MyInput name="email" id="email" />
            <label htmlFor="password">Password</label>
            <MyInput name="password" type="password" id="password" />
            <MyButton>Login</MyButton>
            <GoogleButton />
          </form>
        </div>
      </div>
    </div>
  )
}
