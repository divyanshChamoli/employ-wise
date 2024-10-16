interface Button{
    placeholder: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>)=>void
}

export default function Button({placeholder, onClick}: Button){
    return(
        <button type="button" onClick={onClick} className="text-white bg-black hover:bg-gray-900 font-medium w-full rounded-md text-sm px-5 py-2.5 me-2 mb-2">{placeholder}</button>
    )
}