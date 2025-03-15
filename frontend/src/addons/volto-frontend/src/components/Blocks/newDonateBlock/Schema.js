import messages from './messages';

const Schema = ({ intl }) => {
  return {
    title: intl.formatMessage(messages.block01),
    block: 'block01',
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: ['url', 'title', 'percent'],
      },
    ],

    properties: {
      url: {
        title: intl.formatMessage(messages.URL),
        widget: 'url',
      },
      title: {
        title: intl.formatMessage(messages.title),
      },
      percent: {
        title: intl.formatMessage(messages.Percentage),
      },
    },
    required: [],
  };
};

export default Schema;