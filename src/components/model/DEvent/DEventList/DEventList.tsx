import { VFC } from "react";

import { DEventListProps } from "@/types/DEvent";

import { Spacer } from "@/components/ui/Spacer";

import { DEvent } from "../DEvent";

export const DEventList: VFC<DEventListProps> = ({ events }) => {
  return (
    <div>
      {events.map((event) => (
        <>
          <DEvent event={event} key={event.id} />
          <Spacer size={12} />
        </>
      ))}
    </div>
  );
};
