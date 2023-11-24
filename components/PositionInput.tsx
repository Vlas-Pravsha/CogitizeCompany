import React from "react";

const PositionInput = ({ setName, name }: any) => {
  return (
    <div className="bg-dark-400 flex flex-col items-stretch px-4 py-6 rounded-lg max-md:max-w-full">
      <div className="text-grey-100 text-xs font-semibold  max-md:max-w-full">
        Название
      </div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Новобранец"
        className="text-neutral-100 text-sm font-semibold  border-[color:var(--white-8,rgba(245,245,245,0.08))] bg-dark-400 mt-1 px-4 py-5 rounded-lg border-2 border-solid max-md:max-w-full"
      />
    </div>
  );
};

export default PositionInput;
