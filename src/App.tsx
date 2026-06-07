import BudgeForm from "./components/BudgeForm";
  
function App() {

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase font-black text-white text-center text-4xl">
          Planificador de Gatos
        </h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        <BudgeForm />
      </div>
    </>
  );
}

export default App;
