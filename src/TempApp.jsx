import Axios from 'axios';
import React,{ useState,useEffect } from 'react';

const TempApp = ()=>{

    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Mumbai");

    useEffect(() => {
        async function getData(){
            const resp=await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b27567411759b993db5aaf023340d3b7`);
            console.log(resp);
            setCity(resp.data);
        }
        getData();
    }, [search])
    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input 
                    type="search"
                    value={search}
                    className="inputFeild"
                    onChange={(event)=>{setSearch(event.target.value);}}
                    />
                </div>
                
                { !city ? (
                    <p className="errorMsg">No Data Found</p>
                ) : (
                    <>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">{city.main.feels_like} °Cel</h1>
                            <h3 className="tempmin_max">Min : {city.main.temp_min} °Cel | Max : {city.main.temp_max} °Cel </h3>
                        </div>

                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </>
                ) }
            </div>
        </>
    );
}

export default TempApp;
