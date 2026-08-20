import SectionHeading from './SectionHeading.vue';

export default {
  title: 'Shared/SectionHeading',
  component: SectionHeading,
  tags: ['autodocs'],
};

export const Default = {
  render: (args) => ({
    components: { SectionHeading },
    setup() {
      return { args };
    },
    template: '<SectionHeading>{{ args.title }}</SectionHeading>',
  }),
  args: {
    title: 'Почему стоит принять участие?',
  },
};

export const MapTitle = {
  render: () => ({
    components: { SectionHeading },
    template: '<SectionHeading>Как нас найти</SectionHeading>',
  }),
};
