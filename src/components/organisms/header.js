'use client'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import Logo from '@/components/molecules/logo'
import SpinnerSvg from '@/components/atoms/spinnerSvg'

export default function Header() {
  const { data: session, status } = useSession()
  return (
    <header className="fixed z-10 w-screen py-2 transition-all duration-500 bg-transparent mix-blend-difference invert ">
      <div className="flex justify-between px-[5%] ">
        <Logo />
        <nav className="items-center justify-center hidden gap-2 md:flex">
          {status === 'loading' ? (
            <SpinnerSvg className="w-6 animate-spin" />
          ) : session?.user ? (
            <button
              className="px-4 py-2 text-base text-black transition-all duration-100 cursor-pointer select-none hover:bg-black font-dmsans hover:text-white"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link
                className="px-4 py-2 text-base text-black transition-all duration-100 cursor-pointer select-none hover:bg-black font-dmsans hover:text-white"
                href="/login"
              >
                Log In
              </Link>
              <Link
                className="px-4 py-2 text-base text-black transition-all duration-100 cursor-pointer select-none hover:bg-black font-dmsans hover:text-white"
                href="/register"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
