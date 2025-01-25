import { assets } from "../assets/assets"

const Hero = () => {
  return (
    <div className="container 2xl:px-20 mx-auto mt-10 my-10 ">
        <div className="bg-gradient-to-r from-emerald-400 to-emerald-950 text-white py-16 text-center  mx-2 rounded-xl ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">Over 1,000+ Scholarships to apply</h2>
            <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">Unlock your future with ScholarLink: Discover verified scholarships tailored just for you, all in one secure and easy-to-use platform!</p>
        <div>
                <div>
                    <img src={assets.search} className="h-10"/>
                    <input type="text" placeholder="Search for Scholarships" className="text-black bg-white max-sm:text-xs p-2 rounded outline-none w-full"/>
                </div>
                <div>
                    <img src={assets.location} className="h-10"/>
                    <input type="text" placeholder="Location" className="text-black bg-white max-sm:text-xs p-2 rounded outline-none w-full"/>
                </div>
                <button>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Hero