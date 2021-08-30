import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Skills } from 'components';

export default {
  title: 'Component/Skills',
  component: Skills,
} as ComponentMeta<typeof Skills>;

const Template: ComponentStory<typeof Skills> = () => <Skills />;

export const Primary = Template.bind({});
