import messages from './messages';

const Schema = ({ intl }) => {
  return {
    title: intl.formatMessage(messages.block01),
    block: 'block01',
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: ['date', 'title', 'time', 'where', 'rsvp' ],
      },
    ],

    properties: {
      date: {
        title: intl.formatMessage(messages.date),
      },
      title: {
        title: intl.formatMessage(messages.title),
      },
      time: {
        title: intl.formatMessage(messages.time),
      },
      where: {
        title: intl.formatMessage(messages.where),
      },
      rsvp: {
        title: intl.formatMessage(messages.rsvp),
      }
    },
    required: [],
  };
};

export default Schema;