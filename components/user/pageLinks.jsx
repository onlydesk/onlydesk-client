import { BiCuboid } from 'react-icons/bi'
import { motion } from 'framer-motion'

const PageLinks = ({ data }) => {
    return (
        <section className="h-3/4 bg-gray-100 flex flex-col justify-start items-center py-8">
            <div className="px-6 max-w-xl w-full overflow-y-scroll overflow-x-hidden py-2">
                {data.links.map(link => {
                    return (
                        <a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                        >
                            <motion.div
                                className="relative cursor-pointer mb-4 ring-1 ring-gray-200 py-4 px-6 flex justify-center items-center bg-white rounded-lg shadow-md"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            >
                                <span className="top-o left-0 ml-3 absolute bg-pink-600 rounded-lg p-2 z-10">
                                    <BiCuboid className="text-2xl text-white" />
                                </span>
                                <span className="text-xl tracking-wider">{link.name}</span>
                            </motion.div>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}

export default PageLinks
