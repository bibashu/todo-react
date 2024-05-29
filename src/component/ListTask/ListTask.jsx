import { ListTaskItem } from "../ListTaskItem/ListTaskItem";
import s from "./style.module.css"


export function ListTask({ task, onRemove, onShowAlert }) {
  return (
    <div className={s.liste}>
      {task.map((task) => (
        <ListTaskItem task={task} onRemove={()=>onRemove()} onShowAlert={()=>onShowAlert()}  />
      ))}
    </div>
  );
}
