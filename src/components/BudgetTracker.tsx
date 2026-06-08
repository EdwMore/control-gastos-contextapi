import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import AmountDisplay from "./AmountDisplay";
import { useBudget } from "../hooks/useBudget";
import "react-circular-progressbar/dist/styles.css";

export default function BudgetTracker() {
  const { state, remainingBudget, totalExpenses, dispatch } = useBudget();

  const percentage = +((totalExpenses / state.budget) * 100).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="relative w-80 h-w-80">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage === 100 ? "#DC2626" : "#3B82f6",
            trailColor: "#F5F5F5",
          })}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`text-4xl ${percentage === 100 ? "text-red-600" : "text-blue-500"} font-medium`}
          >
            {percentage}% Gastado
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className={`bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg cursor-pointer`}
          onClick={() => dispatch({ type: "reset-app" })}
        >
          Resetear App
        </button>

        <AmountDisplay label="Presupuesto" amount={state.budget} />

        <AmountDisplay label="Disponible" amount={remainingBudget} />

        <AmountDisplay label="Gastado" amount={totalExpenses} />
      </div>
    </div>
  );
}
