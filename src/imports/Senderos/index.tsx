import svgPaths from "./svg-za9jhnwfue";
import imgFotografia from "./708ae4d7a241a872eb47e2bf17661a5f8cc87275.png";
import imgFotografia1 from "./8bdb9ef8b31c12b66ff947a80da113b41f0d495f.png";
import imgFotografia2 from "./7a78f2c443ee67ca7edfd0aca581797d99751b30.png";

function Texto() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-[710px]" data-name="Texto">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#7ea56a] text-[12px] uppercase whitespace-nowrap">Rutas para conectar con el páramo</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.08] min-w-full relative shrink-0 text-[#17221e] text-[46px] w-[min-content]">Encuentra tu sendero en Chingaza</p>
    </div>
  );
}

function Boton() {
  return (
    <div className="bg-[#173f35] content-stretch flex gap-[12px] h-[52px] items-center leading-[normal] overflow-clip px-[24px] relative rounded-[999px] shrink-0 text-white whitespace-nowrap" data-name="Botón">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[15px]">Ver todos</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[18px]">↗</p>
    </div>
  );
}

function Introduccion() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-end justify-between not-italic overflow-clip relative shrink-0 w-full" data-name="Introducción">
      <Texto />
      <Boton />
    </div>
  );
}

function Nivel() {
  return (
    <div className="bg-[#eef2ea] content-stretch flex flex-col items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-name="Nivel">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#173f35] text-[11px] whitespace-nowrap">Intermedio</p>
    </div>
  );
}

function Encabezado() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Encabezado">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#7ea56a] text-[12px] uppercase whitespace-nowrap">Guasca</p>
      <Nivel />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_6)" id="clock">
          <path d={svgPaths.p3e73ac00} id="Vector" stroke="#173F35" strokeLinecap="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Contenido() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Contenido">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#66736d] text-[11px] uppercase">Duración</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#17221e] text-[14px]">4–5 h</p>
    </div>
  );
}

function Dato() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Dato">
      <Clock />
      <Contenido />
    </div>
  );
}

function Route() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="route">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="route">
          <path d={svgPaths.p2ac56f00} id="Vector" stroke="#173F35" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Contenido1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Contenido">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#66736d] text-[11px] uppercase">Distancia</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#17221e] text-[14px]">9,4 km</p>
    </div>
  );
}

function Dato1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Dato">
      <Route />
      <Contenido1 />
    </div>
  );
}

function Detalles() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Detalles">
      <Dato />
      <Dato1 />
    </div>
  );
}

function Accion() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Acción">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#66736d] text-[12px]">Próximos cupos disponibles</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#173f35] text-[14px]">Ver sendero →</p>
    </div>
  );
}

function Informacion() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px overflow-clip p-[24px] relative w-full" data-name="Información">
      <Encabezado />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#17221e] text-[26px] w-full">Lagunas de Siecha</p>
      <Detalles />
      <Accion />
    </div>
  );
}

function TarjetaDeSendero() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[590px] items-start min-w-px overflow-clip relative rounded-[28px] shadow-[0px_12px_30px_0px_rgba(23,63,53,0.09)]" data-name="Tarjeta de sendero">
      <div className="h-[300px] relative shrink-0 w-full" data-name="Fotografía">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotografia} />
      </div>
      <Informacion />
    </div>
  );
}

function Nivel1() {
  return (
    <div className="bg-[#eef2ea] content-stretch flex flex-col items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-name="Nivel">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#173f35] text-[11px] whitespace-nowrap">Fácil</p>
    </div>
  );
}

function Encabezado1() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Encabezado">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#7ea56a] text-[12px] uppercase whitespace-nowrap">Piedras Gordas</p>
      <Nivel1 />
    </div>
  );
}

function Clock1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_6)" id="clock">
          <path d={svgPaths.p3e73ac00} id="Vector" stroke="#173F35" strokeLinecap="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Contenido2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Contenido">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#66736d] text-[11px] uppercase">Duración</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#17221e] text-[14px]">3 h</p>
    </div>
  );
}

