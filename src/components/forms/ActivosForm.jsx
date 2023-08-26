import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ActivosClass } from "../../model/activos.class";
import { MdArrowBack } from "react-icons/md";

const loginSchema = Yup.object().shape({
  nom: Yup.string()
    .min(10, "El nombre debe poseer mas de 10 caracteres")
    .required("Nombre del Activo requerido"),
  desc: Yup.string()
    .min(20, "La descripción debe poseer mas de 20 caracteres")
    .required("Descripción del Activo requerida"),
  mod: Yup.string()
    .min(5, "El modelo-serie debe poseer mas de 5 caracteres")
    .required("Modelo-Serie del Activo requerido"),
  tipo: Yup.string()
    .oneOf(
      ["Maquinaria", "Vehículo", "Mobiliario"],
      "Seleccione un tipo de activo valido: Maquinaria/Vehículo/Mobiliario"
    )
    .required("Priority is required"),
  costo: Yup.number()
    .min(1000.0, "El costo minimo del activo debe superar los $1,000")
    .required("Costo del Activo requerido"),
  vida: Yup.number()
    .min(1, "La vida util del activo debe ser mayor que un año")
    .required("Vida Util del Activo requerida"),
});

export function ActivosForm() {
  const nav = useNavigate();

  const arrayExistente = JSON.parse(
    localStorage.getItem("activosObject") || "[]"
  );

  const initialCredentials = {
    nom: "",
    desc: "",
    mod: "",
    tipo: "",
    costo: "",
    vida: "",
  };

  function setActivo(activo) {
    localStorage.setItem("activosObject", JSON.stringify(activo));
    return Promise.resolve(localStorage.getItem("activosObject"))
      .then((r) => console.log("Activo: ", r))
      .then(nav("/"))
      .catch((er) => console.log("Error: ", er));
  }

  return (
    <>
      <div
        onClick={() => nav("/")}
        className="flex items-center font-comfortaa bg-teal-700 w-fit py-2 px-4 rounded-md cursor-pointer mb-5 mt-9"
      >
        <MdArrowBack className="text-slate-200 text-2xl cursor-pointer mr-2" />
        <span className="text-xl text-slate-200 font-bold">Volver</span>
      </div>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          const addActivo = new ActivosClass(
            values.nom,
            values.desc,
            values.mod,
            values.tipo,
            values.costo,
            values.vida
          );

          arrayExistente.push(addActivo);
          setActivo(arrayExistente);
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <div className="bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 font-comfortaa mt-10">
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2"
                    htmlFor="nom"
                  >
                    Nombre del Activo
                  </label>
                  <Field
                    id="nom"
                    name="nom"
                    type="text"
                    placeholder="Nombre del Activo"
                    className="appearance-none block w-full bg-slate-800 text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  />
                  {errors.nom && touched.nom && (
                    <ErrorMessage
                      className="text-red-400"
                      component="span"
                      name="nom"
                    />
                  )}
                </div>
                <div className="md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2"
                    htmlFor="mod"
                  >
                    Modelo-Serie
                  </label>
                  <Field
                    id="mod"
                    name="mod"
                    type="text"
                    placeholder="Modelo-Serie del Activo"
                    className="appearance-none block w-full bg-slate-800 text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  />
                  {errors.mod && touched.mod && (
                    <ErrorMessage
                      className="text-red-400"
                      component="span"
                      name="mod"
                    />
                  )}
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2"
                    htmlFor="desc"
                  >
                    Descripción
                  </label>
                  <Field
                    id="desc"
                    name="desc"
                    as="textarea"
                    rows="4"
                    placeholder="Descripción del Activo"
                    className="appearance-none block w-full bg-slate-800 text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  />
                  {errors.desc && touched.desc && (
                    <ErrorMessage
                      className="text-red-400"
                      component="span"
                      name="desc"
                    />
                  )}
                </div>
              </div>
              <div className="-mx-3 md:flex mb-2">
                <div className="md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2"
                    htmlFor="tipo"
                  >
                    Tipo de Activo
                  </label>
                  <Field
                    id="tipo"
                    name="tipo"
                    component="select"
                    className="appearance-none block w-full bg-slate-800 text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  >
                    <option>[-- Seleccione un tipo de Activo --]</option>
                    <option value="Maquinaria">Maquinaria</option>
                    <option value="Vehículo">Vehículo</option>
                    <option value="Mobiliario">Mobiliario</option>
                  </Field>
                  {errors.tipo && touched.tipo && (
                    <ErrorMessage
                      className="text-red-400"
                      component="span"
                      name="tipo"
                    />
                  )}
                </div>
                <div className="md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2"
                    htmlFor="vida"
                  >
                    Vida Util del Activo
                  </label>
                  <Field
                    id="vida"
                    name="vida"
                    type="number"
                    placeholder="Vida Util del Activo en años"
                    className="appearance-none block w-full bg-slate-800 text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  />
                  {errors.vida && touched.vida && (
                    <ErrorMessage
                      className="text-red-400"
                      component="span"
                      name="vida"
                    />
                  )}
                </div>
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2"
                    htmlFor="costo"
                  >
                    Costo del Activo
                  </label>
                  <Field
                    id="costo"
                    name="costo"
                    type="number"
                    step="0.01"
                    placeholder="Costo del Activo"
                    className="appearance-none block w-full bg-slate-800 text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  />
                  {errors.costo && touched.costo && (
                    <ErrorMessage
                      className="text-red-400"
                      component="span"
                      name="costo"
                    />
                  )}
                </div>
              </div>
            </div>

            <button
              className="bg-emerald-400 mt-3 p-2 rounded-md text-slate-800 uppercase font-bold font-comfortaa w-44 py-3 ml-10"
              type="submit"
            >
              Agregar
            </button>
            {/* {isSubmitting ? <span>Loooooogin your credentials...</span> : null} */}
          </Form>
        )}
      </Formik>
    </>
  );
}
