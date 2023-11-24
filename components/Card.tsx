import { paymentType } from "@/constants/positions";
import React from "react";

interface CardProps {
  item: {
    title: string;
    price: number;
    paymentType: paymentType;
    description: string;
    id: string;
  };
  deleteCard: (id: string) => void;
  isActive: boolean;
  onClick?: () => void;
}
const Card = ({
  deleteCard,
  isActive,
  onClick,
  item: { title, price, paymentType, description, id },
}: CardProps) => {
  return (
    <div
      className={` bg-dark-200 flex items-center justify-between gap-4 px-4 pt-[22px] pb-[18px] rounded-lg  ${
        isActive ? "border-[#6764F1] border-2 border-solid" : ""
      }`}
      onClick={onClick}
      key={title}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        className="aspect-[0.6] object-contain object-center w-3 overflow-hidden shrink-0 max-w-full my-auto"
      >
        <circle cx="2" cy="2" r="2" fill="#F5F5F5" fillOpacity="0.08" />
        <circle cx="2" cy="10" r="2" fill="#F5F5F5" fillOpacity="0.08" />
        <circle cx="2" cy="18" r="2" fill="#F5F5F5" fillOpacity="0.08" />
        <circle cx="10" cy="2" r="2" fill="#F5F5F5" fillOpacity="0.08" />
        <circle cx="10" cy="10" r="2" fill="#F5F5F5" fillOpacity="0.08" />
        <circle cx="10" cy="18" r="2" fill="#F5F5F5" fillOpacity="0.08" />
      </svg>
      <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
        <div className="flex items-stretch justify-between gap-5">
          <div className="text-neutral-100 text-sm font-semibold leading-5">
            {title}
          </div>
          <div className="text-zinc-500 text-right text-xs font-bold leading-4 whitespace-nowrap">
            <span className="font-bold text-amber-400">{price}</span>
            <span className="font-medium text-zinc-500"> / {paymentType}</span>
          </div>
        </div>
        <div className="text-zinc-500 text-xs font-semibold flex justify-between">
          <span>{description}</span>
          <button
            className="bg-dark-200 rounded-lg px-2 text-xs text-white border-2 border-white/[.08]"
            onClick={() => deleteCard(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
