import PageLinks from './pageLinks'
import PageProfile from './pageProfile'

const UserPage = ({ data }) => {
    return (
        <>
            <PageProfile data={data} />
            <PageLinks data={data} />
        </>
    )
}

export default UserPage
