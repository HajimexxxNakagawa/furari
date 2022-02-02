import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { mockDEventList } from "@/mocks/DEvent";

import { DEventList } from "./DEventList";

export default {
  title: "Model/DEvent/DEventList",
  component: DEventList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof DEventList>;

// ListProp ver
const Template: ComponentStory<typeof DEventList> = (args) => (
  <DEventList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  events: mockDEventList,
};
