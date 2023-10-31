import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('All');

    let filterInfoText = '';
    let filteredItemsArray = [];

    if (filteredYear !== 'All') {
        filterInfoText = 'Data for ' + filteredYear + ' is shown.';
        filteredItemsArray = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);
    }
    else {
        filterInfoText = 'Data for all years is shown.';
        filteredItemsArray = props.items;
    }

    const filterExpensesHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterExpenses={filterExpensesHandler} />
            <p>{filterInfoText}</p>
            {filteredItemsArray.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );

}

export default Expenses;