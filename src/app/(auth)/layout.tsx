import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen text-black bg-black sm:py-12 font-dmsans">
      {children}
    </div>
  )
}
