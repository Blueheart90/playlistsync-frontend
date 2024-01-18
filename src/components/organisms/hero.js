import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className=" flex flex-col justify-center pb-32  w-[90%] mx-auto bg-white pt-40 gap-8 relative  ">
      <p className="max-w-3xl mx-auto text-2xl leading-relaxed text-center bg-transparent font-dmsans mix-blend-difference">
        Descubre la manera más sencilla de unir tus mundos musicales favoritos.
      </p>
      <h1 className="mx-auto font-bold tracking-tighter text-center text-black text-8xl font-dmsans max-w-7xl">
        PlaylistSync: Tu Pasaje Directo entre YouTube y Spotify.
      </h1>
      <p className="max-w-3xl mx-auto text-2xl leading-relaxed text-center bg-transparent font-dmsans mix-blend-difference">
        Descubre la manera más sencilla de unir tus mundos musicales favoritos.
      </p>
      <p className="max-w-3xl mx-auto text-2xl leading-relaxed text-center bg-transparent font-dmsans mix-blend-difference">
        Descubre la manera más sencilla de unir tus mundos musicales favoritos.
      </p>
      <div className="absolute bottom-0 left-0">
        <Image
          src="/images/plsheroL.png"
          alt="Hero Image"
          width={500}
          height={500}
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src="/images/plsheroR.png"
          alt="Hero Image"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
