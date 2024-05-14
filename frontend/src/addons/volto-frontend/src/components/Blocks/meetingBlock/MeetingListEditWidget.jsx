import { Form as VoltoForm } from '@plone/volto/components';
import { QuestionAnswerPairSchema } from './schema.js';

const MeetingListEditWidget = (props) => {
  const { value = {}, id, onChange } = props;
  // id is the field name: faq_list
  // value is the form data (see example in schema.js)

  // qaList: array of [id_question, [question, answer]]
  
  const onSubmitQAPair = (id_qa, question, answer) => {
    onChange(id, {
      ...value,
      faqs_layout: {
        ...(value.meets_layout || {}),
        [id_qa]: [question, answer],
      },
    });
  };

  return (
    // loop over question answer pairs *qaList*
      <VoltoForm
        onSubmit={({ question, answer }) => {
          onSubmitQAPair( question, answer);
        }}
        formData={{
          question: value.question,
          answer: value.answer,
        }}
        schema={QuestionAnswerPairSchema(
          props.question,
          props.answer,
        )}
      />

    );
}

export default MeetingListEditWidget;