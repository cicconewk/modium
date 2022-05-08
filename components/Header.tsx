import React from 'react'
import Link from 'next/link'

import Navbar from './Navbar'
import Banner from './Banner'

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <Navbar />
    </header>
  )
}

export default Header
