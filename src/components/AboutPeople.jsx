import React from 'react'
import {useState} from 'react'
import getData from '../utils/getData.js'

import PeopleTabs from './PeopleTabs.jsx'

const aboutPeople = () =>{
    //state
    //const [var, setVar] = useState(init);
    const[loaded, setLoaded] = useState(false);
    const[aboutObj, setAboutObj] = useState();

    //get data
    React.useEffect(()=>{
        //page was just rendered, now get data
        getData('about/')
        .then((json)=>{

            setAboutObj(json);
            setLoaded(true);
        });

    }, []);
    
      //return is for the page before data loaded
    if(!loaded) return(
    <>
      <div>Loading...</div>
    </>
    )
    //return is for the page after data loaded
    return(
    <>
      <div className="App">
        <h1>About</h1>
        <div className = "About">
          <h2>{aboutObj.title}</h2>
          <h3>{aboutObj.description}</h3>
          <div className="aboutQuote">
            <h4 className="quote">{aboutObj.quote}</h4>
            <h4>--{aboutObj.quoteAuthor}</h4>
          </div>
        </div>
        <hr/>
        {/*put my components here!*/}
        <PeopleTabs />
        <hr/>
      </div>
    </>

  )

}

export default aboutPeople