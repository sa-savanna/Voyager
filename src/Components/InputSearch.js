import React, { useState, useEffect } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';



const InputSearch = () => {
    const [countries, setCountries] = useState([]);
    //  const [countrySelected, setCountrySelected] = useState ('');

    useEffect(() => {
        fetch('https://cors-anywhere.herokuapp.com/http://country.io/names.json')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setCountries(Object.values(data))
            });
    }, [])

    //  useEffect(()=>{
    //      if(countrySelected ){
    //     passCountry(countrySelected) }
    //  },[countrySelected])


    return (
        <Autocomplete
            onChange={e => {
                console.log(e.target.innerText)
                window.location.href = `/overview/${e.target.innerText}`
            }}
            style={{ flexGrow: 1 }}
            id="countryInput"
            variant="contained"
            options={countries}
            renderInput={(params) => (
                <TextField {...params} label="Choose country" style={{ width: 300, marginTop: 0 }} className="Input" margin="normal" />
            )}
        />
    )
}

export default InputSearch
