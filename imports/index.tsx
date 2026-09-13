import svgPaths from "./svg-iv0kppmpka";
import imgFotografia from "./1ef9fa4fd404e394939c80cee343f7be048dc891.png";

function Leyenda() {
  return (
    <div className="absolute bg-[rgba(12,43,37,0.85)] bottom-[24px] content-stretch flex flex-col items-start left-[24px] overflow-clip px-[14px] py-[9px] rounded-[999px]" data-name="Leyenda">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Altitud: hasta 3.900 m s. n. m.</p>
    </div>
  );
}

function Fotografia() {
  return (
    <div className="content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[28px] shrink-0 w-[600px]" data-name="Fotografía">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[28px] size-full" src={imgFotografia} />
      <Leyenda />
    </div>
  );
}

function Titulo() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start not-italic overflow-clip relative shrink-0 w-full" data-name="Título">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#7ea56a] text-[12px] uppercase whitespace-nowrap">Antes de salir</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.08] min-w-full relative shrink-0 text-[#17221e] text-[46px] w-[min-content]">Prepárate para una experiencia segura</p>
    </div>
  );
}

function CloudRain() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="cloud-rain">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="cloud-rain">
          <path d={svgPaths.p503c380} id="Vector" stroke="#0C2B25" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Icono() {
  return (
    <div className="bg-[#ddeb8a] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[42px]" data-name="Ícono">
      <CloudRain />
    </div>
  );
}

function Contenido() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-w-px not-italic overflow-clip relative" data-name="Contenido">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#17221e] text-[16px] whitespace-nowrap">Temperatura y lluvia</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#66736d] text-[14px] w-[min-content]">Lleva chaqueta impermeable y viste por capas; el clima cambia en minutos.</p>
    </div>
  );
}

function Recomendacion() {
  return (
    <div className="relative shrink-0 w-full" data-name="Recomendación">
      <div className="content-stretch flex gap-[18px] items-start overflow-clip py-[19px] relative rounded-[inherit] size-full">
        <Icono />
        <Contenido />
      </div>
      <div aria-hidden className="absolute border-[#d5ddd5] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function CircleX() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="circle-x">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_6)" id="circle-x">
          <path d={svgPaths.p30a06080} id="Vector" stroke="#0C2B25" strokeLinecap="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icono1() {
  return (
    <div className="bg-[#ddeb8a] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[42px]" data-name="Ícono">
      <CircleX />
    </div>
  );
}

function Contenido1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-w-px not-italic overflow-clip relative" data-name="Contenido">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#17221e] text-[16px] whitespace-nowrap">Hidratación y alimento</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#66736d] text-[14px] w-[min-content]">Trae agua suficiente y snacks energéticos. No hay ventas dentro de los senderos.</p>
    </div>
  );
}

function Recomendacion1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Recomendación">
      <div className="content-stretch flex gap-[18px] items-start overflow-clip py-[19px] relative rounded-[inherit] size-full">
        <Icono1 />
        <Contenido1 />
      </div>
      <div aria-hidden className="absolute border-[#d5ddd5] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function ShieldOff() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shield-off">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_4)" id="shield-off">
          <path d={svgPaths.pe81c080} id="Vector" stroke="#0C2B25" strokeLinecap="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icono2() {
  return (
    <div className="bg-[#ddeb8a] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[42px]" data-name="Ícono">
      <ShieldOff />
    </div>
  );
}

function Contenido2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-w-px not-italic overflow-clip relative" data-name="Contenido">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#17221e] text-[16px] whitespace-nowrap">Protege el ecosistema</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#66736d] text-[14px] w-[min-content]">Permanece en la ruta, regresa tus residuos y no toques los frailejones.</p>
    </div>
  );
}

function Recomendacion2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Recomendación">
      <div className="content-stretch flex gap-[18px] items-start overflow-clip py-[19px] relative rounded-[inherit] size-full">
        <Icono2 />
        <Contenido2 />
      </div>
      <div aria-hidden className="absolute border-[#d5ddd5] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Lista() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Lista">
      <Recomendacion />
      <Recomendacion1 />
      <Recomendacion2 />
    </div>
  );
}

function Recomendaciones() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[28px] items-start min-w-px overflow-clip relative" data-name="Recomendaciones">
      <Titulo />
      <Lista />
    </div>
  );
}

export default function GuiaDeVisita() {
  return (
    <div className="bg-[#eef2ea] content-stretch flex gap-[64px] items-start px-[64px] py-[72px] relative size-full" data-name="Guía de visita">
      <Fotografia />
      <Recomendaciones />
    </div>
  );
}