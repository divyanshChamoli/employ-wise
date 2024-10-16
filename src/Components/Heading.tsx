interface HeadingProps{
    label: string
}

export default function Heading({label}: HeadingProps){
    return (
        <div className=" font-bold text-4xl self-center ">
            {label}
        </div>
    )
}