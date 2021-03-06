import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleShow = (e) => {
        e.preventDefault()
        setShow(!show)
    }
    return (
        <div className="invisible md:visible flex items-center justify-center bottom-0 mb-6 left-0 ml-6 fixed z-50">
            {show ? (
                <motion.button
                    onClick={handleShow}
                    className="p-4 rounded-full bg-gray-800 shadow-xl border border-gray-500"
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <MdClose className="text-white text-xl" />
                </motion.button>
            ) : (
                <motion.button
                    onClick={handleShow}
                    className="p-4 rounded-full bg-gray-800 shadow-xl border border-gray-500"
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <HiOutlineMenuAlt4 className="text-white text-xl" />
                </motion.button>
            )}
            <motion.nav
                className="ml-6 flex justify-center items-center w-full bg-gray-800 shadow-xl border border-gray-500 p-4 rounded-md max-w-xl"
                animate={{ opacity: show ? 1 : 0, x: show ? 0 : -5 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <div className="mr-4">
                    <img className="object-cover bg-no-repeat bg-center inline-block h-10 w-10 rounded-lg ring-2 ring-pink-500" src="https://bit.ly/2NVl25X" alt="" />
                </div>
                <ul className="flex justify-center items-center list-none">
                    <li onClick={handleShow} className="cursor-pointer ml-1 mr-1 px-4 py-2 tracking-wider text-white hover:text-gray-700 bg-transparent hover:bg-gray-200 rounded">
                        <Link href="/dashboard" >Links</Link>
                    </li>
                    <li onClick={handleShow} className="cursor-pointer ml-1 mr-1 px-4 py-2 tracking-wider text-white hover:text-gray-700 bg-transparent hover:bg-gray-200 rounded">
                        <Link href="/dashboard/profile">Profile</Link>
                    </li>
                    <li onClick={handleShow} className="cursor-pointer ml-1 mr-1 px-4 py-2 tracking-wider text-white hover:text-gray-700 bg-transparent hover:bg-gray-200 rounded">
                        <Link href="/dashboard">
                            <span className="flex items-center">
                                <span>Site</span>
                                <BsBoxArrowInUpRight className="ml-1" />
                            </span>
                        </Link>
                    </li>
                </ul>
                <div className="ml-4">
                    <button className="px-4 py-2 tracking-wider bg-pink-500 text-white rounded">Logout</button>
                </div>
            </motion.nav>
        </div>
    )
}

export default Navbar
