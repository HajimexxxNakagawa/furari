import { DEvent } from "@/types/DEvent";

export const mockDEvent: DEvent = {
  id: "Hajime",
  emoji: "😘",
  title: "駅で待ち合わせ",
  date: new Date(628021800000),
};

export const mockDEventList = [mockDEvent, mockDEvent, mockDEvent];
