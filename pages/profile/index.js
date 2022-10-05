import {useEffect, useState} from "react";

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
    if (isLoading)
        return <h2>Loading...</h2>
    console.log(dashboard)
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
        </>
    )
}
export default Profile