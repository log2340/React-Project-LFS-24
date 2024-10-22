import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button'
import { Link } from "react-router-dom"


/* button to send router to course info page, sends course name as state */
export default function CourseModal({courseName}) {

    return(
      <Link className="courseButton" to="/course" state={{name: courseName}}>
          <div className="courseListItem">
            {courseName}
            
          </div>
        </Link>
  );}


  

  