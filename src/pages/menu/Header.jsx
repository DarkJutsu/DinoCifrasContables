import { useNavigate } from "react-router-dom";

export function Header() {
  const nav = useNavigate();
  return (
    <>
      <div
        className="w-fit flex bottom-0 cursor-pointer"
        onClick={() => {
          nav("/");
        }}
      >
        <img className="w-24" src="../img/logo.png" alt="Logo" />
        <span className="relative w-36">
          <h1 className="text-zinc-400 text-3xl absolute inset-x-0 bottom-2 font-comfortaa font-bold">
            dinocifras contables
          </h1>
        </span>
      </div>
    </>
  );
}
