import ResearchPageBox from "@/app/components/ResearchPageBox";
import Link from "next/link";

export default function ResearchPage() {
    return (
        <div className="flex flex-col justify-center items-center">
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
                id="Article1"
                title="Article1"
                content="Lorem ipsum odor amet, consectetuer adipiscing elit. Etiam duis massa vehicula, conubia turpis maximus feugiat. Laoreet montes vulputate neque; sed velit ut. Hendrerit ad semper sem habitasse vestibulum. Libero integer lectus pulvinar litora posuere in auctor dolor. Ex cubilia turpis nostra ligula phasellus pellentesque sed ridiculus purus. Consequat congue arcu tempus feugiat turpis maximus. Netus ipsum id ridiculus ornare orci cursus augue.

                Vulputate morbi conubia odio magna class ullamcorper ac suspendisse. Eleifend lacinia quisque ultricies quisque morbi curae et accumsan. Sem montes dictumst natoque leo vestibulum; laoreet porttitor. Dui ultricies rhoncus adipiscing nullam ex suscipit pretium senectus. Dui vel tempor vehicula himenaeos mollis, facilisis ligula luctus. Nisl rhoncus ex libero dolor; nibh eu. Etiam venenatis dictum torquent amet nisi dignissim pellentesque non. Nisi sem platea nisl, ligula quisque vivamus.
                
                Luctus aptent at ac lacus mus facilisi pretium. Penatibus quam vitae fringilla accumsan est ultrices dictum quam. Quisque libero nibh ut vestibulum magna nostra consectetur posuere. Malesuada aenean nunc iaculis suspendisse eu neque neque! Taciti morbi mattis magna varius dui quam vivamus felis. Nostra platea commodo non porttitor lacus a dui imperdiet. Quisque torquent efficitur dis turpis fusce duis. Cubilia cras fusce tellus commodo cras ultricies. Nullam nibh aliquam vitae scelerisque elit tempor sollicitudin torquent?"
                link=""/>

                <ResearchPageBox 
                id="Article2"
                title="Article2"
                content="Lorem ipsum odor amet, consectetuer adipiscing elit. Etiam duis massa vehicula, conubia turpis maximus feugiat. Laoreet montes vulputate neque; sed velit ut. Hendrerit ad semper sem habitasse vestibulum. Libero integer lectus pulvinar litora posuere in auctor dolor. Ex cubilia turpis nostra ligula phasellus pellentesque sed ridiculus purus. Consequat congue arcu tempus feugiat turpis maximus. Netus ipsum id ridiculus ornare orci cursus augue.

                Vulputate morbi conubia odio magna class ullamcorper ac suspendisse. Eleifend lacinia quisque ultricies quisque morbi curae et accumsan. Sem montes dictumst natoque leo vestibulum; laoreet porttitor. Dui ultricies rhoncus adipiscing nullam ex suscipit pretium senectus. Dui vel tempor vehicula himenaeos mollis, facilisis ligula luctus. Nisl rhoncus ex libero dolor; nibh eu. Etiam venenatis dictum torquent amet nisi dignissim pellentesque non. Nisi sem platea nisl, ligula quisque vivamus.
                
                Luctus aptent at ac lacus mus facilisi pretium. Penatibus quam vitae fringilla accumsan est ultrices dictum quam. Quisque libero nibh ut vestibulum magna nostra consectetur posuere. Malesuada aenean nunc iaculis suspendisse eu neque neque! Taciti morbi mattis magna varius dui quam vivamus felis. Nostra platea commodo non porttitor lacus a dui imperdiet. Quisque torquent efficitur dis turpis fusce duis. Cubilia cras fusce tellus commodo cras ultricies. Nullam nibh aliquam vitae scelerisque elit tempor sollicitudin torquent?"
                link=""/>

                <ResearchPageBox 
                id="Article3"
                title="Article3"
                content="Lorem ipsum odor amet, consectetuer adipiscing elit. Etiam duis massa vehicula, conubia turpis maximus feugiat. Laoreet montes vulputate neque; sed velit ut. Hendrerit ad semper sem habitasse vestibulum. Libero integer lectus pulvinar litora posuere in auctor dolor. Ex cubilia turpis nostra ligula phasellus pellentesque sed ridiculus purus. Consequat congue arcu tempus feugiat turpis maximus. Netus ipsum id ridiculus ornare orci cursus augue.

                Vulputate morbi conubia odio magna class ullamcorper ac suspendisse. Eleifend lacinia quisque ultricies quisque morbi curae et accumsan. Sem montes dictumst natoque leo vestibulum; laoreet porttitor. Dui ultricies rhoncus adipiscing nullam ex suscipit pretium senectus. Dui vel tempor vehicula himenaeos mollis, facilisis ligula luctus. Nisl rhoncus ex libero dolor; nibh eu. Etiam venenatis dictum torquent amet nisi dignissim pellentesque non. Nisi sem platea nisl, ligula quisque vivamus.
                
                Luctus aptent at ac lacus mus facilisi pretium. Penatibus quam vitae fringilla accumsan est ultrices dictum quam. Quisque libero nibh ut vestibulum magna nostra consectetur posuere. Malesuada aenean nunc iaculis suspendisse eu neque neque! Taciti morbi mattis magna varius dui quam vivamus felis. Nostra platea commodo non porttitor lacus a dui imperdiet. Quisque torquent efficitur dis turpis fusce duis. Cubilia cras fusce tellus commodo cras ultricies. Nullam nibh aliquam vitae scelerisque elit tempor sollicitudin torquent?"
                link=""/>
            </div>
        </div>
    )
}