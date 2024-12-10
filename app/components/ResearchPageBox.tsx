import { ReactNode } from "react";

interface Props {
    className?: string;
    title: string;
    id: string;
    content: ReactNode;
    link: string
}


export default function ResearchPageBox({className, title, id, content, link}: Props) {
    return (
        <div id={id} className={className}>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl py-10 underline underline-offset-[1rem] decoration-green-500 animate-up-float text-center">{title}</h1>
                <div className="max-w-[20rem] lg:max-w-[40rem] indent-8">{content}</div>
            </div>
        </div>
    )
}