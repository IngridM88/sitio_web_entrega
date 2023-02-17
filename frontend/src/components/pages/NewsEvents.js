import React from "react";
import axios from 'axios';
import NewsEventsItem from '../newsnevents/NewsEventsItem'; 
import{ useState, useEffect } from 'react';

const NewsEvents = (props) => {

    const [loading, setloading] = useState(false);
    const [newsnevents, setNewsEvents] = useState([]);

    useEffect(() => {
        const loadNewsEvents = async () => {
            setloading(true);
            const response = await axios.get('http://localhost:3000/api/newsnevents');
            setNewsEvents(response.data);
            setloading(false);
        };

        loadNewsEvents();
    }, []);



    return (
            <section className="newsnevents container">
                    <h2>News & Events</h2>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        newsnevents.map(item => <NewsEventsItem key ={item.id}
                            title={item.title} subtitle={item.subtitle} image={item.image} body={item.body} />)
                    )}
            </section>
    );
}

export default NewsEvents;
