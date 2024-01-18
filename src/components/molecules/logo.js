import React from 'react'
import LogoSvg from '@/components/atoms/logoSvg'

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <LogoSvg className="h-10 fill-white" />
      <span className="text-xl font-bold text-black font-dmsans">
        PlaylistSync
      </span>
    </div>
  )
}

export default Logo
