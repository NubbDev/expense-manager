import ExpenseItem from "./ui/ExpenseItem";
import Card from "../ui/Card";
import './Expenses.css'
import ExpensesFilter from "./filter/ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ui/ExpensesChart";

const Expenses = (props) => {
    const [year, setYear] = useState('2020')
    const items = props.item;
    
    const filterHandler = (chosenYear) =>{
        setYear(chosenYear)
    }
    
    const filteredExpenses = items.filter((expense) => {
        return expense.date.getFullYear().toString() === year;
      });

    return(
        <Card className="expenses">
        <ExpensesFilter selected={year} onFilterChange={filterHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        {filteredExpenses.map(expense => 
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