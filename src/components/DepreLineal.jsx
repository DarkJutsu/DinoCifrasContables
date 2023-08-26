import { MdArrowBack, MdInfoOutline, MdWarningAmber } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

export function DepreLineal() {
  const nav = useNavigate();
  const param = useLocation().state;

  const Result = () => {
    let valorAct = param.costo;
    let vUtil = param.vidaUtil;
    let valorResi = valorAct * (1 / vUtil);

    const elementsJSX = [];
    for (let i = 0; i < param.vidaUtil; i++) {
      elementsJSX.push(
        <li key={i} className="text-xl mb-2">
          {i + 1}° año: ${Number(valorAct.toFixed(2)).toLocaleString("en-US")} -
          ${Number(valorResi.toFixed(2)).toLocaleString("en-US")} = Valor $
          {Number((valorAct = valorAct - valorResi).toFixed(2)).toLocaleString(
            "en-US"
          )}
        </li>
      );
    }
    return (
      <div className="mt-5">
        <div className="ml-3">
          <ul>{elementsJSX}</ul>
        </div>
        <div className="mt-8">
          <span className="text-2xl bg-emerald-300 py-3 px-4 rounded-md text-slate-800 font-bold">
            El valor del activo despues de {param.vidaUtil} años sera: $
            {Math.abs(Number(valorAct.toFixed(2)).toLocaleString("en-US"))}
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
        <h2 className="font-bold text-4xl">Depreciación de Línea Recta</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5 text-2xl">
              <span>
                <span className="text-slate-400">Activo:</span> <br />
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
                  La fórmula básica para calcular la depreciación en línea recta
                  es: <br /> VR = CA * (1 / VUA) <br /> DA = CA - VR <br />{" "}
                  Donde: <br /> <b>CA</b> es el precio original del activo.{" "}
                  <br /> <b>VR</b> es el valor estimado del activo al final de
                  su vida útil. <br />
                  <b>VUA</b> es el período en el que se espera que el activo sea
                  útil.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="text-red-300 text-md pl-3 mt-10">
        <p className="flex items-center"><MdWarningAmber className="mr-2" /> Nota:</p>
          <ul className="list-disc ml-5">
            <li>
              La Tasa de Depreciación Lineal usada es "Costo del Activo * (1 /
              Vida Útil Estimada)".
            </li>
            <li>
              En el ultimo año de la vida útil del activo su valor debería haber
              disminuido a $0, ya que se habría depreciado completamente.
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
