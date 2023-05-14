import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navbar = () => {
  return (
    <div className='flex mx-2 pt-[50px]'>
      <div>
        <Link href='/#home'>
                <Image src='/../public/Images/schoollogo.png' alt='school logo' width='75' height='25'/>
            </Link>
      </div>
      <div className='py-4 px-2 cursor-pointer'>
        <h3>DreamLand E.M. High School</h3>
        <span>Ranjha Airport, Banke</span>
      </div>
    </div>
  )
}

export default navbar
