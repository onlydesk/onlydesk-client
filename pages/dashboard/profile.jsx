import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'

import QueryProfile from '../../handlers/Profile'
import { Navbar, Mobile } from '../../components'
import ProfileInfo from './profileInfo'

export async function getServerSideProps() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery('profile', QueryProfile)
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjE1MDIxODAzfQ.G11D94okVCdJf__o2l6Kuiam0i9DAOnN-483TfMSRow'

const Profile = () => {
    const {
        data: response,
        isLoading: loading,
        isError: error
    } = useQuery(['profile', { token: userToken }], QueryProfile)
    if (loading) return <h1>loading</h1>
    if (error) return <h1>loading</h1>
    return (
        <main className="h-screen flex flex-wrap">
            <Navbar />
            <Mobile />
            <div className="w-screen md:w-2/4 bg-gray-50 flex flex-col justify-center items-center">
                <form className="flex flex-col justify-center items-center">
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 tracking-wider">occupation</label>
                        <input type="text" name="occupation" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 tracking-wider">bio</label>
                        <input type="text" name="bio" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                    </div>
                    <div className="mt-4">
                        <input type="file" name="picture" className="block w-full p-3 border border-transparent focus:outline-none" />
                    </div>
                    <button className="mt-8 p-3 bg-pink-600 text-white rounded shadow tracking-wider font-medium">Create</button>
                </form>
            </div>
            <div className="w-screen md:w-2/4 flex justify-center items-center">
                <ProfileInfo data={response.data} />
            </div>
        </main>
    )
}

export default Profile
