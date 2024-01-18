import React from 'react'
import Link from 'next/link'
import Logo from '@/components/molecules/logo'

export default function Header() {
  return (
    <header className="fixed z-10 w-screen py-2 transition-all duration-500 bg-transparent mix-blend-difference invert ">
      <div className="flex justify-between px-[5%] ">
        <Logo />
        <nav className="items-center justify-center hidden gap-2 md:flex">
          <Link
            className="px-4 py-2 text-base text-black transition-all duration-100 cursor-pointer select-none hover:bg-black font-dmsans hover:text-white"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="px-4 py-2 text-base text-black transition-all duration-100 cursor-pointer select-none hover:bg-black font-dmsans hover:text-white"
            href="/dashboard"
          >
            Signin
          </Link>
        </nav>
      </div>
    </header>
  )
}
