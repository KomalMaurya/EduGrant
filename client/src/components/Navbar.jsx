/* eslint-disable no-unused-vars */
import { assets } from "../assets/assets"
import {useClerk, UserButton, useUser} from "@clerk/clerk-react"
import { Link } from "react-router-dom"

const Navbar = () => {

  const {openSignIn}=useClerk()
  const {user}=useUser()

  return (
    <div className='shadow py-2'>
        <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
            <img src={assets.logo} alt="EduGrant Logo"/>
            {
              user
              ?<div className="flex items-center gap-3">
                <Link to={'/scholarship'}>Applied Scholarships</Link>
                <p> | </p>
                <p className="max-sm:hidden">Hi, {user.firstName+" "+user.lastName}</p>
                <UserButton/>
              </div>
              : 
              <div className="flex gap-4 max-sm:text-xs ">
                <button className='text-gray-600 cursor-pointer'> Login</button>
                <button onClick={ e =>openSignIn()} className='bg-emerald-400 text-white px-6 sm:px-9 py-2 cursor-pointer rounded-full'>Login</button>
            </div>
            }
        </div>
    </div>
  )
}

export default Navbar