import Link from "next/link";


async function getPostData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })

    return res.json();
}

async function getUserData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })

    return res.json();
}

export default async function posts() {

    const [users, posts] = await Promise.all([getUserData(), getPostData()]) // users, posts

    return (
        <div className="z-0">
            <h2 className="text-4xl py-3 text-center mx-auto">User and Post Data Fetch</h2>

            <h3 className="text-2xl">Fetching User data</h3>
            <ul>
                {
                    users.map((user, index) => (
                        <li className="py-2 bg-slate-400 hover:bg-gray-500 my-3 px-5" key={index}>
                            <h3 className="text-2xl">{user.name}</h3>
                            <hr />
                            <p className="text-base">
                                {user.email}
                            </p>
                        </li>
                    ))
                }
            </ul>
            <h3 className="text-2xl">Fetching Post data</h3>
            <ul>
                {
                    posts.map((post, index) => (
                        <Link key={post.id} href={`/posts/${post.id}`}>
                            <li className="py-2 cursor-pointer hover:bg-blue-600  bg-gray-500 text-white px-3 my-2 rounded-md" key={index}>
                                <h3 className="text-2xl">{post.title}</h3>
                                <hr />
                                <p className="py-1 text-base">
                                    {post.body}
                                </p>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}
