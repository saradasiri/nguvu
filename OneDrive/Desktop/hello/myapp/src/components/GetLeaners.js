import React from 'react'
import Learners from "./Learners"
import {Link} from "react-router-dom"



export default function GetLeaners() {
    return (
        <div>
         <h4>The list of Learners</h4>
            {Learners.map((learner, key) => {
              return <ul key={key}>         
                <li>
                  <Link to={`/learner/${learner.ID}`}> {learner.name}</Link>
                </li>         
        </ul>
      })}
    </div>
    )
}
