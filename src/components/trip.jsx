import { ImLocation } from 'react-icons/im'
export default function Trip(props) {
    return (
        <section className="trip">
            <div className="photo">
            <img src={props.item.photo} alt="" className="photo" />
            </div>
            <div className="desc">
                <div className="adress">
                    <div className="location-icon">
                        <ImLocation />
                    </div>
                    <h3>{props.item.adress.country}</h3>
                    <a href={props.item.adress.map} className="map-link" target="_blank">View on Google Maps</a>
                </div>
                <div className="name">
                    <h1>{props.item.name}</h1>
                </div>
                <div className='date'>
                    <p>{props.item.date.from} - {props.item.date.to}</p>
                </div>
                <div className="about">
                    <p>
                        {props.item.about}
                    </p>
                </div>
            </div>
        </section>
    )
}