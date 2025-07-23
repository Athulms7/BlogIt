interface on{
    title:string,
    onchange:(e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder:string
}
export function Bloginput({onchange,title,placeholder}:on) {
  return (
    <>
      <div className="css-13mmsjs">
        <label className="flex flex-col opacity-100"></label>
        <div className="flex items-center justify-between">
          <section className="flex items-center gap-[6px]">
            <span className="text-slate-700 dark:text-slate-200 text-base font-semibold">
              {title}
            </span>
          </section>
        </div>
      </div>
      <div className="css-p2oy12">
        <div className="flex items-center overflow-hidden gap-2 w-full focus-within:border-transparent focus-within:dark:border-transparent rounded-[32px] px-4 py-3 group hover:bg-slate-50 dark:hover:bg-slate-900 ring-1 ring-slate-300 dark:ring-slate-700 focus-within:ring-[1.5px] focus-within:ring-blue-600 focus-within:dark:ring-blue-500">
          <input
            aria-invalid="false"
            className="w-full text-slate-600 dark:text-slate-300 group-hover:bg-slate-50 dark:group-hover:bg-slate-900 placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-950 focus:outline-none"
            placeholder={placeholder}
            autoComplete="off"
            id="name"
            type="text"
            name="name"
            onChange={onchange}
          ></input>
        </div>
      </div>
    </>
  );
}
