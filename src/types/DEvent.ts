export type DEvent = {
  id: string;
  emoji: string;
  title: string;
  date: Date;
};

export interface DEventProps {
  event: DEvent;
}

export interface DEventListProps {
  events: DEvent[];
}
