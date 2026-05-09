'use client'

import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"
import { Button } from "../ui/button"
import { IoIosMenu } from "react-icons/io"
import { usePathname } from "next/navigation"
import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeProvider"
import sun from "../../assets/sun.png"
import moon from "../../assets/moon.png"
import Image from "next/image"


const Navbar = () => {
    const { isDarkMode, toggleTheme }: any = useContext(ThemeContext)
    const pathname = usePathname()
    return (
        <header className={`py-4 shadow-md ${isDarkMode && 'dark'}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* logo */}
                <div className="text-2xl font-bold">
                    <Link href='/'>Daily News</Link>
                </div>
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`${pathname === '/news' && 'text-red-500 font-semibold'}`} href="/news">News</NavigationMenuLink>

                            <NavigationMenuLink href="/services">
                                <NavigationMenuTrigger> Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul>
                                        <li><NavigationMenuLink href="/services/web">Web developmen</NavigationMenuLink></li>
                                        <li><NavigationMenuLink href="/services/apps">Mobile apps</NavigationMenuLink></li>
                                        <li><NavigationMenuLink href="/services/seo">Apps seo</NavigationMenuLink></li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuLink>

                            <NavigationMenuLink className={`${pathname === '/about' && 'text-red-500 font-semibold'}`} href="/about">About</NavigationMenuLink>

                            <NavigationMenuLink className={`${pathname === '/contact' && 'text-red-500 font-semibold'}`} href="/contact">Contact</NavigationMenuLink>

                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="hidden lg:flex items-center">
                    <div className="flex items-center">
                        <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                        <Button
                        onClick={toggleTheme}
                        variant="ghost"
                        >
                            <Image
                                src={isDarkMode ? sun : moon}
                                alt="themeicon" />
                        </Button>
                        <Button variant='default'>Login</Button>
                    </div>
                </div>
                <div className="lg:hidden">
                    <IoIosMenu size={35}></IoIosMenu>
                </div>
            </nav>
        </header>
    )
}

export default Navbar