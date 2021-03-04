import { useRouter } from 'next/router'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { BiCuboid } from 'react-icons/bi'
import { motion } from 'framer-motion'

import Query from '../handlers/Query'

export async function getServerSideProps() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery('user', Query)
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

const Site = () => {
    const router = useRouter()
    const { username } = router.query
    const {
        data: response,
        isLoading: loading,
        isError: error
    } = useQuery(['user', { username: username }], Query)
    if (loading) return <h1>Loading....</h1>
    if (error) return <h1>Error</h1>
    return (
        <main className="h-screen">
            <section className="h-1/4 bg-white flex flex-col justify-center items-center">
                <img className="h-16 w-16 rounded-2xl ring-2 ring-pink-500 object-cover bg-no-repeat bg-center shadow-lg" src="https://bit.ly/2NVl25X" alt="" />
                {/* <img className="h-16 w-16 rounded-2xl ring-2 ring-pink-500 object-cover bg-no-repeat bg-center" src={response.data.profile.picture} alt="" /> */}
                <h1 className="text-center mt-2 text-lg font-semibold text-gray-800 tracking-wider">@{response.data.user}</h1>
                <p className="text-sm text-gray-400 tracking-widest">{response.data.profile.occupation}</p>
                <p className="mt-3 text-md text-gray-500 tracking-wider">{response.data.profile.bio}</p>
            </section>
            <section className="h-3/4 bg-gray-100 flex flex-col justify-start items-center py-8">
                <div className="px-6 max-w-xl w-full overflow-y-scroll overflow-x-hidden py-2">
                    {response.data.links.map(link => {
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
        </main>
    )
}

export default Site
