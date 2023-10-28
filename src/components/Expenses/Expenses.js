import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

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
            {props.items.map(expense => (
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