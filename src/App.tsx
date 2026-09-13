import Portada from "./imports/Portada";
import Senderos from "./imports/Senderos";
import GuiaDeVisita from "./imports/GuiaDeVisita";
import Reserva from "./imports/Reserva";
import PieDePagina from "./imports/PieDePagina";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Portada />
      <Senderos />
      <GuiaDeVisita />
      <Reserva />
      <PieDePagina />
    </div>
  );
}
