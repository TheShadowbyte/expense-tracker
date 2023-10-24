import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

    const addExpenseHandler = expense => {
        console.log('In App.js');
        console.log(expense);
    };

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses />
        </div>
    );

}

export default App;
