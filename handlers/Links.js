import axios from '../utils/axios'

const QueryLinks = async ({ queryKey }) => {
    return await axios.get('/query/links', {
        headers: {
            authorization: `Bearer ${queryKey[1].token}`
        }
    })
}

export default QueryLinks
