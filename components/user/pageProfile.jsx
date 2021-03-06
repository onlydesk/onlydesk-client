const PageProfile = ({ data }) => {
    return (
        <section className="h-1/4 bg-white flex flex-col justify-center items-center">
            <img className="h-16 w-16 rounded-2xl ring-2 ring-pink-500 object-cover bg-no-repeat bg-center shadow-lg" src="https://bit.ly/2NVl25X" alt="" />
            {/* <img className="h-16 w-16 rounded-2xl ring-2 ring-pink-500 object-cover bg-no-repeat bg-center" src={data.profile.picture} alt="" /> */}
            <h1 className="text-center mt-2 text-lg font-semibold text-gray-800 tracking-wider">@{data.user}</h1>
            <p className="text-sm text-gray-400 tracking-widest">{data.profile.occupation}</p>
            <p className="mt-3 text-md text-gray-500 tracking-wider">{data.profile.bio}</p>
        </section>
    )
}

export default PageProfile
