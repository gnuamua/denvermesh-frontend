export const MeetSchema = {
    title: 'Meeting',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['meet_list'],
      },
    ],
    properties: {
      meet_list: {
        title: 'Meeting Details',
        type: 'meetlist',
      },
    },
    required: [],
  };

  export const QuestionAnswerPairSchema = (title_question, title_answer) => {
    return {
      title: 'Question and Answer Pair',
      fieldsets: [
        {
          id: 'default',
          title: 'QA pair',
          fields: ['question', 'answer'],
        },
      ],
      properties: {
        question: {
          title: title_question,
          type: 'string',
          widget: 'textarea',
        },
        answer: {
          title: title_answer,
          type: 'string',
          widget: 'richtext',
        },
      },
      required: ['question', 'answer'],
    };
  };