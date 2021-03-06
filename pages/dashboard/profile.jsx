import { Navbar, Mobile } from '../../components'
import ProfileInfo from './profileInfo'

const res = {
    "user": "ines98",
    "profile": {
        "id": 2,
        "picture": "/Users/franciscomendes/Desktop/GIT/onlydesk/onlydesk-api/uploads/4f7074fd4e552a396e32672184cd3a54-drew-hays-agGIKYs4mYs-unsplash.jpg",
        "occupation": "Interior Designer",
        "bio": "Learning new things 🍀"
    },
    "links": [{
        "id": 2,
        "name": "Pinterest",
        "url": "https://www.pinterest.com"
    }, {
        "id": 21,
        "name": "Tumblr",
        "url": "https://www.tumblr.com"
    }, {
        "id": 22,
        "name": "Xing",
        "url": "https://www.xing.com"
    }, {
        "id": 23,
        "name": "LinkedIn",
        "url": "https://www.linkedin.com"
    }, {
        "id": 24,
        "name": "Instagram",
        "url": "https://www.instagram.com"
    }, {
        "id": 25,
        "name": "Unsplash",
        "url": "https://www.unsplash.com"
    }, {
        "id": 26,
        "name": "Youtube",
        "url": "https://www.youtube.com"
    }]
}

const Profile = () => {
    return (
        <main className="h-screen flex flex-wrap">
            <Navbar />
            <Mobile />
            <div className="w-screen md:w-2/4 bg-gray-50 flex flex-col justify-center items-center">
                <form className="flex flex-col justify-center items-center">
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 tracking-wider">occupation</label>
                        <input type="text" name="occupation" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 tracking-wider">bio</label>
                        <input type="text" name="bio" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                    </div>
                    <div className="mt-4">
                        <input type="file" name="picture" className="block w-full p-3 border border-transparent focus:outline-none" />
                    </div>
                    <button className="mt-8 p-3 bg-pink-600 text-white rounded shadow tracking-wider font-medium">Create</button>
                </form>
            </div>
            <div className="w-screen md:w-2/4 flex justify-center items-center">
                <ProfileInfo data={res} />
            </div>
        </main>
    )
}

export default Profile
