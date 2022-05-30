import {BellIcon, SearchIcon} from "@heroicons/react/solid"
import Link from "next/link"
import { useEffect, useState } from "react"

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

  return (
  <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img src="https://fontmeme.com/permalink/220530/a9169591ce47adeee8be98cce6deda4d.png"
        width={75}
        height={75}
        className="cursor-pointer object-contain" />

        <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">Tv Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
          <SearchIcon className="hidden h-6 w-6 sm:inline "/>
          <p className="hidden lg:inline">Kids</p>
          <BellIcon className="h-6 w-6"/>
          <Link href="/account">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt=""
                className="cursor-pointer rounded" 
                width={30} />
          </Link>
      </div>
  </header>
  )
}

export default Header