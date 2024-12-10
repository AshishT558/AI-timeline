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
        Birth of Computing and AI
      </div>
      <div className="grid grid-cols-2">
        <div className="lg:border-r-2 gap-y-[10rem]">
          <TimelineBox className="mt-5 hidden lg:block" id="Early Computing" title="Computation: Ada Lovelace and Charles Babbage" date="1837" 
          description={<>- In 1837, the English mathematician Charles Babbage began work on the Analytical Engine. This was the culmination of years of work on computing machines and the first design for a Turing-complete computer
            <br></br> <br></br>- While construction of the machine never finished, its design influenced the structure of the first working computers a century later
            <br></br> <br></br>- In 1843, while working with Babbage on the engine, the mathematician Ada Lovelace wrote a series of notes for the engine, believed to be the first computer program
            </>}></TimelineBox>
          <TimelineBox className="mt-[30rem]" id="AI Groundwork" title="Turing Test" date="1950" 
          description={<>- In 1949, Turing published a landmark paper, 'Computing Machinery and Intelligence', considered to have launched the field of artificial intelligence
         <br></br> <br></br>- Rather than investigating whether or not machines could think,Turing proposed the famous Turing test to ascertain if they could act like a human mind
         <br></br> <br></br>- The test comprises a human player, a computer, and an interrogator, who asks questions to determine which is the human and which is the machine
          </>}></TimelineBox>
          <TimelineBox className="mt-[2rem]" id="AI Groundwork" title="Samuel and the IBM Checkers Program" date="1952" 
          description={<>- In 1956, IBM engineer Arthur Samuel developed a checkers-playing program for the IBM 701, the company's high-end machine intended for industry use
          <br></br> <br></br>- The program pioneered important techniques in the field, such as 'pruning' the search tree of possible moves to overcome limited computing power and memory, and having his program play itself thousands of times, an early application of machine learning
          </>}></TimelineBox>
          <TimelineBox className="mt-[13rem]" id="AI Groundwork" title="MIT and Cognition" date="1956" 
          description={<>- That same year, the field of cognitive science was born from interdisciplinary collaboration at an MIT conference
            <br></br> <br></br>- By the 80s, cognitive explanations would overtake behavioral ones as the dominant paradigm in psychology, contributing heavily to future AI developments
            </>}></TimelineBox>
        </div>

        <div className="lg:border-l-2 gap-y-[10rem]">
          <TimelineBox className="mt-[40rem]" id="Early Computing" title="WWII Computers, ENIAC" date="1945" 
          description={<>- During the war, both sides funded the design and construction of massive computers for various purposes
            <br></br> <br></br>- Famously, the work of Turing and his British colleagues at Bletchley Park cracked the German Enigma code, believed to have shortened the war by 2-3 years
            <br></br> <br></br>- ENIAC, the first programmable, fully electronic, digital general-purpose computer, was completed in 1945, on a contract from the US Army
            </>}></TimelineBox>
          <TimelineBox className="mt-[2rem]" id="AI Groundwork" title="Minsky, Edwards, and SNARC" date="1951" 
          description={<>- In 1943, Warren McCulloch and Walter Pitts published an important paper on the theory of artificial neurons, an approach inspired by the actual neurons in our brains
            <br></br> <br></br>- Inspired by a 1943 paper on artificial neurons, then-graduate student Marvin Minsky built an early neural net machine called the SNARC
            </>}></TimelineBox>
          <TimelineBox className="mt-[30rem]" id="AI Groundwork" title="The Meeting at Dartmouth" date="1956" 
          description={<>- A 1956 summer workshop at Dartmouth was organized by Minsky along with Claude Shannon, John McCarthy, Nathaniel Rochester, considered the definitive founding of the field of AI
            <br></br> <br></br>- Work at this meeting formally defined the field of AI and proposed research topics that would guide its future
            </>}></TimelineBox>
        </div>

        
      </div>

      <div className="text-2xl py-10 text-green-600">
        Early Problems and Deviance
      </div>
      <div id="timeline" className="grid grid-cols-2">
        <div className="lg:border-r-2 gap-y-[10rem]">
          <TimelineBox className="mt-[20rem]" id="early-deviance" title="Early Voices and Predictions" date="1960s-70s" 
          description={<>- Leading AI scholars of the time were extremely optimistic about the field, based on their outstanding success on simpler problems. H.A. Simon, who was was present at the 1956 MIT meeting and in 1957 developed the General Problem Solver, a machine capable of logically solving simple puzzles like the famous Towers of Hanoi. That year, he predicted that computers would overtake humans in chess within a decade. In 1965, he again forecast that computers would surpass humans in all tasks within twenty years.
          <br></br> <br></br>- In 1970, Minsky stated in an interview for Life that, "In from three to eight years we will have a machine with the general intelligence of an average human being."</>}></TimelineBox>
        </div>

        <div className="lg:border-l-2 gap-y-[10rem]">
          <TimelineBox className="mt-[5rem]" id="early-deviance" title="ELIZA" date="1966" 
          description={<>- Developed by Joseph Weizenbaum at MIT, ELIZA is considered the first chatbot, and thus the first program able to take the Turing test
          <br></br> <br></br>- The most famous DOCTOR script mostly repeated the user's words back to them using simple rules, an approach that both simulated a popular form of therapy and allowed Weizenbaum to work within his tiny memory constraints
          <br></br> <br></br>- However, ELIZA's users derived meaning from their conversations with the program, shocking Weizenbaum, who would go on to become a leading critic of AI. 
          </>}></TimelineBox>
          <TimelineBox className="mt-[15rem]" id="early-deviance" title="The Lighthill Report" date="1973" 
          description={<>- Commissioned by the British government, James Lighthill published his evaluation of the future of AI in 1973. His findings were extremely pessimistic, highlighting the roadblocks that early advances had run into. 
          <br></br> <br></br>- The limited computational power and memory of that era limited progress in many areas, even when the approach was correct and would later work with better computers.
          <br></br> <br></br>- However, Lighthill's report marked the end of British funding, and a similar trend occurred in the US.
          </>}></TimelineBox>

        </div>
      </div>

      <div className="text-2xl py-10 text-green-600">
        AI Winter
      </div>
      <div id="timeline" className="grid grid-cols-2">
        <div className="lg:border-r-2 gap-y-[10rem]">
        <TimelineBox className="mt-[40rem]" id="AI Winter" title="The FGCS Initiative" date="1982"
        description={<>- Following a run of considerable success across multiple industries, the Japanese Ministry of International Trade and Industry launched an ambitious plan to take over the computer market in 1982.
          <br></br> <br></br>- Known as the 'Fifth Generation Computer System' initiative, this 10-year plan set lofty goals, focused on the development of intelligent systems with reasoning capabilities.
          <br></br> <br></br>- The US government, fearful of losing their place in the global market, mirrored this initiative with its own wave of funding.
          <br></br> <br></br>- As in the 50s and 60s, these targets turned out to be completely unrealistic, and Japan's $320 million investment was largely wasted.
          </>}></TimelineBox>

        <TimelineBox className="mt-[5rem]" id="AI Winter" title="Soviet Nuclear False Alarm" date="1983" 
        description={<>A new Soviet early warning system incorporating artificial intelligence malfunctioned on September 26, 1983, displaying high confidence of a US nuclear strike at a time of strained relations between the superpowers.
          <br></br> <br></br>- Soviet engineer Stanislav Petrov suspected a malfunction, due to the tiny size of the strike (any first strike would aim to wipe out the Soviet Union to prevent retaliation), and did not alert his superiors, possibly preventing nuclear war had the Soviets launched.
          </>}></TimelineBox>

        <TimelineBox className="mt-[30rem]" id="AI Winter" title="Deep Blue beats Kasparov" date="1997" 
        description={<>- One of AI's most famous triumphs is the 1997 defeat of reigning world chess champion Garry Kasparov by IBM's Deep Blue. Widely considered one of the greatest players of all time, Kasparov had won a first match 4 - 2 the prior year, but succumbed to an upgraded version in the rematch, 3.5 - 2.5.
        <br></br> <br></br>- Deep Blue used an expert system structure, with rules and opening moves crafted by grandmasters on IBM's team. These rules were used to limit its search tree and ensure every one of the 200 million positions it evaluated each second were meaningful.
        <br></br> <br></br>- Deep Blue's design was not entirely new, but hardware advances allowed it to process far more positions than earlier chess-playing programs.
        <br></br> <br></br>- While the tree of possible moves in chess dwarfs that of a game like checkers, the game Go possesses an even more expansive tree that would take decades and new innovations to crack.
        </>}></TimelineBox>  
        
        </div>

        <div className="lg:border-l-2 gap-y-[10rem]">
        <TimelineBox className="mt-[5rem]" id="AI Winter" title="Expert Systems" date="1980" description={<>- A common approach to artificial intelligence at the time was knowledge-based. Expert systems were provided with some base knowledge about the world, and an engine which applied these rules through if-then logic to draw conclusions.
          <br></br> <br></br>- The medical program MYCIN, using this system, was one of the most notable successes of the knowledge method. MYCIN would ask the doctor a series of questions, then use its knowledge base to diagnose bacterial infections and recommend antibiotics.
          </>}></TimelineBox>
        <TimelineBox className="mt-[5rem]" id="AI Winter" title="Eurisko" date="1981 - 82" 
        description={<>- Carnegie Mellon professor Douglas Lenat developed the discovery system Eurisko in the late 1970s. Like an expert system, Eurisko made use of encoded knowledge, and used logical rules to discover new ideas, including innovative rules on how to modify its own rules.
          <br></br> <br></br>- Eurisko won the national championship for the sci-fi game Traveller in 1981 and 1982 by exploiting corner cases in a way considered cheating by most. After its 1981 win, the program discovered it was allowed to destroy its own ships en route to another win. Lenat did not compete in 1983, due to a threat by the championship's sponsor to cancel the tournament if he did.
        </>}></TimelineBox>

        <TimelineBox className="mt-[30rem]" id="AI Winter" title="Backpropagation" date="1985" 
        description={<>- Backpropagation, the key mechanism behind modern neural networks, was first popularized by David Rumelhart in 1985. 
          <br></br> <br></br>- Although the algorithm had been discovered and published several times before, none of those papers gained traction before Rumelhart's independent derivation.
          <br></br> <br></br>- One of Rumelhart's co-authors on the paper, Geoffrey Hinton, would go on to become one of the biggest names in the field.
          </>}></TimelineBox> 

        </div>

        
      </div>
      


      <div className="text-2xl py-10 text-green-600">
        Industry Integration and Normalization
      </div>
      <div id="timeline" className="grid grid-cols-2">
        <div className="lg:border-r-2 gap-y-[10rem]">
        <TimelineBox className="mt-[0rem]" id="Entering Industry" title="Roomba" date="2002"
        description={<></>}></TimelineBox>

        <TimelineBox className="mt-[0rem]" id="Entering Industry" title="DARPA Grand Challenge" date="" 
        description={<></>}></TimelineBox>

        <TimelineBox className="mt-[0rem]" id="Entering Industry" title="ImageNet" date="2012" 
        description={<></>}></TimelineBox>  
        
        </div>

        <div className="lg:border-l-2 gap-y-[10rem]">
        <TimelineBox className="mt-[0rem]" id="Entering Industry" title="Netflix" date="2006" 
        description={<></>}></TimelineBox>

        <TimelineBox className="mt-[0rem]" id="Entering Industry" title="Watson wins Jeopardy" date="2011" 
        description={<></>}></TimelineBox>

        <TimelineBox className="mt-[0rem]" id="Entering Industry" title="Google Photo Recognition" date="1985" 
        description={<></>}></TimelineBox> 

        </div>

        
      </div>
      <div>

      </div>
      
    </div>
  )
}