import { Navbar, Mobile, PageLinks } from '../../components'

const res = { "user": "ines98", "profile": { "id": 2, "picture": "/Users/franciscomendes/Desktop/GIT/onlydesk/onlydesk-api/uploads/4f7074fd4e552a396e32672184cd3a54-drew-hays-agGIKYs4mYs-unsplash.jpg", "occupation": "Interior Designer", "bio": "Learning new things 🍀" }, "links": [{ "id": 2, "name": "Pinterest", "url": "https://www.pinterest.com" }, { "id": 21, "name": "Tumblr", "url": "https://www.tumblr.com" }, { "id": 22, "name": "Xing", "url": "https://www.xing.com" }, { "id": 23, "name": "LinkedIn", "url": "https://www.linkedin.com" }, { "id": 24, "name": "Instagram", "url": "https://www.instagram.com" }, { "id": 25, "name": "Unsplash", "url": "https://www.unsplash.com" }, { "id": 26, "name": "Youtube", "url": "https://www.youtube.com" }] }

const Dashboard = () => {
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
            <PageLinks data={res} />
        </main>
    )
}

export default Dashboard
