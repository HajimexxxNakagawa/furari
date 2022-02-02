import { DEvent } from "./DEvent";

export type Plan = {
  id: string;
  ownerName: string;
  partnerName: string;
  events: DEvent[];
  emoji: string;
};

export interface PlanProps {
  plan: Plan;
}

export interface PlanListProps {
  plans: Plan[];
}
