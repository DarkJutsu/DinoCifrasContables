import { MdAddCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export function AddActivoHome() {
  const nav = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center h-[70vh] mb-10">
        <div className="">
          <span className="font-comfortaa text-xl text-amber-50 text-center flex justify-center">
            Agrega un Activo <br /> para ver sus Depreciaciones
          </span>
          <MdAddCircle
            className="text-emerald-400 text-7xl cursor-pointer mt-5 m-auto"
            onClick={() => nav("/add")}
          />
        </div>
      </div>
    </>
  );
}
