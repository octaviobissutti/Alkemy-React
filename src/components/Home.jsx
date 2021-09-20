import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import { findById, searchByName } from '../Redux/Actions/actions';

const Home = ({match}) => {
    const myTeam = useSelector((state) => state.team);
    const detail = useSelector((state) => state.getDetails);
    const fixedMatch = useRef(match.params.id);
    const dispatch = useDispatch();
    // const [hero, setHero] = useState([]);
    // const ACCESS_TOKEN= 10227175874088628;
    // const BASE_URL= "https://superheroapi.com/api.php/";
    // // const URL = `${BASE_URL}${ACCESS_TOKEN}`;
    // // const { id }  = useParams();
    // const gettingId = async () => {
    //     const id = [1,2,3,4,5,6];
    //     let newHero = []; 
    //     for(let i = 0; i < id.length; i++) {
    //         console.log('I: ', i);
    //         const api = await axios.get(`${BASE_URL}${ACCESS_TOKEN}/${id[i]}`);
    //         const response = api.data;
    //         console.log('RESPONSE: ', response);
    //         //  newHero = [...hero, response];
    //         newHero.push(response);
    //         // const finalHero = [...hero, newHero]
    //         hero.concat(newHero);
    //          console.log('NEWHERO: ', hero);
    //         // console.log(finalHero)
             
            
    //         }
    //         setHero(newHero);
    //         // console.log(setHero())
    //         // return newHero;
    // }
  



    useEffect(() => {
    //   dispatch(searchByName())
    dispatch(findById(fixedMatch.current))
    }, [])
    





    return (
        <div>
            {
             detail?.length > 0 && detail?.map((el) => <ul>
                 <li>Name: {el.name}</li>
                 <li>Gender: {el.appearance.gender}</li>
                 <li>Id:{el.id}</li>
                 <li>Race: {el.appearance.race}</li>
                 <li>Eye Color: {el.appearance["eye-color"]}</li>
                 <li>Alignment: {el.biography.alignment}</li>
                 <img src={el.image.url} alt="not found" width="350px" height="240px" /> 
                 </ul>
                 
                 ) 
                    

            }
            
        </div>
    )
}


export default Home
