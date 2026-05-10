import Link from "next/link"
import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="mt-36">
      <footer className="bg-[#F1F5F9] lg:pt-20 md:pt-14 pt-10 pb-10 px-6 dark:text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full flex flex-col lg:flex-row justify-between xl:gap-28 lg:gap-20 gap-14 items-start">
                    
                    <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
                        <div className="font-inter">
                            <h3 className="text-2xl  font-semibold">Features</h3>
                            <ul className="text-black pt-1">
                                <li className="text-sm pt-2"><Link href='/news'>News</Link></li>
                                <li className="text-sm pt-2"><Link href='/about'>About</Link></li>
                                <li className="text-sm pt-2"><Link href='/contact'>Contack</Link></li>
                            </ul>
                        </div>
                        <div className="font-inter">
                            <h3 className="text-2xl font-semibold">Contatcs</h3>
                            <ul className="text-black pt-1">
                                <li className="text-sm pt-2"><span className="text-[16px] font-semibold">Phone</span>: <a href="tel:0123654789">0123654789</a></li>
                                <li className="text-sm pt-2"><span className="text-[16px] font-semibold">Email</span>: <a href="mailto:info@elitearena.com">info@dailynews.com</a></li>
                                <li className="text-sm pt-2"><span className="text-[16px] font-semibold">Address</span>: Dhaka, Bangladesh</li>
                            </ul>
                        </div>
                        <div className="font-inter">
                            <h3 className="text-2xl  font-semibold">Social</h3>
                            <div className="pt-4 flex items-center gap-4">
                                <FaFacebook size={34} color="black"></FaFacebook>
                                <FaXTwitter size={34} color="black"></FaXTwitter>
                                <FaLinkedin size={34} color="black"></FaLinkedin>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="w-full h-px bg-black my-8"></div>
                <p className="text-center text-black font-inter">© Copyright 2022 <span className="text-lg f font-marker bg-linear-to-b from-black to-[#FF02CB] bg-clip-text text-transparent">Daily News</span> All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer