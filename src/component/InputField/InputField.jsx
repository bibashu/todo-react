import { useState } from "react";
import s from "./style.module.css";
import { PlusCircleFill } from "react-bootstrap-icons";
export function InputField({onAdd}) {
 
    const [taskName, setTaskame] = useState('');

    const AddTask = () =>{
      if(taskName.trim() !==0){
        onAdd(taskName)
        setTaskame('')
      }
    }
  return (
  
      < >
        <input
          type="text"
          placeholder="Ajouter Tache "
          className={`col-12 mt-5 ${s.input}`}
          value={taskName}
        
          required
          onChange={(e) => setTaskame(e.target.value)}
        />

        <PlusCircleFill
          onClick={AddTask}
          className={s.iconAdd}
        />
      </>
 
  );
}
