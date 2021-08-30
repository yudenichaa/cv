import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Experience } from 'components';

export default {
  title: 'Component/Experience',
  component: Experience,
} as ComponentMeta<typeof Experience>;

const Template: ComponentStory<typeof Experience> = () => <Experience />;

export const Primary = Template.bind({});
