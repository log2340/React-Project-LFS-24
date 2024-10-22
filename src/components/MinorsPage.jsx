import React, {useState, useEffect} from 'react'
import getData from '../utils/getData.js'

import MinorsAccordion from './MinorsAccord.jsx'

import './Minors.css'

const MinorsPage = () =>{
    /* retrieve minors data */
    const[loaded, setLoaded] = useState(false);
    const[minorsObj, setMinorsObj] = useState();

    React.useEffect(()=>{
        getData('minors')
            .then((json) =>{
                setMinorsObj(json);
                setLoaded(true);             
            });
    },[]);

    /* return loading if data not here */
    if(!loaded){return(<h1>Loading Minors...</h1> ); }

    return(
        <>
            {/* maps list of minors out onto page */}
            <h1>Undergraduate Minors</h1>
            {minorsObj.UgMinors.map((m)=>
                <div key={m.name} className="minorsContainer">
                    <h2>{m.title}</h2>
                    <h5>{m.description}</h5>
                    {m.note &&
                        <h5>Note: {m.note}</h5>}
                    <div className="minorAccordContainer">
                        <MinorsAccordion courselist={m.courses}/>
                    </div>
                    
                    
                </div>
            )}
        </>

    );
}

export default MinorsPage