import React, { useState } from 'react';
import ExpenseFilter from './Expensefilter';
import ExpenseList from './ExpenseList'
import ExpenseChart from '../Chart/ExpenseChart'
import './Expenses.css'
const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2022');
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});
	
	return (
		<div>
			<ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			<ExpenseChart expenses={filteredExpenses} />
			<ExpenseList items={filteredExpenses} />
		</div>
	);
};
export default Expenses;
