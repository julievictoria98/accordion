"use client";
import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(5);
  return (
    <div className="bg-slate-200 shadow max-w-2xl flex justify-self-center flex-col items-center rounded-xl p-3 pb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Q&A</h2>
      <div className="flex flex-col gap-4">
        <Box
          title="Hvad er en Mac?"
          isActive={activeIndex === 0}
          onClick={() => setActiveIndex(0)}
        >
          En Mac er en serie af personlige computere designet, produceret og
          solgt af Apple Inc. De kører macOS-operativsystemet og er kendt for
          deres brugervenlighed og høje byggekvalitet.
        </Box>

        <Box
          title="Hvilke typer Mac-computere findes der?"
          isActive={activeIndex === 1}
          onClick={() => setActiveIndex(1)}
        >
          Apple tilbyder flere typer Mac-computere, herunder MacBook Air,
          MacBook Pro, iMac, Mac mini og Mac Pro. Hver type henvender sig til
          forskellige brugerbehov og præferencer.
        </Box>

        <Box
          title="Hvad er forskellen mellem MacBook Air og MacBook Pro?"
          isActive={activeIndex === 2}
          onClick={() => setActiveIndex(2)}
        >
          MacBook Air er designet til lethed og portabilitet, mens MacBook Pro
          er mere kraftfuld med bedre ydeevne og skærmkvalitet. Pro-modellen er
          bedre til grafikintensive opgaver som videoredigering og spil.
        </Box>

        <Box
          title="Kan jeg installere Windows på en Mac?"
          isActive={activeIndex === 3}
          onClick={() => setActiveIndex(3)}
        >
          Ja, det er muligt at installere Windows på en Mac ved hjælp af Boot
          Camp, som er et værktøj, der gør det muligt at partitionere harddisken
          og installere Windows. Alternativt kan du også bruge
          virtualiseringssoftware som Parallels Desktop eller VMware Fusion.
        </Box>
      </div>
    </div>
  );
}
function Box({ title, children, isActive, onClick }) {
  return (
    <section className="panel bg-white shadow-sm flex flex-col gap-2 rounded-md p-4">
      <h3 className="text-black font-semibold text-lg">{title}</h3>
      {isActive && <p className="text-gray-800 ">{children}</p>}
      <div className="flex justify-center">
        <button
          onClick={onClick}
          className="mt-2 py-1 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition pr-10 pl-10"
        >
          {isActive ? "Skjul" : "Vis"}
        </button>
      </div>
    </section>
  );
}
