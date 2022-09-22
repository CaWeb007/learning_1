import User from "../../components/user";

const UserList = ({users}) => {
    return (
        <>
            <h1>User List Page</h1>
            {
                users.map(user => {
                    return(
                        <div key={user.id}>
                            <User user={user}></User>
                        </div>
                    )
                })
            }
        </>
    )
}

export default UserList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data[1].name)
    return {
        props: {
            users: data
        }
    }
}