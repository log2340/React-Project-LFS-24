import React, {useState, useEffect} from 'react'
import getData from '../utils/getData.js'

import CoopTable from './CoopSearch.jsx'

const EmploymentPage = () =>{
    const[loaded, setLoaded] = useState(false);
    const[jobsObj, setJobsObj] = useState();

    //useEffect
    React.useEffect(()=>{
        getData('employment/')
            .then((json) =>{
                setJobsObj(json);
                setLoaded(true);
                
            });

    },[]);


    if(!loaded){return(<h1>Loading Employment Data...</h1>);}

    return(
        <>
            <div className="employHeader">
                <h1>Employment</h1>
                <h2>{jobsObj.introduction.title}</h2>
            </div>
            {/* lists description info */}
            <div className="employHeaderContent">
                {jobsObj.introduction.content.map((c)=>
                    <div key={c.title} className="employHeaderContentItem">
                        <h3>{c.title}</h3>
                        <h5>{c.description}</h5>
                    </div>
                )}
            </div>
            {/* container for general content on jobs page*/}
            <div className="empoyContentList">
                <h2>{jobsObj.degreeStatistics.title}</h2>     
                {/* container for employee stats */}            
                <div className="employStatsContainer">                 
                    {jobsObj.degreeStatistics.statistics.map((s)=>
                    <div key={s.value} className="employStatsItem">
                        <h3>{s.description} : </h3>
                        <h2>{s.value}</h2>
                    </div>
                )}
                </div>           
                {/* container for employers and careers*/}
                <div className="employerCareer">
                    <div className="employerCareerItem">
                        <h2>{jobsObj.employers.title}</h2>
                        {jobsObj.employers.employerNames.map((e)=>
                        <div key={e} className="employerItem">
                            <h3>{e}</h3>
                        </div>
                    )}
                    </div>
                    <div className="employerCareerItem">
                        <h2>{jobsObj.careers.title}</h2>
                        {jobsObj.careers.careerNames.map((c)=>
                        <div key={c} className="employerItem">
                            <h3>{c}</h3>
                        </div>
                    )}
                    </div>
                </div> 
                {/* container for coop table*/}
                <h2>{jobsObj.coopTable.title}</h2>
                <CoopTable info={jobsObj.coopTable.coopInformation}/>
                
            </div>
        </>
    );

}

export default EmploymentPage