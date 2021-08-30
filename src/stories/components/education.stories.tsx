import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Education } from 'components';

export default {
  title: 'Component/Education',
  component: Education,
} as ComponentMeta<typeof Education>;

const Template: ComponentStory<typeof Education> = () => <Education />;

export const Primary = Template.bind({});
