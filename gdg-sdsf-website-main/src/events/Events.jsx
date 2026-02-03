import React from 'react'
import events from './events.json'

const Events = () => {
    return (
        <div className='container my-5'>
            {events.map((event, index) => {
                return (
                    <div className="card my-5" key={index}>
                        <div className="card-body">
                            <h2 className="card-title">{event.title}</h2>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{event.date}</h6>
                            <p className="card-text my-3" dangerouslySetInnerHTML={{ __html: event.description.replace(/\n/g, '<br>') }} />
                            <a href={event.link} className="card-link btn btn-primary">Learn more</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Events