function Dato2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Dato">
      <Clock1 />
      <Contenido2 />
    </div>
  );
}

function Route1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="route">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="route">
          <path d={svgPaths.p2ac56f00} id="Vector" stroke="#173F35" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Contenido3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Contenido">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#66736d] text-[11px] uppercase">Distancia</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#17221e] text-[14px]">6,2 km</p>
    </div>
  );
}

function Dato3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Dato">
      <Route1 />
      <Contenido3 />
    </div>
  );
}

function Detalles1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Detalles">
      <Dato2 />
      <Dato3 />
    </div>
  );
}

function Accion1() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Acción">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#66736d] text-[12px]">Próximos cupos disponibles</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#173f35] text-[14px]">Ver sendero →</p>
    </div>
  );
}

function Informacion1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px overflow-clip p-[24px] relative w-full" data-name="Información">
      <Encabezado1 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#17221e] text-[26px] w-full">Laguna de Chingaza</p>
      <Detalles1 />
      <Accion1 />
    </div>
  );
}

function TarjetaDeSendero1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[590px] items-start min-w-px overflow-clip relative rounded-[28px] shadow-[0px_12px_30px_0px_rgba(23,63,53,0.09)]" data-name="Tarjeta de sendero">
      <div className="h-[300px] relative shrink-0 w-full" data-name="Fotografía">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotografia1} />
      </div>
      <Informacion1 />
    </div>
  );
}

function Nivel2() {
  return (
    <div className="bg-[#eef2ea] content-stretch flex flex-col items-start overflow-clip px-[10px] py-[5px] relative rounded-[999px] shrink-0" data-name="Nivel">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#173f35] text-[11px] whitespace-nowrap">Intermedio</p>
    </div>
  );
}

function Encabezado2() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Encabezado">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#7ea56a] text-[12px] uppercase whitespace-nowrap">Monterredondo</p>
      <Nivel2 />
    </div>
  );
}

function Clock2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="clock">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_6)" id="clock">
          <path d={svgPaths.p3e73ac00} id="Vector" stroke="#173F35" strokeLinecap="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Contenido4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Contenido">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#66736d] text-[11px] uppercase">Duración</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#17221e] text-[14px]">4 h</p>
    </div>
  );
}

function Dato4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Dato">
      <Clock2 />
      <Contenido4 />
    </div>
  );
}

function Route2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="route">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="route">
          <path d={svgPaths.p2ac56f00} id="Vector" stroke="#173F35" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Contenido5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Contenido">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#66736d] text-[11px] uppercase">Distancia</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#17221e] text-[14px]">7,6 km</p>
    </div>
  );
}

function Dato5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Dato">
      <Route2 />
      <Contenido5 />
    </div>
  );
}

function Detalles2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Detalles">
      <Dato4 />
      <Dato5 />
    </div>
  );
}

function Accion2() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Acción">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#66736d] text-[12px]">Próximos cupos disponibles</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#173f35] text-[14px]">Ver sendero →</p>
    </div>
  );
}

function Informacion2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px overflow-clip p-[24px] relative w-full" data-name="Información">
      <Encabezado2 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#17221e] text-[26px] w-full">Suasie</p>
      <Detalles2 />
      <Accion2 />
    </div>
  );
}

function TarjetaDeSendero2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[590px] items-start min-w-px overflow-clip relative rounded-[28px] shadow-[0px_12px_30px_0px_rgba(23,63,53,0.09)]" data-name="Tarjeta de sendero">
      <div className="h-[300px] relative shrink-0 w-full" data-name="Fotografía">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFotografia2} />
      </div>
      <Informacion2 />
    </div>
  );
}

function Listado() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Listado">
      <TarjetaDeSendero />
      <TarjetaDeSendero1 />
      <TarjetaDeSendero2 />
    </div>
  );
}

export default function Senderos() {
  return (
    <div className="bg-[#f7f3e9] content-stretch flex flex-col gap-[40px] items-start px-[64px] py-[88px] relative size-full" data-name="Senderos">
      <Introduccion />
      <Listado />
    </div>
  );
}