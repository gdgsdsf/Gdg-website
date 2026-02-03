import React from 'react'
import flashbacks from './flashback.json'


const Flashback = () => {
    return (
        <div className='container my-5'>
            {flashbacks.map((flashback, index) => {
                return (
                    <div key={index}>
                        <h1 className='text-center my-5'>{flashback.name}</h1>
                        <div id={flashback.caraousel_id} className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {flashback.images.map((image, index2) => {
                                    return (
                                        <div className={index2 === 0 ? "carousel-item active" : "carousel-item"} key={index2}>
                                            <img src={image} className="d-block w-100" alt="TechLaunchPad Image" style={{ maxHeight: "700px", objectFit: "cover" }} />
                                        </div>
                                    )
                                })}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={`#${flashback.caraousel_id}`} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={`#${flashback.caraousel_id}`} data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Flashback
