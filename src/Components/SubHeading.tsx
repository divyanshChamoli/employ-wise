interface SubHeading{
    label: string
}

export default function SubHeading({label}: SubHeading){
    return(
        <div className=" text-neutral-500 font-semibold text-center">
            {label}
        </div>
    )
}