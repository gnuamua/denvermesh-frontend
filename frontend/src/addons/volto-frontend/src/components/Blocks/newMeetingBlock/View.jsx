import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import cx from 'classnames';
import React from 'react';

const View = (props) => {
  // - `data` holds the values entered in the block edit form.
  // - `className` holds the CSS class names injected into this block
  //   by Volto's `styleClassNameExtenders`.
  // - `style` holds the CSS properties injected into this block
  //   by Volto's `Block Style Wrapper`.
  // - `variation` holds the variation selected in the block editor,
  //   and it is an object as defined in the block configuration.
  const { data, className, style, variation } = props;

  const BodyTemplate = variation?.template;

  return (
    <div
      className={cx(
        'block',
        'block04',
        `block04-variation-${variation?.id}`,
        className,
      )}
      style={style}
    >
      <BodyTemplate data={data} />
    </div>
  );
};

export default withBlockExtensions(View);