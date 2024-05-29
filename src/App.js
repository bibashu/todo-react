import "./global.css";
import { useState, useEffect } from "react";
import { InputField } from "./component/InputField/InputField";
import { ListTask } from "./component/ListTask/ListTask";
import { AlertBbox } from "./component/AlertBox/AlertBbox";

function App() {
  const [task, setTask] = useState([]);
  const [showAlert, setAlertBox] = useState(false)

  const addTask = (taskText) => {
    if (taskText !== "") {
      setTask([...task, taskText]);
    }
  };
  // console.log(task);
  // enregistrer nos donée en local storage
  useEffect(() => {
    const donneLocal = JSON.parse(localStorage.getItem("task"));
    if (donneLocal) {
      setTask(donneLocal);
    }
  }, []);
  // charger les donne
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);
  // Remove tache de la liste
  const removeTask = (index) => {
    const reponse = window.confirm("vouler vous supprimer");
    console.log(reponse);
    if (reponse === true) {
      const updatedTasks = [...task];
      updatedTasks.splice(index, 1);
      setTask(updatedTasks);
    }
    

  };
  // show alert
  const onShowAlert = () =>{
    setAlertBox(true)
    
    console.log(showAlert);
    hiddeAlert()
  
     
  }
  const hiddeAlert = () =>{
    setTimeout(() => {
    setAlertBox(false)
      
    }, 2000);
  }

  return (
    <div className="container">
      
     {showAlert ? <AlertBbox />: null}
      <h1 className="text-white">Todo list</h1>
      <InputField onAdd={addTask} />
      <ListTask task={task} onRemove={removeTask} onShowAlert={onShowAlert} />
    </div>
  );
}

export default App;
