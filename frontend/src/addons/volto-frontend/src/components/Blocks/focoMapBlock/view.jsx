import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { Segment, SegmentGroup, Container , Image, Button, Progress, Embed
 } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import bgPNG from './web-logo-square1.png';




 const View = () => {
    return (
        <>
            <br/>
            <Embed
                aspectRatio='4:3'
                icon='right circle arrow'
                placeholder={bgPNG}
                url='https://canvis.app/wjlbz8'
            />
            <br/>
        </>
    )

}

export default withBlockExtensions(View);