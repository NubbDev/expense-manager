import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {
    const [value, setValue] = useState(0)
    const saveDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setValue(0)
    }

    if (value === 0){ 
    return (
        <div className="new-expense">
            <button onClick={() => setValue(1)}>Add New Expense</button>
        </div>
    )}
    if (value === 1){ 
        return (
            <div className="new-expense">
                <ExpenseForm onCancel={() => setValue(0)} onSaveData={saveDataHandler}/>
            </div>
        )}
    
}

export default NewExpense