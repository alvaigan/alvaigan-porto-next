export const WindowedLine = () => {
  return (
    <div className="absolute w-full h-full flex flex-col justify-end">
      <div className="h-4/6 border-l-4 border-t-4 border-r-4 border-secondary mx-20 rounded-t-[30px]">
        <div className="flex flex-row gap-2 m-4">
          <span className="w-6 h-6 rounded-full border-2 border-secondary"></span>
          <span className="w-6 h-6 rounded-full border-2 border-secondary"></span>
          <span className="w-6 h-6 rounded-full border-2 border-secondary"></span>
        </div>
      </div>
    </div>
  );
};
