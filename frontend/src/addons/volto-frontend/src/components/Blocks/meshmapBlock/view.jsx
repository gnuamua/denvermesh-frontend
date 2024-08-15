import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { Segment, SegmentGroup, Container , Image, Button, Progress, Embed
 } from 'semantic-ui-react';
import { Link } from 'react-router-dom';





 const View = () => {
    return (
        <>
            <br/>
            <iframe
                width="95%"
                height="650"
                src='https://meshmap.net/'
            ></iframe>
            <br/>
        </>
    )

}

export default withBlockExtensions(View);