import s from "./style.module.css";

export function AlertBbox() {
  return (
    <div className={`alert alert-success ${s.alert}`} role="alert">
      Tache fait
    </div>
  );
}
