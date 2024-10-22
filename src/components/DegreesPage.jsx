import React, {useState, useEffect} from 'react'
import getData from '../utils/getData.js'

import DegreeAccordion from './DegreeAccord.jsx'

import './Degree.css'

const DegreesPage = () =>{
    const[loaded, setLoaded] = useState(false);
    const[degObj, setDegObj] = useState();

    //useEffect
    React.useEffect(()=>{
        getData('degrees/')
            .then((json) =>{
                setDegObj(json);
                setLoaded(true);
                
            });

    },[]);


    //if not loaded return loading
    if(!loaded) return (<><h1>Degrees Loading...</h1></>);



    return(
        <>
            <h1>Degrees</h1>
            <DegreeAccordion className="accordionContainer" degrees={degObj}/>
        </>
        
    );

}

export default DegreesPage