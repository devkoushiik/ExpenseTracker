import { useState } from "react";
import ExpenseList from "./expense-traker/components/ExpenseList";
import ExpenseFilter from "./expense-traker/components/ExpenseFilter";
import ExpenseForm from "./expense-traker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Milk",
      amount: 19,
      category: "Utility",
    },
    {
      id: 2,
      description: "Soap",
      amount: 19,
      category: "Grocery",
    },
    {
      id: 3,
      description: "Guardian of the galaxy v3",
      amount: 20,
      category: "Entertainment",
    },
  ]);

  const visibleFilterList = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div>
        <h1 className="text-center text-primary">Expense Tracker</h1>
      </div>
      <div className="mb-2">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <div className="mb-4">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleFilterList}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  );
}

export default App;
