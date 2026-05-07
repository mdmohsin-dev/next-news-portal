import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"
import { Switch } from "../ui/switch"
import { Button } from "../ui/button"
import { IoIosMenu } from "react-icons/io"

const Navbar = () => {
    return (
        <header className="py-4 shadow-md">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* logo */}
                <div className="text-2xl font-bold">
                    <Link href='/'>Daily News</Link>
                </div>
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/news">News</NavigationMenuLink>

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

                            <NavigationMenuLink href="/news">About</NavigationMenuLink>

                            <NavigationMenuLink href="/news">Contact</NavigationMenuLink>

                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="hidden lg:flex items-center">
                    <div className="flex items-center gap-2">
                        <span>Dark Mode</span>
                        <Switch />
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