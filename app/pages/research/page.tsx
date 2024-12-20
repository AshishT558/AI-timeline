import ResearchPageBox from "@/app/components/ResearchPageBox";
import Link from "next/link";

export default function ResearchPage() {
    return (
        <div className="flex flex-col justify-center items-center mx-5">
            <div className="pt-[10rem]">
                <h1 className="text-5xl animate-up-float">
                    Research and Further Analysis
                </h1>
            </div>
            <Link href="/#timeline" className="fixed bottom-10 right-20 hover:scale-105 text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
            Timeline
            </Link>

            
            <div className="pt-[10rem] flex flex-col justify-center items-center gap-y-[5rem]">
                <ResearchPageBox 
                id="Early Computing"
                title="Early Computing"
                content={<>In 1901, divers from the Greek navy discovered the wreck of a Roman cargo ship off the coast of Antikythera, a small island in the Aegean Sea. While investigating the wreck, archaeologist Valerios Staist found that one lump of rock contained a gear, but this finding was dismissed by his peers as impossible. Decades later, Yale professor Derek John de Solla Price learned of the object, and began deeper investigations. Through painstaking efforts, Price restored the artifact and demonstrated that it was an analog computer, used to calculate astronomical positions. Dated to approximately 100 BC, it's the first known device of its kind. Europe and the rest of the world would not see comparably complex computers for over a millennium.

                <br></br><br></br>In the 1820s, the English inventor Charles Babbage worked on the Difference Engine, a machine capable of computing polynomial equations. While the project was never completed, Babbage began working on its successor, the Analytical Engine, in 1837. This is widely considered the first computer, and, though it was never built, its structure influenced the design of future electronic computers. While working with Babbage on this project, the mathematician Ada Lovelace wrote about its capability to do more than simple calculations. In 1843, she published a set of notes for the engine, believed to be the first computer program. However, hardware and circuitry limitations prevented construction of programmable computers for almost another century.
                <br></br><br></br>By the Second World War, the field of electronics was capable of building these once-theoretical machines. Both Allies and Axis invested heavily in construction of massive computers, which filled entire rooms yet were millions of times less powerful than the laptop you're reading these words on. Most famously, Alan Turing and a team of British codebreakers cracked the German Enigma code using a variety of computers at Bletchley Park. The first truly modern computer, ENIAC, was finished in 1945 as the war ended, and was used to calculate artillery firing angles. As will become a theme, military investment drove the field's greatest innovations and periods of progress.</>}
                link=""/>

                <ResearchPageBox 
                id="AI Groundwork"
                title="Groundwork and Pushing Limits: 1950s - 1980s"
                content={<div>
                    <div id="early-advancements"></div>
                    <h1 className="text-xl py-10 underline underline-offset-[1rem] decoration-green-500 animate-up-float text-left">Early Advancements</h1>
                    <div className="indent-8">
                    The 1950s to the 1980s was an era for AI focused on learning and building on new ideas. This era laid the groundwork for modern AI while pushing the boundaries of computation. Throughout this period, researchers and engineers were very optimistic about what they thought AI would be able to do, a parallel to our current enthusiasm for AI development. At this point, however, it highlighted the start to normalization of deviance within the field, as ambitious goals led to a mismatch between reality and aspirations.
                    <br></br><br></br>The normalization of deviance started with the AI community's ambitious early projections. Researchers, encouraged by ideas proposed in publications such as Alan Turing's 1950 paper "Computing Machinery and Intelligence" and the “Turing Test”, were inspired to build intelligence that could compete with human cognition. This optimism grew following the 1956 Dartmouth Summer Research Project on Artificial Intelligence, considered the birthplace of AI. Attendees like Marvin Minsky, John McCarthy, and Claude Shannon outlined goals that involved solving complex problems through computational logic, an early indicator of the progress-oriented nature the field would adopt. 
                    <br></br><br></br>Engineers such as Arthur Samuel demonstrated real progress. Samuel’s development of a checkers-playing program for IBM in the 1950s introduced innovations like pruning search trees and enabling the program to "learn" by playing itself repeatedly. As early applications of machine learning, these successes made it look like AI could quickly overcome human-like challenges. However, researchers often underestimated the algorithmic complexities involved in replicating human cognition. Limited hardware capabilities led to a disconnect between what was promised and reality.
                    <br></br><br></br>During this era, significant theoretical contributions, such as Warren McCulloch and Walter Pitts' work on artificial neurons, influenced the creation of early neural networks, like Minsky’s SNARC. While promising, these early networks again struggled with practical limitations, such as insufficient computing power and training data. The challenges did little to hinder enthusiastic researchers, many of whom continued to believe that true AI breakthroughs were imminent. The normalization of deviance emerged as the field increasingly accepted the mismatch between its aspirations and actual outcomes, often leading to cycles of hype followed by disappointment.

                    </div>

                    <div id="early-deviance"></div>
                    <h1 className="text-xl py-10 underline underline-offset-[1rem] decoration-green-500 animate-up-float text-left">Early Deviance</h1>
                    <div className="indent-8">
                    Deviation from standard computing grew alongside the advancements in the field. Researchers had become so focused on their vision of AI as a new technology that they overlooked concerns such as human-computer interaction. An example of this was the response to Joseph Weizenbaum’s ELIZA, a simple chatbot that had conversations with people by using pattern matching and substitution rules. Designed to mimic a psychotherapist, ELIZA’s DOCTOR script led users to form emotional connections with the program, and they saw it as a real person. This shocked Weizenbaum, who expected people to understand that they were engaging with a machine. Instead, many users felt meaning in their interactions, treating ELIZA as a real conversation partner. This response displayed that people were willing to project human qualities onto the machine, raising ethical questions about the potential for AI to manipulate users. ELIZA revealed the dangers of overestimating AI’s capabilities, and highlighted the need for researchers to consider the psychological impact of their work.
                    <br></br><br></br>By the 1970s, the shortcomings of early AI were more evident, particularly with predictions by scholars like H.A. Simon and Minsky. These expectations had been built on an idealized view of AI’s rapid progress, which failed to account for the limitations of the technology at the time. As research in AI continued, it became clear that tasks requiring human intelligence and natural language understanding were far more complex than anticipated. This disconnect between the promises made by researchers and the actual functioning of the machines began to expose deeper issues within the field. One of the most important moments came with the release of James Lighthill’s 1973 report, which attacked AI’s development, particularly its inability to perform at the level of general human intelligence. Lighthill’s findings emphasized the gaps between theory and practice, highlighting that despite impressive breakthroughs in narrow problem-solving tasks, AI still lacked the ability to tackle the complexity of real-world issues.
                    </div>
                    </div>
                    }
                link=""/>

                <ResearchPageBox 
                id="AI Winter"
                title="The AI Winters: 1980s - 2000s"
                content={<>
                AI research had become a field of optimistic claims about the potential of intelligent systems and reasoning machines. Projects like expert systems, including the medical diagnostic tool MYCIN, seemed to meet these promises of encoding human knowledge into computational frameworks. However, these systems often relied on domain-specific rule sets that struggled to generalize to unseen data and situations. Researchers and funders, driven by competitive pressures like Japan’s Fifth Generation Computer System initiative or the U.S.'s mirrored funding wave, often accepted overblown expectations about the timeline of AI achievements. This misalignment between aspiration and reality highlighted the normalization of deviance: stakeholders treated the shortcomings of these systems as solvable, despite the lack of tech foundations to support these ideas.
                <br></br><br></br>The result was the start of AI winters - periods of reduced funding and interest after expectations failed to materialize. In the 1970s and 1980s, these periods were seen in the plateauing of expert systems and the failure of large-scale projects like the Fifth Generation initiative to deliver on their claimed goals. This pattern can be seen as a direct consequence of the normalization of deviance - researchers and policymakers became lax in accepting unrealistic benchmarks, treating AI failures as outliers rather than structural problems. 
                <br></br><br></br>Normalization of deviance also extended into technical assumptions. Innovative systems like Deep Blue and Eurisko displayed how reliance on brute force computation or defined sets of rules could yield success without addressing the broader challenges of general intelligence. When these approaches failed to generalize to more complex domains, such as natural language understanding or the expansive search trees in Go, confidence in AI suffered.
                <br></br><br></br>AI winters were a result of overreaching engineers and stakeholders. Like other industries affected by the normalization of deviance, the eventual course correction in AI required a fundamental rethinking of its methodologies. The introduction of neural networks and backpropagation in the 1980s and 1990s marked a change in the field. The work of figures like David Rumelhart and Geoffrey Hinton was crucial in resetting expectations and establishing a foundation for AI's modern presence, avoiding the problems caused by earlier deviations.
                </>}
                link=""/>

                <ResearchPageBox 
                id="Entering Industry"
                title="Industry and Integration: 2000 - 2010s"
                content={<>As AI transitioned from academic research into industry applications, its development was marked by both breakthroughs and systemic oversights. Normalization of deviance repeatedly emerged in AI’s integration into consumer products and services, shaping its present role in industry and market.
                    <br></br><br></br>The Roomba was one of the earliest successes in consumer AI. It came out in 2002, marking a turning point for AI integration into everyday life. Though built on basic principles, its usage became so normalized that the fact it was an AI application was forgotten by the public. This displays a broader trend within AI’s successes in the market, especially in recommendation systems from the 2006 Netflix Prize challenge. The challenge highlighted early normalization of risks - despite anonymizing its dataset, privacy concerns emerged as users were still identifiable. This oversight highlights how AI innovations often pushed boundaries while neglecting risks, normalizing trade-offs that would end up having consequences further down the line.
                    <br></br><br></br>The DARPA Grand Challenge (2004–2007) and IBM Watson's 2011 Jeopardy! victory further displayed AI’s potential. The Grand Challenge began autonomous vehicle advancements that laid the groundwork for today’s self-driving technologies. Watson provided a look into AI’s power in natural language understanding and strategy. Despite the advancements, these achievements sometimes covered up the normalization of underlying limitations, such as a reliance on narrowly defined problem spaces that could not readily generalize to broader real-world scenarios - a problem very similar to other eras of AI.
                    <br></br><br></br>The 2012 success of AlexNet in the ImageNet challenge marked a shift toward deep learning. This breakthrough accelerated rapid AI adoption but also locked in problematic norms. For example, the labor practices behind the ImageNet database and low-wage work on Amazon Mechanical Turk normalized the undervaluation of human labor in AI systems. Additionally, AI system deployment often became prioritized over ethical considerations, as seen in Google's 2015 photo recognition failure, where the system misclassified images of Black individuals. Such incidents reflected deeper biases embedded within datasets and algorithms, which was seen again with the 2016 ProPublica investigation into COMPAS, a prediction tool that displayed racial bias.
                    <br></br><br></br>Larger failures, such as Microsoft’s Tay in 2016, further displayed the risks of overlooking potential deviance. Tay was an AI Twitter-chatbot, and quickly turned offensive due to its vulnerability to online manipulation. It was shut down after 16 hours. This and other concerns, like AlphaGo’s success overshadowing concepts about AI’s self-teaching autonomy, prompted the industry to begin addressing its normalized deviation from risk management. Initiatives like Google’s Responsible AI team (2018) marked an acknowledgment of the need for proactive governance, especially for data privacy and bias.
                    <br></br><br></br>Through these milestones, the era of AI entering industry illustrates the balance between innovation and responsibility. Normalizing dangerous system deployment to prioritize products over people left unresolved issues that continue to challenge the field. 
                    </>}
                link=""/>

                <ResearchPageBox 
                id="Modern AI"
                title="Modern AI: 2017 - 2024"
                content={<>
                The era of modern AI has been defined by widespread integration of AI into multiple fields. The pattern of development and prioritization of development over all else is evident in the impact of technologies such as transformers and large language models.
                <br></br><br></br>The introduction of the transformer architecture in the 2017 paper Attention is All You Need marked a large shift in natural language processing (NLP). By enabling self-attention mechanisms, transformers completely changed the AI field, and made prior methods nearly useless as new models like GPT were built. While this innovation demonstrated AI’s new potential, its adoption also normalized certain vulnerabilities. The extremely large scale of transformer-based models raises concerns about their reliance on massive datasets, often gathered without explicit consent, and the potential for bias within those datasets. This normalization of questionable data highlights a repeating conflict between innovation and accountability in AI development.
                <br></br><br></br>In 2018, an Uber self-driving car in Arizona struck and killed Elaine Herzberg. This was a reminder of the dangers in accepting suboptimal safety standards in the race to deploy autonomous vehicles. Despite the presence of a human driver, a lack of oversight and insufficient safeguards failed to prevent the first pedestrian fatality involving such technology. This incident ties back to a trend in AI discovered in previous time periods: the normalization of deviance in prioritizing rapid testing and market readiness over comprehensive risk mitigation. The deaths that followed these events involving autonomous vehicles emphasize the ongoing need to address these failures.
                <br></br><br></br>Meanwhile, AlphaFold, developed by Google DeepMind, represents one of AI’s most celebrated scientific contributions. By using deep learning and a transformer-like architecture, AlphaFold revolutionized protein structure prediction, earning developers Demis Hassabis and John Jumper the 2024 Nobel Prize in Chemistry. 
                <br></br><br></br>OpenAI’s ChatGPT brought AI directly into the hands of millions, and began the introduction of large language models in everyday life. Despite this, its widespread use also exposes challenges within AI-human interaction. The model’s potential for misinformation and bias revealed how deviant practices - such as insufficiently addressing ethical concerns or over-reliance on public testing in earlier stages of development - had become normalized in AI deployment. While ChatGPT has started conversations about responsible AI, its success also reflects the trade-offs the industry has often accepted in prioritizing rapid innovation over safeguards.
                <br></br><br></br>Modern AI has achieved a new level of engineering, reshaping industries and solving complex problems. However, the normalization of deviance in its development highlights the need for a more balanced approach. As the field continues to evolve, addressing these shortcomings will be essential to ensuring AI is utilized responsibly and ethically.
                </>}
                link=""/>

                <ResearchPageBox
                className="pb-10"
                id="lookingforward"
                title="Looking Forward"
                content={<>
                The future of AI, particularly the pursuit of Artificial General Intelligence (AGI), is shaped by the history of normalization of deviance in the field. As AI moves closer to potentially reaching AGI, there is a risk that the same patterns of overlooking ethical concerns, biases, and safety issues that have emerged throughout AI’s evolution will continue. In the race to create more advanced, powerful systems, it is possible that developers may prioritize speed and performance over ethical foundations, much as they have in the past. For instance, the rapid growth of large-scale models like GPT and AlphaFold often ignores the problems they have caused. As AI integrates further and further into our lives, it is possible we forget the identity of these systems. Similar to earlier AI systems that people forgot were indeed AI systems, we in the present will normalize the deviation from human-based systems. As we approach AGI, this normalization of AI in our lives holds the potential to inflict great harm, from deepened inequalities to other unforeseen impacts on human society. To avoid repeating past mistakes, future AI development will need to integrate oversight, transparency, and governance, ensuring that the pursuit of AGI is done with caution and responsibility.</>}
                link=""/>

                <div className="flex flex-col gap-y-2 text-center text-green-600 pb-10 mt-[5rem]">
                    <h1 className="text-2xl text-black">Sources</h1>
                    <a href="https://ai100.stanford.edu/gathering-strength-gathering-storms-one-hundred-year-study-artificial-intelligence-ai100-2021-1/sq2">
                        One Hundred Year Study on Artificial Intelligence &#8599;
                    </a>

                    <a href="https://en.wikipedia.org/wiki/History_of_natural_language_processing">
                        History of Natural Language Processing &#8599;
                    </a>

                    <a href="https://en.wikipedia.org/wiki/History_of_natural_language_processing">
                        History of Natural Language Processing &#8599;
                    </a>

                    <a href="https://medium.com/@ambika199820/what-is-computer-vision-history-applications-challenges-13f5759b48a5">
                        What is Computer Vision? History, Applications, Challenges &#8599;
                    </a>

                    <a href="https://www.computerhistory.org/timeline/ai-robotics/">
                        AI & Robotics Timeline &#8599;
                    </a>
                    
                    <a href="https://pubmed.ncbi.nlm.nih.gov/32565184/">
                        History of Artificial Intelligence &#8599;
                    </a>

                    <a href="https://arxiv.org/pdf/1610.07997">
                        Artificial Intelligence Safety and Cybersecurity &#8599;
                    </a>
                </div>
            </div>
        </div>
    )
}