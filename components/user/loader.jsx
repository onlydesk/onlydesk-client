import SyncLoader from 'react-spinners/SyncLoader'

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <SyncLoader color={'#FF0065'} size={20} />
        </div>
    )
}

export default Loader
