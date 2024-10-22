import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import getData from '../utils/getData.js'


const coursePage = () =>{
    /* gets name from link and stores it in nameString const */
    const location = useLocation()
    const {name}  = location.state
    const nameString = {name}.name;


    const endPoint = 'course/courseID='+ nameString;
    
    //state
    const[loaded, setLoaded] = useState(false);
    const[courseObj, setCourseObj] = useState();

    //useEffect to take course information based on course name
      React.useEffect(()=>{
        getData(endPoint)
            .then((json) =>{
                setCourseObj(json);
                setLoaded(true);
            });
            },[]); 
            
    /* returns loading message if not loaded */
    if(!loaded){return<h1>Loading Course Info...</h1>}

    /* returns course info when loaded */
    return (
        <div className="courseContainer">
            <h1>{courseObj.courseID}</h1>
            <h1>{courseObj.title}</h1>
            <h4>{courseObj.description}</h4>
        </div>
    );
}

  export default coursePage