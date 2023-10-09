import React from 'react'

const Navbar = () => {
  return (
    <div className='h-14 bg-red-200 flex justify-between     items-center'>

      <img src="https://e7.pngegg.com/pngimages/195/996/png-clipart-shopping-cart-computer-icons-online-shopping-symbol-shopping-logo-design-supermarket-bag-thumbnail.png" className='w-10 ml-4 rounded-xl'/>

      <ul className='flex gap-6 m-4'>
        <li>Home</li>   
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
