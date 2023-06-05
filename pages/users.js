import Header from "./layouts/Header";
import User from './../components/User';

export default function UserList({ users }) {
    return (
        <>
            <Header />
            <h1>User List</h1>
            {
                users.map(user => {
                    return (<User key={user.id} user={user} />);
                })
            }
        </>
    )
}


export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();


    return {
        props: {
            users: data
        }
    }
}
