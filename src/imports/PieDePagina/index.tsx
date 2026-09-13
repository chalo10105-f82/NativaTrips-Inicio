import svgPaths from "./svg-muqcr25wap";

function Mountain() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="mountain">
      <svg className="absolute block inset-0 size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
        <g id="mountain">
          <path d={svgPaths.p12fb7500} id="Vector" stroke="#173F35" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Marca() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Marca">
      <Mountain />
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#0c2b25] text-[23px] whitespace-nowrap">NativaTrips</p>
    </div>
  );
}

function Identidad() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-[380px]" data-name="Identidad">
      <Marca />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#66736d] text-[14px] w-[min-content]">Reservas responsables para descubrir y conservar los senderos de Chingaza.</p>
    </div>
  );
}

function Explora() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0" data-name="Explora">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold relative shrink-0 text-[#17221e] text-[12px] uppercase">Explora</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#66736d] text-[14px]">Senderos</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#66736d] text-[14px]">Recomendaciones</p>
    </div>
  );
}

function Ayuda() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0" data-name="Ayuda">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold relative shrink-0 text-[#17221e] text-[12px] uppercase">Ayuda</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#66736d] text-[14px]">Preguntas frecuentes</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#66736d] text-[14px]">Contacto</p>
    </div>
  );
}

function Enlaces() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[70px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Enlaces">
      <Explora />
      <Ayuda />
    </div>
  );
}

function Contenido() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Contenido">
      <Identidad />
      <Enlaces />
    </div>
  );
}

function Legal() {
  return (
    <div className="relative shrink-0 w-full" data-name="Legal">
      <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[normal] not-italic overflow-clip pt-[22px] relative rounded-[inherit] size-full text-[#66736d] text-[12px] whitespace-nowrap">
        <p className="relative shrink-0">© 2026 NativaTrips · Turismo consciente en Colombia</p>
        <p className="relative shrink-0">Privacidad · Términos</p>
      </div>
      <div aria-hidden className="absolute border-[#d5ddd5] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

export default function PieDePagina() {
  return (
    <div className="bg-[#f7f3e9] content-stretch flex flex-col gap-[48px] items-start px-[64px] py-[52px] relative size-full" data-name="Pie de página">
      <Contenido />
      <Legal />
    </div>
  );
}