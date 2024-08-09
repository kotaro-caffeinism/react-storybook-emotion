import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { primary, danger, sm, lg } from "./style"

import Button from './Button';

const meta = {
  title: 'Emotion Buttons',
  component: Button,
  parameters: { actions: { argTypesRegex: '^handle[A-Z].*' } },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary',
    color: primary,
  },
};

export const PrimarySmall: Story = {
  args: {
    ...Primary.args,
    size: sm,
  },
};

export const PrimaryLarge: Story = {
  args: {
    ...Primary.args,
    size: lg,
  },
};

export const Danger: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  },
  args: {
    children: 'Danger',
    color: danger,
    handleClick: () => alert("❤️‍🔥"),
  },
};