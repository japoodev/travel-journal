import React from 'react'

function Card(props) {
    console.log(props) 
  return (
    <>
    <div className='card'>
        <img 
        className='image' 
        src={props.imageUrl} 
        alt="" 
        />
        <div className='content'>
            <div className="location">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span className="country">{props.location.toUpperCase()}</span>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h2 className='card-heading'>{props.title}</h2>
            <span className='date'>{props.startDate} - {props.endDate}</span>
            <p className="description">{props.description}</p>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Card