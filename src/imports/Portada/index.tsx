import svgPaths from "./svg-m5lw6mrg70";
import imgPortada from "./c31169d755b2287a223f3b4b3e6874b968886199.png";

function Mountain() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="mountain">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 30 30" width="30">
        <g id="mountain">
          <path d={svgPaths.p237d5100} id="Vector" stroke="#DDEB8A" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Marca() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Marca">
      <Mountain />
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">NativaTrips</p>
    </div>
  );
}

function Boton() {
  return (
    <div className="bg-[#ddeb8a] content-stretch flex gap-[12px] h-[52px] items-center overflow-clip px-[24px] relative rounded-[999px] shrink-0 text-[#0c2b25]" data-name="Botón">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[15px]">Reservar visita</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[18px]">↗</p>
    </div>
  );
}

function Enlaces() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[34px] items-center leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Enlaces">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[15px] text-white">Senderos</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[15px] text-white">Cómo funciona</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[15px] text-white">Recomendaciones</p>
      <Boton />
    </div>
  );
}

function Navegacion() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Navegación">
      <Marca />
      <Enlaces />
    </div>
  );
}

function Distintivo() {
  return (
    <div className="bg-[rgba(255,255,255,0.13)] content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[999px] shrink-0" data-name="Distintivo">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ddeb8a] text-[12px] uppercase whitespace-nowrap">Parque Nacional Natural Chingaza</p>
    </div>
  );
}

function Boton1() {
  return (
    <div className="bg-[#ddeb8a] content-stretch flex gap-[12px] h-[52px] items-center overflow-clip px-[24px] relative rounded-[999px] shrink-0 text-[#0c2b25]" data-name="Botón">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[15px]">Explorar senderos</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[18px]">↗</p>
    </div>
  );
}

function Acciones() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[12px] items-center leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Acciones">
      <Boton1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[13px] text-[rgba(255,255,255,0.72)]">Cupos oficiales · Confirmación inmediata</p>
    </div>
  );
}

function Mensaje() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-[810px]" data-name="Mensaje">
      <Distintivo />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0.98] min-w-full not-italic relative shrink-0 text-[68px] text-white w-[min-content]">Camina donde nace el agua</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[19px] text-[rgba(255,255,255,0.85)] w-[650px]">Explora el páramo de Chingaza con reservas simples, cupos controlados e información clara para cuidar cada paso.</p>
      <Acciones />
    </div>
  );
}

export default function Portada() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between pb-[48px] pt-[28px] px-[64px] relative size-full" data-name="Portada">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPortada} />
      <div className="absolute bg-gradient-to-b from-[rgba(12,43,37,0.46)] inset-0 to-[rgba(12,43,37,0.85)]" data-name="Velo" />
      <Navegacion />
      <Mensaje />
    </div>
  );
}