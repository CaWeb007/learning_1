import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/router";

const EventList = ({eventList}) => {
    const [events, setEvents] = useState(eventList)
    const router = useRouter();
    const fetchFilterEvents = async () => {
        const response = await fetch('http://localhost:4000/events?category=sport')
        const data = await response.json()
        setEvents(data)
        router.push('/events?category=sport', undefined, {shallow: true})
    }
    return(
        <>
            <h1>Events List</h1>
            <div>
                <button onClick={fetchFilterEvents}>Show sports</button>
            </div>
            <div>
                {events.map(item => {
                    return(
                        <div key={item.id}>
                            <Link href={`/events/${item.id}`}><a><h2>{item.title}</h2></a></Link>
                            <div>
                                <div>{item.description}</div>
                                <div>{item.category}</div>
                                <div>{item.date}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default EventList
export async function getServerSideProps({query}){
    const queryString = (query.category) ? 'category=sport' : ''
    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()
    return {
        props: {
            eventList: data
        }
    }
}