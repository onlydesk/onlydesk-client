const ProfileInfo = ({ data }) => {
    return (
        <section className=" bg-white border-2 border-gray-100 rounded-xl shadow-xl p-8 flex flex-col justify-center items-center max-w-lg">
            <img className="h-20 w-20 rounded-2xl ring-2 ring-pink-500 object-cover bg-no-repeat bg-center shadow-lg" src="https://bit.ly/2NVl25X" alt="" />
            {/* <img className="h-20 w-20 rounded-2xl ring-2 ring-pink-500 object-cover bg-no-repeat bg-center" src={data.profile.picture} alt="" /> */}
            <h1 className="text-center mt-4 text-xl font-semibold text-gray-800 tracking-wider">@{data.user}</h1>
            <p className="mt-2 text-md text-gray-400 tracking-widest">{data.profile.occupation}</p>
            <p className="mt-6 text-lg text-gray-500 tracking-wider">{data.profile.bio}</p>
        </section>
    )
}

export default ProfileInfo
