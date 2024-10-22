import React, { Component } from 'react'
import { Accordion} from 'semantic-ui-react'

import CourseModal from './CourseOpener.jsx'

const minorAccordian = ({courselist}) =>{
    /*creates map of classes for the content of each accordion*/
    const mappedCourses = (
        <>{courselist.map((c)=>
            <div className="courseListItem" key={c}>
                <CourseModal courseName={c}/>
                </div>       
        )}</>
    )
    
    
    /*panel for each accordion*/
    const panels = [{
        key: 1,
        title: {content:<nobr style={{fontSize: "180%", fontWeight: "bold",}} className="degreeAccordTitle">Classes</nobr>,},
        content: {content: mappedCourses},
        },]

    return(
        <>
            <Accordion
            panels={panels}
            exclusive={true}
            fluid
            />
        </>
    );
}

export default minorAccordian
