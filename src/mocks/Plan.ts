import { Plan } from "@/types/Plan";

import { mockDEventList } from "./DEvent";

export const mockPlan: Plan = {
  id: "string",
  ownerName: "Hajime",
  partnerName: "Shiho",
  events: mockDEventList,
  emoji: "👫",
};

export const mockPlanList = [mockPlan, mockPlan, mockPlan];
