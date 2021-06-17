import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm'
import './ExpenseForm.css'
const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler=(enteredexpenseData)=>{
		
        const expenseData={...enteredexpenseData , id:Math.random().toString()};
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }
	const startEditingHandler = () => {
		setIsEditing(true);
	};
    const stopEditingHandler=()=>{
        setIsEditing(false);
    }
	return (
		<div className='new-expense'>
			{!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
			{isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
		</div>
	);
};
export default NewExpense;
