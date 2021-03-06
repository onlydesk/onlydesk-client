import axios from '../utils/axios'

const Query = async ({ queryKey }) => {
    return await axios.get(`/query/user-data/${queryKey[1].username}`)
}

export default Query
