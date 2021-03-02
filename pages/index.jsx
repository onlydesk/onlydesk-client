import Head from 'next/head'
import Link from 'next/link'
import { BiCuboid } from 'react-icons/bi'

const Home = () => {
  return (
    <div>
      <Head>
        <title>OnlyDesk | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-gray-50 font-sans text-gray-700 h-screen flex justify-center items-center">
          <div className="container mx-auto p-8 flex">
            <div className="max-w-md w-full mx-auto">
              <div className="flex justify-center items-center mb-8">
                <BiCuboid className="text-7xl" />
              </div>
              <div className="bg-white rounded-md overflow-hidden shadow-lg">
                <div className="p-8">
                  <form>
                    <div className="mb-5">
                      <label className="block mb-2 text-sm font-medium text-gray-600 tracking-wider">Username</label>
                      <input type="text" name="username" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                    </div>
                    <div className="mb-5">
                      <label className="block mb-2 text-sm font-medium text-gray-600 tracking-wider">Email</label>
                      <input type="text" name="email" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                    </div>
                    <div className="mb-5">
                      <label className="block mb-2 text-sm font-medium text-gray-600 tracking-wider">Password</label>
                      <input type="text" name="password" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                    </div>
                    <button className="w-full p-3 mt-4 bg-pink-600 text-white rounded shadow tracking-wider font-medium">Sign up</button>
                  </form>
                </div>
                <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                  <Link href="/signin" className="font-medium tracking-wider">Already have an account?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
