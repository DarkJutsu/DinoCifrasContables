import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function Activos({ act, remove }) {
  const nav = useNavigate();
  return (
    <>
      <div className="bg-slate-800 shadow-md rounded px-8 pt-6 pb-5 flex flex-col my-2 font-comfortaa">
        <h1 className="text-slate-200 text-xl">{act.nombre}</h1>
        <span className="text-slate-400 overflow-auto">{act.modelo}</span>
        <span className="text-slate-400 overflow-auto">{act.tipo}</span>
        <span className="text-slate-200 overflow-auto mt-3">
          {act.descripcion}
        </span>
        <div className="-mx-3 md:flex mb-2">
          <span className="text-slate-200 overflow-auto mt-3 md:w-1/2 px-3">
            <span className="underline text-slate-500">Costo</span>
            <br />${act.costo}
          </span>
          <span className="text-slate-200 overflow-auto mt-3 md:w-1/2 px-3">
            <span className="underline text-slate-500">Vida Util</span>
            <br />
            {act.vidaUtil} años
          </span>
        </div>
        <div className="mt-3">
          <span className="underline text-slate-400">Depreciaciones</span>
          <div className="grid grid-cols-2 mt-3 gap-3">
            <span
              className="text-md text-center text-slate-200 font-bold bg-teal-700 py-2 px-3 rounded-md cursor-pointer"
              onClick={() => {
                nav(`/lineal`, { state: act });
              }}
            >
              Lineal
            </span>
            <span
              className="text-md text-center text-slate-200 font-bold bg-teal-700 py-2 px-3 rounded-md cursor-pointer"
              onClick={() => {
                nav(`/uso`, { state: act });
              }}
            >
              Por Uso
            </span>
            <span
              className="text-md text-center text-slate-200 font-bold bg-teal-700 py-2 px-3 rounded-md cursor-pointer"
              onClick={() => {
                nav(`/acelerada`, { state: act });
              }}
            >
              Acelerada
            </span>
          </div>
        </div>
        <div className="pl-2 mt-5">
          <MdDeleteForever
            onClick={() => remove(act)}
            className="text-red-400 text-3xl cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
