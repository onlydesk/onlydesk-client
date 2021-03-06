import axios from '../utils/axios'

const QueryProfile = async ({ queryKey }) => {
    return await axios.get('/query/profile', {
        headers: {
            authorization: `Bearer ${queryKey[1].token}`
        }
    })
}

export default QueryProfile
