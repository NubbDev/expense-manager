import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'
import Card from "../../ui/Card";


const ExpenseItem = (props)=> {
    let title = props.title
    const clickHandler = () => {
        title=("Updates!")
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <h1 className="expense-item__price">${props.amount.toFixed(2)}</h1>
            </div>
            <button onLoad={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;