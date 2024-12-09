import Link from "next/link"
import TimelineBox from "./components/TimelineBox"
import "./animations.css"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center scroll-smooth">
      <div className="flex flex-col gap-y-5 h-screen justify-center items-center">
        <h1 className="text-xl lg:text-5xl animate-up-float">
          Normalization of Deviance
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-700"> [in AI] </span>
        </h1>
        <p className="max-w-[40rem] italic">
          A visual analysis of the past, present, and future of Ethics in Artificial Intelligence
        </p>
        <div className="flex flex-row pt-10 gap-x-5">
          <h2>Ashish Thomas</h2>
          <h2>Brandon Wang</h2>
        </div>
        <Link href="/#start" className="absolute bottom-10 hover:scale-105 text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
          Read
        </Link>
      </div>
      

      <div className="h-screen flex flex-col justify-center items-center pt-[30rem] lg:py-20" id="start">
        <p className="mx-3 lg:w-[40rem] text-left">
        While returning from their quest to retrieve the Golden Fleece, the Greek hero Jason and his crew the Argonauts are held back from Crete by the bronze giant Talos. Entrusted with the defense of the island, Talos hurls boulders at them until the sorceress Medea causes him to injure himself.

        <br /> <br />This tale represents one of the earliest known references to an artificial intelligence, but millennia would pass before substantive progress was made. As science advanced over these centuries, development of such machines remained completely unfeasible. The first major breakthrough occurred in the 1830s, when Charles Babbage and Ada Lovelace first theorized modern computers and computer programs. Paired with advances in electronic circuits, the foundations of computer science had been laid.

        <br /> <br />  A century after Babbage and Lovelace, Alan Turing and Alonzo Church demonstrated that any computable function can be calculated by a device known as a Turing machine. Building on this result, computers were famously used during World War II to crack German codes, and work in this area continued postwar. In a 1950 paper, Turing considered the question - <span className="text-green-600 font-bold italic">'Can machines think?'</span> - proposing the famous Turing test. This question has driven the field of artificial intelligence ever since, inspiring brilliant breakthroughs and similarly spectacular meltdowns.

        <br /> <br /> Nowadays, AI-powered technologies dominate our everyday lives, and promise in the future to completely reshape our society. We hope to provide you with a comprehensive history and understanding of artificial intelligence, so that you may form your own conclusions about its future. 

        </p>
        <Link href="/#timeline" className="mt-10 hover:scale-105 text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
          Start
        </Link>
      </div>

      
      <div id="timeline" className="text-2xl py-10 text-green-600">
        Early AI
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="border-r-2 gap-y-[10rem]">
          <TimelineBox className="pt-5" id="Computation: Ada Lovelace and Charles Babbage" title="Computation: Ada Lovelace and Charles Babbage" date="1837" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></TimelineBox>
          <TimelineBox className="pt-[30rem]" id="Article3" title="Title" date="1950" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></TimelineBox>

        </div>

        <div className="border-l-2 gap-y-[10rem]">
          <TimelineBox className="pt-[20rem]" id="Article2" title="Title" date="1960" description="dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidie irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></TimelineBox>
        </div>
      </div>

      <div>

      </div>
      
    </div>
  )
}