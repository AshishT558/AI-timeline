import Link from "next/link";
import { ReactNode } from "react"

interface Props {
    className?: string;
    id: string;
    title: string;
    date: string;
    description: ReactNode;
}
export default function TimelineBox({className, id, title, date, description} : Props) {
    return (
        <div className={className}>
            <div className="flex flex-col max-w-[40rem] mx-5 border-[2px] shadow-lg shadow-green-500/50 rounded-lg hover:shadow-green-500/70">
                <div className="flex flex-col text-center lg:flex-row lg:justify-between m-5 lg:text-xl font-bold">
                    <h1 className="pr-10">{title}</h1>
                    <h1 className="text-green-600">{date}</h1>
                </div>
                <div className="m-5 text-left hidden lg:block">
                    <p className="text-pretty">{description}</p>
                </div>
                <Link href={`/pages/research/#${id}`} className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm m-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
                    Read More
                </Link>
            </div>
        </div>
    )
}