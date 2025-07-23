type InputBoxProps = {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
};

export function InputBox({ placeholder, onChange, type }: InputBoxProps) {
  return (
    <div className="bg-white p-2 text-sm text-left font-sans font-semibold rounded-b-md ">
     
      <div className="bg-white p-1">
        <input
          type={type}
          onChange={onChange}
          className="h-9 w-65 p-1 hover:bg-gray-100 rounded   border-b-2 border-gray-400 focus:outline-0"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
