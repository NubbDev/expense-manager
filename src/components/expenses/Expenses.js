import ExpenseItem from "./ui/ExpenseItem";
import Card from "../ui/Card";
import './Expenses.css'
import ExpensesFilter from "./filter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    const [year, setYear] = useState('2020')
    const items = props.item;
    
    const filterHandler = (chosenYear) =>{
        setYear(chosenYear)
    }
    
    const filteredItems = items.filter(expense => {
      
    })

    return(
        <Card className="expenses">
        <ExpensesFilter selected={year} onFilterChange={filterHandler}/>
        {filteredItems.map(expense => 
          <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date} 
          />)}
        </Card>
    )
}

export default Expenses;