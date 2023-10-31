import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('All');

    let filterInfoText;
    let filteredExpenses;
    let expensesContent = <p>No expenses found</p>;

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

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onFilterExpenses={filterExpensesHandler}
            />

            {filterInfoText}
            {expensesContent}

        </Card>
    );

}

export default Expenses;