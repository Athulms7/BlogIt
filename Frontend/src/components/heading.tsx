interface heading{
    label:string,
    text:string
}

export function Heading({label,text}:heading){
    return(<div className="flex-row justify-center font-bold w-90 text-black bg-white   text-2xl p-1">
        <div className="text-left p-3">{label}
            <p className="text-sm text-left w-90 text-gray-600 ">{text}</p>
        </div>
        
    </div>)
}