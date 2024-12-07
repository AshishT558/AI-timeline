
interface Props {
    className?: string;
    title: string;
    id: string;
    content: string;
    link: string
}


export default function ResearchPageBox({className, title, id, content, link}: Props) {
    return (
        <div id={id} className={className}>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl py-10">{title}</h1>
                <p className="w-[40rem]">{content}</p>
            </div>
        </div>
    )
}