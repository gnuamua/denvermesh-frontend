import cx from 'classnames';
import React from 'react';
import {
    StatisticValue,
    StatisticLabel,
    Segment,
    Statistic,
  } from 'semantic-ui-react'

const View = (props) => {
  // - `data` holds the values entered in the block edit form.
  // - `className` holds the CSS class names injected into this block
  //   by Volto's `styleClassNameExtenders`.
  // - `style` holds the CSS properties injected into this block
  //   by Volto's `Block Style Wrapper`.
  const { data, className, style } = props;
  return (
    <div className={cx('block', 'block02', className)} style={style}>
     <Segment inverted style={{width: '150px'}}>
                <Statistic color='brown' inverted>
                    <StatisticValue>{data.number}</StatisticValue>
                    <StatisticLabel>{data.label1}</StatisticLabel>
                    <StatisticLabel>{data.label2}</StatisticLabel>
                </Statistic>
     </Segment>
    </div>
  );
};

export default View;