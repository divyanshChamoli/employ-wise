interface InputBox{
    label: string,
    placeholder: string,
    value:string
    type?: string
    onChange(e:React.ChangeEvent<HTMLInputElement>):void
}

export default function InputBox({label,placeholder,type= "text" ,value, onChange}: InputBox ){
    return(
        <div>
            <div className=" text-left text-sm font-bold ">{label}</div>
            <input className=" border border-gray-400 w-full p-1 my-2 rounded-sm " type={type} placeholder={placeholder} 
             value={value} onChange={onChange}/>
        </div>
    )
}