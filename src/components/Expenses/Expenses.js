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

    const listOfYears = ['2022', '2021', '2020', '2019'];
    const [filteredYear, setFilteredYear] = useState('All');

    let filterInfoText = '';

    if (filteredYear !== 'All') {

        filterInfoText = 'Data for years ';

        // Filter the not selected values array to remove the selected value from the notSelectedValues array
        const notSelectedYears = listOfYears.filter(value => value !== filteredYear);

        if (notSelectedYears.length > 1) {
            let lastYear = notSelectedYears.pop();
            filterInfoText += notSelectedYears.join(", ") + " & " + lastYear;
        }
        else if (notSelectedYears.length === 1) {
            filterInfoText += notSelectedYears[0];
        }

        filterInfoText += ' is hidden.';

    }
    else {
        filterInfoText = 'Data for all years is shown.';
    }

    const filterExpensesHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterExpenses={filterExpensesHandler} />
            <p>{filterInfoText}</p>
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