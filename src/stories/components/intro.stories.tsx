import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Intro } from 'components';

export default {
  title: 'Component/Intro',
  component: Intro,
} as ComponentMeta<typeof Intro>;

const Template: ComponentStory<typeof Intro> = () => <Intro />;

export const Primary = Template.bind({});
