import clsx from "clsx";

export default function Page() {
  return (<div>
    <p>Customers Page</p>
    <div className='relative flex flex-col gap-2'>
      <div className='absolute top-2 left-3 flex items-center'>Search</div>
      <input
        className={clsx(
          ` w-full h-10 outline-0 py-1.5 px-4 text-textDefault text-sm ring-1  focus:ring-mainColor pl-20`,
          
        )}
        placeholder={''}
      />
    </div>
  
  </div>
);
}
