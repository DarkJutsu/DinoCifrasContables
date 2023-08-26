import { MdArrowBack, MdInfoOutline, MdWarningAmber } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

export function DepreUso() {
  const nav = useNavigate();
  const param = useLocation().state;

  const Result = () => {
    const elementsJSX = [];
    let valorAct = param.costo;
    let valor = 0;
    let valorActF = 0;
    let vUtil = param.vidaUtil;
    let tipo = param.tipo;

    switch (tipo) {
      case "Maquinaria":
        valor = 1500 * 1.0;
        break;
      case "Vehículo":
        valor = 17500 * 0.1;
        break;
      case "Mobiliario":
        valor = 2000 * 0.05;
        break;
    }

    for (let i = 0; i < vUtil; i++) {
      valorAct = valorAct - valor;
    }
    return (
      <div className="mt-5 bg-emerald-300 py-3 px-4 rounded-md text-slate-800 font-bold">
        <div className="ml-3 text-2xl">
          La depreciación para los {param.tipo} en un año de Uso es $
          {Number(valor.toFixed(2)).toLocaleString("en-US")}
        </div>
        <div className="mt-5">
          <span className="ml-3 text-xl">
            Por lo cual el activo {param.nombre} despues de {param.vidaUtil}{" "}
            años de uso su valor sera: $
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
        <h2 className="font-bold text-4xl">Depreciación Por Uso</h2>

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
                  La depreciación por uso es un enfoque contable que calcula la
                  depreciación de un activo en función de su uso real en lugar
                  de una estimación de su vida útil.
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
            <li>
              <b>Maquinaria:</b> depreciación por horas de uso. (Horas de uso
              estimadas anuales 1,500 con un valor por hora de $1.00).
            </li>
            <li>
              <b>Vehículos:</b> depreciación por kilometros de uso. (Kilometros
              de uso estimados anuales 17,500 con un valor por kilometro de
              $0.10).
            </li>
            <li>
              <b>Mobiliario:</b> depreciación por horas de uso. (Horas de uso
              estimadas anuales 2,000 con un valor por hora de $0.05).
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
