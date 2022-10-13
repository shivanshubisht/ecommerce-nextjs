import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <Link href="/cart">
            <a>Cart</a>
        </Link>
    )
}

export default Navbar