import {useEffect, useState} from "react"
import useSWR from "swr"
const fetcher = async () => {
    const response = await fetch('http://localhost:4000/user/1')
    const data = await response.json()
    return data
}
function Profile() {
    const [isLoading, setIsLoading] = useState(true)
    const [dashboard, setDashboard] = useState(null)
    useEffect(() => {
        async function fetchDashData() {
            const response = await fetch('http://localhost:4000/dashboard')
            const data = await response.json()
            setDashboard(data)
            setIsLoading(false)
        }
        fetchDashData()
    }, [])
    const {data, error} = useSWR('userInfo', fetcher)

    if (isLoading || !data)
        return <h2>Loading...</h2>
    return (
        <>
            <h1>Profile page</h1>
            <div>
                <h2>Dashboard</h2>
                {Object.keys(dashboard).map(index => {
                    return (
                        <div key={index}>
                            {index[0].toUpperCase() + index.slice(1)}: {dashboard[index]}
                        </div>
                    )
                })}
            </div>
            <div>
                <h2>User Info</h2>
                <table>
                    <tr><td>Name</td><td>{data.name}</td></tr>
                    <tr><td>Profession</td><td>{data.profession}</td></tr>
                    <tr><td>Email</td><td>{data.email}</td></tr>
                    <tr><td>Phone</td><td>{data.phone}</td></tr>
                </table>
            </div>
        </>
    )
}
export default Profile