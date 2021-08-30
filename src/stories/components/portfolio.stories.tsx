import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Portfolio } from 'components';

export default {
  title: 'Component/Portfolio',
  component: Portfolio,
} as ComponentMeta<typeof Portfolio>;

const Template: ComponentStory<typeof Portfolio> = () => <Portfolio />;

export const Primary = Template.bind({});
