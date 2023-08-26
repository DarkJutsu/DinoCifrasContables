import { useEffect, useState } from "react";
import { Spinner } from "../pages/dashboard/Spinner";
import { Activos } from "./Activos";

export function ActivosList() {
  const [activo, setActivo] = useState(
    JSON.parse(localStorage.getItem("activosObject"))
  );

  const [loading, setLoading] = useState(true);

  const ActivosL = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-8">
        {activo.map((act, i) => {
          return <Activos key={i} act={act} remove={deleteAct} />;
        })}
      </div>
    );
  };

  function deleteAct(act) {
    const i = activo.indexOf(act);
    const tempAct = [...activo];

    tempAct.splice(i, 1);
    setActivo(tempAct);
    localStorage.setItem("activosObject", JSON.stringify(tempAct));
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      console.log("Task list component is going to unmount");
    };
  }, [activo]);

  return <>{loading ? <Spinner /> : <ActivosL />}</>;
}
