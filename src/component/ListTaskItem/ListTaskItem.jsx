import s from "./style.module.css"
// import { useState } from "react";
import { TrashFill, CheckCircleFill } from "react-bootstrap-icons"

export function ListTaskItem({task, onRemove, onShowAlert  }){
   
    return <>
  
        <div className={s.listItem}>{task}
        <TrashFill className={s.delete} onClick={onRemove}  />
        <CheckCircleFill className={s.check} onClick={onShowAlert}/>

       
        </div>
       
    
    </>
}
