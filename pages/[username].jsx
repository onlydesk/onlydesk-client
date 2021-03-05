import { useRouter } from 'next/router'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'

import Query from '../handlers/Query'
import { Loader, Page, Error } from '../components'

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
    if (error) return <Error />
    return (
        <main className="h-screen">
            {loading ? <Loader /> : <Page data={response.data} />}
        </main>
    )
}

export default Site
