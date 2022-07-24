import ExpenseDate from "./ExpenseDate";
import {useState} from "react";
import './ExpenseItem.css'
import Card from "../../ui/Card";


const ExpenseItem = (props)=> {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle("Updated");
        console.log(title);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <h1 className="expense-item__price">${props.amount.toFixed(2)}</h1>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;