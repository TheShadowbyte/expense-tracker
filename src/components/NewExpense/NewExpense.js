import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveNewExpenseHandler = (enteredExpenseData) => {
        const newExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(newExpenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} />
        </div>
    );
}

export default NewExpense;