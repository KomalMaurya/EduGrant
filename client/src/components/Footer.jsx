import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20">
        <img width={160} src={assets.logo}/>
        <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">Copyright @EduGrant | All rights reserved.</p>
        <div className="flex gap-2.5 items-center">
            <img  src={assets.instagram} alt="" className="h-12"/>
            <img src={assets.twitter} alt="" className="h-12"/>
            <img src={assets.linkedin} alt="" className="h-8"/>
        </div>
    </div>
  )
}

export default Footer