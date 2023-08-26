import { MdArrowBack, MdInfoOutline, MdWarningAmber } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

export function DepreAcelDecre() {
  const nav = useNavigate();
  const param = useLocation().state;

  const Result = () => {
    let valorAct = param.costo;
    let vUtil = param.vidaUtil;
    let valorResi = 0;

    const elementsJSX = [];
    for (let i = 0; i < param.vidaUtil; i++) {
      valorResi = 0.45 / (i + 1);
      let tasa = valorAct * valorResi;

      elementsJSX.push(
        <p key={i} className="text-xl mb-2">
          {i + 1}° año a ({valorResi.toFixed(2)}%): $
          {Number(valorAct.toFixed(2)).toLocaleString("en-US")} - $
          {Number(tasa).toLocaleString("en-US")} = Valor $
          {Number((valorAct = valorAct - tasa).toFixed(2)).toLocaleString(
            "en-US"
          )}
        </p>
      );
    }
    return (
      <div className="mt-5">
        <div className="ml-3">{elementsJSX}</div>
        <div className="mt-8">
          <span className="text-2xl bg-emerald-300 py-3 px-4 rounded-md text-slate-800 font-bold">
            El valor del activo despues de {param.vidaUtil} años sera: $
            {Number(valorAct.toFixed(2)).toLocaleString("en-US")}
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mt-8 font-comfortaa">
        <div
          onClick={() => nav("/")}
          className="flex items-center font-comfortaa bg-teal-700 w-fit py-2 px-4 rounded-md cursor-pointer mb-5"
        >
          <MdArrowBack className="text-slate-200 text-2xl cursor-pointer mr-2" />
          <span className="text-xl text-slate-200 font-bold">Volver</span>
        </div>
        <h2 className="font-bold text-4xl">
          Depreciación Acelerada Decreciente
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5 text-2xl">
              <span>
                <span className="text-slate-400">Activo:</span> <br />{" "}
                {param.nombre}
              </span>
              <span>
                <span className="text-slate-400">Modelo-Serie:</span> <br />
                {param.modelo}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5 text-xl">
              <span>
                <span className="text-slate-400">Tipo de Activo:</span> <br />
                {param.tipo}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-3 mt-5 text-xl">
              <span>
                <span className="text-slate-400">Descripción:</span> <br />
                {param.descripcion}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5 text-xl ">
              <span>
                <span className="text-slate-400">Costo:</span> <br />$
                {Number(param.costo).toLocaleString("en-US")}
              </span>
              <span>
                <span className="text-slate-400">Vida Util:</span> <br />
                {param.vidaUtil} año
              </span>
            </div>
          </div>
          <div className="mt-5">
            <div className="text-xl row-span-3 py-4 px-5 rounded-md bg-white bg-opacity-5">
              <p className="text-slate-400 text-justify">
                <span className="flex items-center text-slate-200">
                  <MdInfoOutline className="mr-2" />
                  Informacion de la Depreciación en Linea Recta
                </span>
                <span className="text-sm">
                  Enfoque contable que permite asignar un mayor gasto de
                  depreciación a los primeros años de vida útil de un activo y
                  un gasto menor en los años posteriores.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="text-red-300 text-md pl-3 mt-10">
          <p className="flex items-center">
            <MdWarningAmber className="mr-2" /> Nota:
          </p>
          <ul className="list-disc ml-5">
            <li>Tasa de depreciación inicial 45% .</li>
            <li>
              La tasa de depreciación disminuye cada año de vida útil del activo
              (n / tasa de depreciación).
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 font-comfortaa mb-10">
        <span className="text-teal-400 text-4xl">Resultados</span>
        <Result />
      </div>
    </>
  );
}
