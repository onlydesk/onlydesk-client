import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'

import QueryLinks from '../../handlers/Links'
import { Navbar, Mobile, PageLinks } from '../../components'

export async function getServerSideProps() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery('user', QueryLinks)
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjE1MDIxODAzfQ.G11D94okVCdJf__o2l6Kuiam0i9DAOnN-483TfMSRow'

const Dashboard = () => {
    const {
        data: response,
        isLoading: loading,
        isError: error
    } = useQuery(['links', { token: userToken }], QueryLinks)
    if (loading) return <h1>loading</h1>
    if (error) return <h1>loading</h1>
    return (
        <main className="h-screen">
            <Navbar />
            <Mobile />
            <div className="h-1/4 bg-white flex justify-center items-center">
                <form className="flex flex-wrap justify-center items-center">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600 tracking-wider">name</label>
                        <input type="text" name="name" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                    </div>
                    <div className="ml-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600 tracking-wider">url</label>
                        <input type="url" name="url" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                    </div>
                    <button className="self-end ml-2 p-3 mt-4 bg-pink-600 text-white rounded shadow tracking-wider font-medium">Create</button>
                </form>
            </div>
            <PageLinks data={response.data} />
        </main>
    )
}

export default Dashboard
