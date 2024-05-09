import clsx from 'clsx';

export default function Page() {
  return (
    <div>
      <p>Customers Page</p>
      <div className="relative flex flex-col gap-2">
        <div className="absolute left-3 top-2 flex items-center">Search</div>
        <input
          className={clsx(
            ` text-textDefault focus:ring-mainColor h-10 w-full px-4 py-1.5 pl-20 text-sm  outline-0 ring-1`,
          )}
          placeholder={''}
        />
      </div>
    </div>
  );
}
