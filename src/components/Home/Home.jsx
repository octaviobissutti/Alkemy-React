import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { findById, searchByName } from '../../Redux/Actions/actions';
import Search from '../Search/Search';
const Home = () => {


    return (
        <div>
            
              <h1>Welcome to your team</h1>
                 <div>
                 <Search />
                    </div>

            
        
        </div>
    )
}


export default Home
