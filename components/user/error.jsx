import { BiCuboid } from 'react-icons/bi'

const Error = () => {
    return (
        <main className="bg-pink-600 flex flex-col justify-center items-center w-full h-screen">
            <div className="border-2 border-white rounded-xl p-4 shadow-xl">
                <BiCuboid className="text-7xl text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-wide mt-10">An error occurred.</h1>
        </main>
    )
}

export default Error
