import { useEffect } from "react";
import BudgeForm from "./components/BudgeForm";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseList from "./components/ExpenseList";
import ExpenseModal from "./components/ExpenseModal";
import { useBudget } from "./hooks/useBudget";
import FilterByCategory from "./components/FilterByCategory";

function App() {
  const { state } = useBudget();

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(state.expenses));
    localStorage.setItem("budge", state.budget.toString());
  }, [state.expenses, state.budget]);

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase font-black text-white text-center text-4xl">
          Planificador de Gatos
        </h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {state.budget > 0 ? <BudgetTracker /> : <BudgeForm />}
      </div>

      {state.budget > 0 && (
        <main className="max-w-3xl mx-auto py-10">
          <FilterByCategory />
          <ExpenseList />
          <ExpenseModal />
        </main>
      )}
    </>
  );
}

export default App;
