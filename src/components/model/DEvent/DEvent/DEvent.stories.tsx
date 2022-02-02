import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { mockDEvent } from "@/mocks/DEvent";

import { DEvent } from "./DEvent";

export default {
  title: "Model/DEvent/DEvent",
  component: DEvent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof DEvent>;

const Template: ComponentStory<typeof DEvent> = (args) => <DEvent {...args} />;

export const Default = Template.bind({});
Default.args = {
  event: mockDEvent,
};
