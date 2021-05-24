import React from 'react'
import Learners from "./Learners"
import Attendence from "./Attendence"
import Commits from "./Commits"
import {useParams} from "react-router-dom"

export default function OneLearner() {
    const {learnerId} = useParams()
    console.log(learnerId)
    const thisLearner = Learners.find(learner => learner.ID == learnerId)
     return (
        <div>  
            <h3>The details of {thisLearner.name} are</h3>
            <h6> Name : {thisLearner.name}</h6>
            <h6> Email : {thisLearner.Email}</h6>
            <h6> Phone : {thisLearner.phone}</h6>
            <h6> LinkedIn profile : {thisLearner.linked}</h6>
            <h4> Attendence : </h4>
            <Attendence attend ={thisLearner.attendence}/> 
            <br></br>
            <h4> Number of commits and Lines of Code </h4>
            <Commits  commits={thisLearner.commit}/>
        </div>
    )
}
