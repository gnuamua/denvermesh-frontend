import React from 'react';
import { MeetSchema } from './schema';
import InlineForm from '@plone/volto/components/manage/Form/InlineForm';

const MeetingSidebar = ({ data, block, onChangeBlock }) => {
  return (
    <InlineForm
      schema={MeetSchema}
      title={MeetSchema.title}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
    />
  );
};

export default MeetingSidebar;