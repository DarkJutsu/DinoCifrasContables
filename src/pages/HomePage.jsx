import { MdAddCircle } from "react-icons/md";
import { ActivosList } from "../components/ActivosList";
import { AddActivoHome } from "./dashboard/AddActivoHome";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const nav = useNavigate();

  const AddHome = () => {
    return (
      <>
        <div
          onClick={() => nav("/add")}
          className="flex items-center font-comfortaa bg-emerald-400 w-fit py-2 px-4 rounded-md cursor-pointer"
        >
          <span className="text-2xl text-slate-800 font-bold">
            Nuevo Activo
          </span>
          <MdAddCircle className="text-slate-800 text-3xl cursor-pointer ml-2" />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="mt-10">
        {localStorage.getItem("activosObject") == null ? (
          <AddActivoHome />
        ) : (
          <div>
            <AddHome />
            <ActivosList />
          </div>
        )}
      </div>
    </>
  );
}
