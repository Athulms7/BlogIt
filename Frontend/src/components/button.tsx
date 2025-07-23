interface button{
  label:string,onclick:()=>void
}
export function Buttons({label,onclick}:button) {
  return (
    <div className=" text-white  text-left"> 
      <button onClick={onclick} className="bg-black rounded-4xl w-65 p-1 hover:bg-gray-800 ">{label}</button>
     
      
    </div>
  );
}