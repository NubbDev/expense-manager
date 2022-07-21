import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'
import Card from "../../ui/Card";


const ExpenseItem = (props)=> {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <h1 className="expense-item__description">{props.title}</h1>
            <h1 className="expense-item__price">${props.amount.toFixed(2)}</h1>
        </Card>
    )
}

export default ExpenseItem;