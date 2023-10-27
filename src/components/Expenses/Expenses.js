import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses() {

    const expenses = [
        { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
        { id: 'e2', title: 'Toilet Paper', amount: 12.94, date: new Date(2022, 5, 12) },
        { id: 'e3', title: 'New TV', amount: 799.49, date: new Date(2023, 2, 28) },
        { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2024, 5, 12) }
    ];

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterExpensesHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterExpenses={filterExpensesHandler} />
            {expenses.map(expense => (
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