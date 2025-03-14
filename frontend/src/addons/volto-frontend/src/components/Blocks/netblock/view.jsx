import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { Container
 } from 'semantic-ui-react';
 import {
    StatisticValue,
    StatisticLabel,
    Segment,
    Statistic,
  } from 'semantic-ui-react'
 import { Link } from 'react-router-dom';





 const View = () => {
    return (
        <>
            <Segment inverted style={{width: '150px'}}>
                <Statistic color='brown' inverted>
                    <StatisticValue>12</StatisticValue>
                    <StatisticLabel>Weekly Net Check-Ins -</StatisticLabel>
                    <StatisticLabel>Most nodes seen at once </StatisticLabel>
                </Statistic>
            </Segment>
        </>
    )

}

export default withBlockExtensions(View);