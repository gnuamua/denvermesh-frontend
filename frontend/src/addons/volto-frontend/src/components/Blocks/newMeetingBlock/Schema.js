import messages from './messages';

const Schema = ({ intl }) => {
  return {
    title: intl.formatMessage(messages.block04),
    block: 'block04',
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: ['url', 'title', 'date', 'time', 'where', 'rsvp'],
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
      date: {
        title: 'Date',
      },
      time: {
        title: 'Time',
      },
      where: {
        title: 'Where Text',
      },
      rsvp: {
        title: 'RSVP Text',
      }
    },
    required: [],
  };
};

export default Schema;