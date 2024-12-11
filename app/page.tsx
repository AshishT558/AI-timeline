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
        description={<>- Roombas first hit the market in September 2002, paving the way for one of the first successful applications of artificial intelligence to consumer products and everyday life.
          <br></br> <br></br>- You likely don't think of these little robots as applications of artificial intelligence, but they were first developed at the MIT Computer Science and Artificial Intelligence Lab, and use basic AI techniques to navigate and perform their cleaning duties.
          <br></br> <br></br>- American AI researcher Larry Tesler, who invented copy-paste, quipped in 1979 that 'AI is whatever hasn't been done yet.' Roomba and other successes of AI have become so ubiquitous that we no longer associate them with the field of AI.
          </>}></TimelineBox>

        <TimelineBox className="mt-[8rem]" id="Entering Industry" title="DARPA Grand Challenge" date="2004 - 07" 
        description={<>- The first three iterations of the DARPA Grand Challenge, an autonomous vehicle competition funded by the DoD, took place from 2004-2007.
          <br></br> <br></br>- While no team completed the inaugural course in 2004, teams from Stanford and Carnegie Mellon fought for the top spots in the 2005 and 2007 editions.
          <br></br> <br></br>- The contests spurred early advances in autonomous vehicles that would be used both by the military and in industry.
          </>}></TimelineBox>

        <TimelineBox className="mt-[5rem]" id="Entering Industry" title="ImageNet" date="2008 - 10" 
        description={<>- From 2008 to 2010, then-Princeton professor Fei-Fei Li assembled the ImageNet database, using Amazon's Mechanical Turk to provide labels to tens of millions of images.
        <br></br> <br></br>- Mechanical Turk has been wrought with controversy over its labor practices; even US workers make about $5.50 an hour on average.
        <br></br> <br></br>- After completion, Li published this dataset to launch an image classification challenge, where models had to classify objects into one of 1000 categories.
        </>}></TimelineBox>  

        <TimelineBox className="mt-[50rem]" id="Entering Industry" title="Google Photo Recognition" date="2015" 
        description={<>- In 2015, Google's Photos app automatically classified pictures of black people as gorillas in their own photo albums.
        <br></br> <br></br>- Image recognition software from other companies have failed in similar ways, with Flickr classifying both black and white people as animals and apes the previous year.
        </>}></TimelineBox> 

        <TimelineBox className="mt-[5rem]" id="Entering Industry" title="AlphaGo" date="2016" 
        description={<>- In 2016, Google subsidiary DeepMind cracked the game of Go, one of the last bastions of human superiority since Kasparov's loss to Deep Blue almost two decades prior.
        <br></br> <br></br>- Using previously described deep learning approaches, DeepMind's program AlphaGo crushed Go champion and one of the world's top players Lee Sedol 4-1 in a match.
        <br></br> <br></br>- A successor, AlphaGo Zero, abandoned human-taught theory and completely taught itself the game, eventually crushing the version that beat Sedol 100-0. This approach would also be used to destroy the strongest chess and shogi computers.
        </>}></TimelineBox> 
        
        </div>

        <div className="lg:border-l-2 gap-y-[10rem]">
        <TimelineBox className="mt-[40rem]" id="Entering Industry" title="Netflix" date="2006" 
        description={<>- In 2006, Netflix provided a large anonymized user dataset for a $1 million contest to beat their in-house recommendation algorithm by 10% or more.
          <br></br> <br></br>- The contest pushed drastic advances in the field of collaborative filtering (the type of recommendation algorithm Netflix uses.) After three years, a team including AT&T Research scientists won the grand prize with an innovative approach.
          <br></br> <br></br>- While the data was anonymized, users were still identifiable, and similar privacy concerns forced Netflix to shut down a sequel in 2010.
          <br></br> <br></br>- We may not think of Netflix or Spotify as artificial intelligence companies, but their recommendation algorithms are driven by cutting-edge AI techniques.
          </>}></TimelineBox>

        <TimelineBox className="mt-[10rem]" id="Entering Industry" title="Watson wins Jeopardy" date="2011" 
        description={<>- IBM's research wing claimed another famous victory of artificial intelligence when their supercomputer Watson defeated Jeopardy! champions Brad Rutter and Ken Jennings, both among the show's most successful players.
        <br></br> <br></br>- Backed not only by its language processing ability and deep knowledge database, but also a complex wagering algorithm, Watson claimed the $1 million prize in front of 34 million Americans. 
        </>}></TimelineBox>

        <TimelineBox className="mt-[5rem]" id="Entering Industry" title="AlexNet" date="2012" 
        description={<>- The ImageNet challenge was won in 2012 by a University of Toronto team composed of PhD student Alex Krizhevsky, his advisor Geoffrey Hinton, and Ilya Sutskever, another Hinton PhD student who would go on to cofound OpenAI.
          <br></br> <br></br>- Their method used a deep learning approach with a 60-million parameter, 650,000 neuron convolutional network.
          <br></br> <br></br>- Training such a vast network was possible using GPUs, and it subsequently outpaced the competition by miles.
          <br></br> <br></br>- Krizhevsky's model inspired extensive research into deep learning, which has become the dominant AI approach to this day.
          </>}></TimelineBox> 

          <TimelineBox className="mt-[25rem]" id="Entering Industry" title="COMPAS" date="2016" 
        description={<>- A 2016 ProPublica investigation found evidence of racial bias in COMPAS, a criminal recidivism tool.
          <br></br> <br></br>- Developed by Northpointe (now Equivant), this proprietary software was used in NY, Wisconsin, and California to suggest sentences to judges. 
          <br></br> <br></br>- Researchers found discrepancies between risk ratings for black defendants compared to white defendants who had committed similar crimes, and furthermore showed that the algorithm was less accurate than human experts.
          </>}></TimelineBox> 

          <TimelineBox className="mt-[5rem]" id="Entering Industry" title="Microsoft TAY" date="2016" 
        description={<>- Microsoft launched Tay, an AI Twitter bot, on March 23, 2016. Tay's design followed from Microsoft's work on Xiaoice, which has covered over 660 million users and 900 million content viewers in China, Japan, the USA, and Indonesia.
        <br></br> <br></br>- Despite the great success of Xiaoice, Tay began posting offensive tweets almost immediately, and was shut down after 16 hours.
        </>}></TimelineBox> 

        </div>

        
      </div>



      <div className="text-2xl py-10 text-green-600">
        Modern AI
      </div>
      <div id="timeline" className="grid grid-cols-2">
        <div className="lg:border-r-2 gap-y-[10rem]">
        <TimelineBox className="mt-[0rem]" id="Modern AI" title="Transformers" date="2017"
        description={<>- The 2017 paper 'Attention is All You Need' introduced the transformer architecture, powered by the innovative self-attention mechanism.
        <br></br> <br></br>- The paper has been cited over 144,000 times as of my writing this, and revolutionized the field of natural language processing overnight. Transformer-based models made nearly all existing work in the field obsolete, laying the foundation for LLMs like GPT.
        </>}></TimelineBox>

        <TimelineBox className="mt-[10rem]" id="Modern AI" title="AlphaFold" date="2018 - 20" 
        description={<>- AlphaFold was developed by Google DeepMind to predict protein structures, using deep learning and a modified attention network resembling the previously described transformer architecture.
          <br></br> <br></br>- In 2018, the program won the CASP protein structure prediction contest, and trounced all competitors with an upgraded version at the next contest in 2020.
          <br></br> <br></br>- AlphaFold developers Demis Hassabis and John Jumper won the 2024 Nobel Prize in Chemistry.
          <br></br> <br></br>- The program has been described as revolutionary, especially for understanding diseases and engineering treatments.
          </>}></TimelineBox>

        
        </div>

        <div className="lg:border-l-2 gap-y-[10rem]">
        <TimelineBox className="mt-[20rem]" id="Modern AI" title="Uber Incident" date="2018" 
        description={<>- On March 18, 2018, Elaine Herzberg was struck and killed by an Uber self-driving car test in Tempe, Arizona. She was the first pedestrian to be killed by an autonomous vehicle.
          <br></br> <br></br>- Despite the presence of a driver in the car, the working conditions and low visibility of the night may have made it difficult for them to intervene.
          <br></br> <br></br>- While Herzberg was the first pedestrian killed by an autonomous vehicle, many others have died behind the wheel of self-driving cars both before and since her death.
          </>}></TimelineBox>

        <TimelineBox className="mt-[20rem]" id="Modern AI" title="ChatGPT" date="2022" 
        description={<>- OpenAI’s ChatGPT represents a major milestone in AI history as one of the most advanced large language models, demonstrating abilities in natural language understanding and generation, including complex, context-aware, and human-like interactions.
          <br></br> <br></br>- Unlike earlier limited-access AI systems , ChatGPT has brought conversational AI to millions of users globally. The widespread use of ChatGPT has started critical discussions on AI ethics, misinformation, and safety, influencing the development of policies and frameworks to guide the responsible design, deployment, and governance of AI technologies.
          </>}></TimelineBox>

        </div>

        
      </div>
      <div>

      </div>
      
    </div>
  )
}