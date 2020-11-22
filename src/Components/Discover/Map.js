import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import Spinner from "../Spinner/Spinner"
import { FaLocationArrow } from 'react-icons/fa';


let APIurl =
    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch";
const key = process.env.REACT_APP_GOOGLE_KEY;



const Map = ({ city, setPlaceId, center, setCenter }) => {

        const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (city) {
            setLoading(true);
            fetch(`${APIurl}/json?query=${city}&language=en&key=${key}`)
                .then((res) => res.json())
                .then((data) => {
                    data && data.results[0] &&
                        setCenter(data.results[0].geometry.location);
                    // console.log(data)

                    data.results[0] && setPlaceId(data.results[0].place_id);

                });
            setLoading(false)
        }
    }, [city, setCenter, setPlaceId]);

    const LocationPin = () => (
        <div className="pin">
            <FaLocationArrow />
        </div>
    )

    return loading ? <Spinner /> : (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key }}
                center={center}
                zoom={10}
                defaultCenter={{
                    lat: 50.85045,
                    lng: 4.34878
                }}
            >
                {
                    loading ? <Spinner /> :
                        <LocationPin lat={center.lat} lng={center.lng} />
                }
            </GoogleMapReact>

        </div>
    );
};

export default Map;