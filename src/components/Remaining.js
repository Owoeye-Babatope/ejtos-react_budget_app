import React, {useContext} from "react"
import { AppContext } from "../context/AppContext"




const Remaining = () => {
    const {expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce(
        (total, eachExp) => {return (total + eachExp.cost)}
        , 0) // The last Zero(0) is the initial state of the accumulator "total"


    const alertType = totalExpenses > budget? "alert-danger": "alert-success";
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    )
}


export default Remaining;