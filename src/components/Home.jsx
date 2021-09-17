import React, { useState, useEffect} from 'react'
import axios from 'axios';

const Home = () => {
    const ACCESS_TOKEN= 10227175874088628;
    const BASE_URL= "https://superheroapi.com/api.php/";
    const URL = `${BASE_URL}${ACCESS_TOKEN}`;
    console.log(URL);

    const apiCall = async () => {
    const api = await axios.get(`${BASE_URL}${ACCESS_TOKEN}/1`);
    const response = api.data
    return response.image;
    }
    
    useEffect(() => {
        apiCall();
    }, [])
    
    return (
        <div>
            {
                <div>
                    
                </div>

            }
            
        </div>
    )
}

export default Home
