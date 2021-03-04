import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Mobile = () => {
    const [show, setShow] = useState(false)
    const handleShow = (e) => {
        e.preventDefault()
        setShow(!show)
    }
    return (
        <div className="flex flex-col-reverse items-center justify-center bottom-0 mb-6 right-0 mr-6 fixed">
            {show ? (
                <button onClick={handleShow} className="p-4 rounded-full bg-gray-800 shadow-xl border border-gray-500">
                    <MdClose className="text-white text-xl" />
                </button>
            ) : (
                <button onClick={handleShow} className="p-4 rounded-full bg-gray-800 shadow-xl border border-gray-500">
                    <HiOutlineMenuAlt4 className="text-white text-xl" />
                </button>
            )}
            <motion.nav
                className="mb-6 flex flex-col justify-center items-center w-full bg-gray-800 shadow-xl border border-gray-500 p-4 rounded-md max-w-xl"
                animate={{ opacity: show ? 1 : 0, y: show ? 0 : 5 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <div className="mb-4">
                    <img className="object-cover bg-no-repeat bg-center inline-block h-10 w-10 rounded-lg ring-2 ring-pink-500" src="https://bit.ly/2NVl25X" alt="" />
                </div>
                <ul className="flex flex-col justify-center items-center list-none">
                    <li onClick={handleShow} className="cursor-pointer mb-1 mt-1 px-4 py-2 tracking-wider text-white hover:text-gray-700 bg-transparent hover:bg-gray-200 rounded">
                        <Link href="/dashboard" >Links</Link>
                    </li>
                    <li onClick={handleShow} className="cursor-pointer mb-1 mt-1 px-4 py-2 tracking-wider text-white hover:text-gray-700 bg-transparent hover:bg-gray-200 rounded">
                        <Link href="/dashboard">Profile</Link>
                    </li>
                    <li onClick={handleShow} className="cursor-pointer mb-1 mt-1 px-4 py-2 tracking-wider text-white hover:text-gray-700 bg-transparent hover:bg-gray-200 rounded">
                        <Link href="/dashboard">
                            <span className="flex items-center">
                                <span>Site</span>
                                <BsBoxArrowInUpRight className="ml-1" />
                            </span>
                        </Link>
                    </li>
                </ul>
                <div className="mt-4">
                    <button className="px-4 py-2 tracking-wider bg-pink-500 text-white rounded">Logout</button>
                </div>
            </motion.nav>
        </div>
    )
}

export default Mobile
