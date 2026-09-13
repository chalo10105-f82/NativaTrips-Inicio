function Mensaje() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start not-italic overflow-clip relative shrink-0 w-[690px]" data-name="Mensaje">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#ddeb8a] text-[12px] uppercase whitespace-nowrap">Tu próxima caminata empieza aquí</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.08] min-w-full relative shrink-0 text-[46px] text-white w-[min-content]">Reserva tu entrada a Chingaza sin complicaciones</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.55] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.72)] w-[610px]">Elige sendero, fecha y número de visitantes. Recibe tu confirmación y las indicaciones de ingreso en un solo lugar.</p>
    </div>
  );
}

function Paso() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Paso">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#66736d]">Sendero</p>
      <p className="font-['Inter:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[#17221e]">Seleccionar ruta⌄</p>
    </div>
  );
}

function Paso1() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Paso">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#66736d]">Fecha de visita</p>
      <p className="font-['Inter:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold relative shrink-0 text-[#17221e]">Elegir fecha⌄</p>
    </div>
  );
}

function Boton() {
  return (
    <div className="[word-break:break-word] bg-[#173f35] content-stretch flex gap-[12px] h-[52px] items-center leading-[normal] not-italic overflow-clip px-[24px] relative rounded-[999px] shrink-0 text-white whitespace-nowrap" data-name="Botón">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[15px]">Consultar disponibilidad</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[18px]">↗</p>
    </div>
  );
}

function Panel() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[30px] relative rounded-[28px]" data-name="Panel">
      <Paso />
      <div className="bg-[#d5ddd5] h-px relative shrink-0 w-full" data-name="Divisor" />
      <Paso1 />
      <Boton />
    </div>
  );
}

export default function Reserva() {
  return (
    <div className="bg-[#0c2b25] content-stretch flex gap-[64px] items-center p-[64px] relative size-full" data-name="Reserva">
      <div className="-translate-y-1/2 absolute bg-[rgba(0,0,0,0)] border-2 border-[rgba(221,235,138,0.13)] border-solid right-[-50px] rounded-[300px] size-[600px] top-1/2" data-name="Contorno topográfico" />
      <Mensaje />
      <Panel />
    </div>
  );
}