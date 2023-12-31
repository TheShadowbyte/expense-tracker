import ExpenseItem from "./ExpenseItem";
import React from "react";
import './ExpensesList.css';

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h4 className="expenses-list__fallback">No expenses found</h4>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;