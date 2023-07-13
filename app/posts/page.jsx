import Link from "next/link";


async function getPostData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/sadcs');

    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })

    return res.json();
}

export default async function posts() {

    const posts = await getPostData();

    return (
        <div>
            <h2 className="text-4xl py-3">Post Page</h2>

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
