import React, {useState} from "react";
import Card from "./Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('All');

    let filterInfoText;
    let filteredExpenses;

    if (filteredYear !== 'All') {
        filterInfoText = <p>EXPENSES FOR {filteredYear} </p>;
        filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);
    }
    else {
        filterInfoText = <p>EXPENSES FOR ALL YEARS</p>;
        filteredExpenses = props.items;
    }

    const filterExpensesHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onFilterExpenses={filterExpensesHandler}
            />

            {filterInfoText}

            <ExpensesList items={filteredExpenses} />

        </Card>
    );

}

export default Expenses;