import messages from './messages';

const schemaEnhancerVariation02 = ({ formData, schema, intl }) => {
  // schema holds the original schema (see the Schema.js file)
  // so you need to define the new property under `schema.properties`
  // and push its name to the relevant fieldset, in this case the first one
  // (note the `fieldsets[0]`)
  schema.properties.URL = {
    title: intl.formatMessage(messages.URL),
    widget: 'url'
  };
  schema.properties.RSVP = {
    title: intl.formatMessage(messages.rsvp),
    widget: 'url'
  };
  schema.fieldsets[0].fields.push('URL');
  schema.fieldsets[0].fields.push('RSVP');
  return schema;
};

export default schemaEnhancerVariation02;