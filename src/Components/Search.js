import React from 'react'
import { Image } from 'react-bootstrap';
import Globe from './Slider/img/globe_PNG62.png'
import InputSearch from './InputSearch';



export const Search = () => {

    return (
        <>
            <div id="search-menu" expand="lg">
                <a className="navbar-brand" href="/">
                    <Image width="50px" src={Globe} /></a>
                <div>
                    <InputSearch />
                </div>
            </div>

        </>
    )
}