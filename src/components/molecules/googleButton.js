import React from 'react'
import GoogleIcon from '../atoms/googleIcon'

export default function GoogleButton() {
  return (
    <>
      <hr className="h-px my-8 bg-gray-200 border-t-0 opacity-100 " />
      <div className="flex flex-col items-center justify-center gap-4 ">
        <span className="text-sm">Or try</span>
        <a
          href="/"
          className="flex px-4 py-2 text-lg font-bold transition duration-200 ease-in-out transform border border-gray-200 group w-fit hover:bg-blue-400 hover:text-white "
        >
          <GoogleIcon className="w-6 h-6 mr-2 transition duration-200 ease-in-out fill-kiwi group-hover:fill-white " />
          Google
        </a>
      </div>
    </>
  )
}
