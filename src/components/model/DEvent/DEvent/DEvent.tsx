import { VFC } from "react";

import { DEventProps } from "@/types/DEvent";

import { Spacer } from "@/components/ui/Spacer";

export const DEvent: VFC<DEventProps> = ({ event }) => {
  const { emoji, title, date } = event;
  const time = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className="flex justify-between w-full max-w-md h-36 rounded-xl border-2">
      <div className="flex justify-center items-center w-36 h-full bg-red-200 rounded-l-xl">
        <span className="text-6xl">{emoji}</span>
      </div>
      <div
        className="flex flex-col justify-center p-4"
        style={{ width: `calc(100% - 9rem)` }}
      >
        <p className="font-bold">{time}</p>
        <p className="text-xl md:text-3xl">{title}</p>
        <Spacer size={12} />
      </div>
    </div>
  );
};
