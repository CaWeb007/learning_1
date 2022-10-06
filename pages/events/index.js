import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/router";

const EventList = ({eventList, categoryList}) => {
    const [events, setEvents] = useState(eventList)
    const [category, setCategory] = useState(categoryList)
    const router = useRouter();
    const fetchFilterEvents = async (event) => {
        const queryString = (event.target.value) ? `category=${event.target.value}` : ''
        const response = await fetch(`http://localhost:4000/events?${queryString}`)
        const data = await response.json()
        setEvents(data)
        router.push(`/events?${queryString}`, undefined, {shallow: true})
        const category = []
        if (queryString === '')
            data.map(item => {
                if (category.find(element => element === item.category) === undefined)
                    category.push(item.category)
            })
        setCategory(category)
    }
    return(
        <>
            <h1>Events List</h1>
            <div>
                {category.map(item => {
                    return(
                        <div key={item}>
                            <button value={item} onClick={fetchFilterEvents}>Show {item}</button>
                        </div>
                    )
                })}
                <div key={'all'}>
                    <button value={''} onClick={fetchFilterEvents}>Show all</button>
                </div>
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
    const queryString = (query.category) ? `category=${query.category}` : ''
    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()
    const category = []
    if (queryString === '')
        data.map(item => {
            if (category.find(element => element === item.category) === undefined)
                category.push(item.category)
        })

    return {
        props: {
            eventList: data,
            categoryList: category
        }
    }
}