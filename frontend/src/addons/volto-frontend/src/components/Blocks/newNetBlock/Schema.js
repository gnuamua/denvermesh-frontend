import messages from './messages';

const Schema = ({ intl }) => {
  return {
    title: intl.formatMessage(messages.block02),
    block: 'block02',
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: ['title', 'label1', 'label2', 'number'],
      },
    ],

    properties: {
      title: {
        title: intl.formatMessage(messages.title),
      },
      label1: {
        title: intl.formatMessage(messages.label1),
      },
      label2: {
        title: intl.formatMessage(messages.label2),
      },
      number: {
        title: intl.formatMessage(messages.number),
      },
    },
    required: [],
  };
};

export default Schema;