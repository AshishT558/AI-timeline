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
                content="Lorem ipsum odor amet, consectetuer adipiscing elit. Etiam duis massa vehicula, conubia turpis maximus feugiat. Laoreet montes vulputate neque; sed velit ut. Hendrerit ad semper sem habitasse vestibulum. Libero integer lectus pulvinar litora posuere in auctor dolor. Ex cubilia turpis nostra ligula phasellus pellentesque sed ridiculus purus. Consequat congue arcu tempus feugiat turpis maximus. Netus ipsum id ridiculus ornare orci cursus augue.

                Vulputate morbi conubia odio magna class ullamcorper ac suspendisse. Eleifend lacinia quisque ultricies quisque morbi curae et accumsan. Sem montes dictumst natoque leo vestibulum; laoreet porttitor. Dui ultricies rhoncus adipiscing nullam ex suscipit pretium senectus. Dui vel tempor vehicula himenaeos mollis, facilisis ligula luctus. Nisl rhoncus ex libero dolor; nibh eu. Etiam venenatis dictum torquent amet nisi dignissim pellentesque non. Nisi sem platea nisl, ligula quisque vivamus.
                
                Luctus aptent at ac lacus mus facilisi pretium. Penatibus quam vitae fringilla accumsan est ultrices dictum quam. Quisque libero nibh ut vestibulum magna nostra consectetur posuere. Malesuada aenean nunc iaculis suspendisse eu neque neque! Taciti morbi mattis magna varius dui quam vivamus felis. Nostra platea commodo non porttitor lacus a dui imperdiet. Quisque torquent efficitur dis turpis fusce duis. Cubilia cras fusce tellus commodo cras ultricies. Nullam nibh aliquam vitae scelerisque elit tempor sollicitudin torquent?"
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
                title="Industry and Integration: 2XXX"
                content="Lorem ipsum odor amet, consectetuer adipiscing elit. Etiam duis massa vehicula, conubia turpis maximus feugiat. Laoreet montes vulputate neque; sed velit ut. Hendrerit ad semper sem habitasse vestibulum. Libero integer lectus pulvinar litora posuere in auctor dolor. Ex cubilia turpis nostra ligula phasellus pellentesque sed ridiculus purus. Consequat congue arcu tempus feugiat turpis maximus. Netus ipsum id ridiculus ornare orci cursus augue.

                Vulputate morbi conubia odio magna class ullamcorper ac suspendisse. Eleifend lacinia quisque ultricies quisque morbi curae et accumsan. Sem montes dictumst natoque leo vestibulum; laoreet porttitor. Dui ultricies rhoncus adipiscing nullam ex suscipit pretium senectus. Dui vel tempor vehicula himenaeos mollis, facilisis ligula luctus. Nisl rhoncus ex libero dolor; nibh eu. Etiam venenatis dictum torquent amet nisi dignissim pellentesque non. Nisi sem platea nisl, ligula quisque vivamus.
                
                Luctus aptent at ac lacus mus facilisi pretium. Penatibus quam vitae fringilla accumsan est ultrices dictum quam. Quisque libero nibh ut vestibulum magna nostra consectetur posuere. Malesuada aenean nunc iaculis suspendisse eu neque neque! Taciti morbi mattis magna varius dui quam vivamus felis. Nostra platea commodo non porttitor lacus a dui imperdiet. Quisque torquent efficitur dis turpis fusce duis. Cubilia cras fusce tellus commodo cras ultricies. Nullam nibh aliquam vitae scelerisque elit tempor sollicitudin torquent?"
                link=""/>

                <ResearchPageBox 
                id="Modern AI"
                title="Modern AI: 2017 - 2024"
                content="Lorem ipsum odor amet, consectetuer adipiscing elit. Etiam duis massa vehicula, conubia turpis maximus feugiat. Laoreet montes vulputate neque; sed velit ut. Hendrerit ad semper sem habitasse vestibulum. Libero integer lectus pulvinar litora posuere in auctor dolor. Ex cubilia turpis nostra ligula phasellus pellentesque sed ridiculus purus. Consequat congue arcu tempus feugiat turpis maximus. Netus ipsum id ridiculus ornare orci cursus augue.

                Vulputate morbi conubia odio magna class ullamcorper ac suspendisse. Eleifend lacinia quisque ultricies quisque morbi curae et accumsan. Sem montes dictumst natoque leo vestibulum; laoreet porttitor. Dui ultricies rhoncus adipiscing nullam ex suscipit pretium senectus. Dui vel tempor vehicula himenaeos mollis, facilisis ligula luctus. Nisl rhoncus ex libero dolor; nibh eu. Etiam venenatis dictum torquent amet nisi dignissim pellentesque non. Nisi sem platea nisl, ligula quisque vivamus.
                
                Luctus aptent at ac lacus mus facilisi pretium. Penatibus quam vitae fringilla accumsan est ultrices dictum quam. Quisque libero nibh ut vestibulum magna nostra consectetur posuere. Malesuada aenean nunc iaculis suspendisse eu neque neque! Taciti morbi mattis magna varius dui quam vivamus felis. Nostra platea commodo non porttitor lacus a dui imperdiet. Quisque torquent efficitur dis turpis fusce duis. Cubilia cras fusce tellus commodo cras ultricies. Nullam nibh aliquam vitae scelerisque elit tempor sollicitudin torquent?"
                link=""/>
            </div>
        </div>
    )
}