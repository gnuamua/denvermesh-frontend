import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { Segment, SegmentGroup, Container , Image, Button
 } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import bgPNG from './web-logo-square1.png';

const src = './web-logo-square1.png';

 const View = () => {
    return (
        <>
          <div className='block'>  
                <Container text style={{background: '#333333', border: 'none', borderRadius: '5px', color: 'white'}}>
                    <br/>
                    <h4 style={{fontWeight: 'bold' , paddingLeft: '15px', textAlign: 'center', color: '#00ec97', marginTop: '0px'}}>Link to Mattermost Instance</h4>
                    <Button inverted color='olive' style={{marginLeft: '28%'}} as={Link} to="/mattermost">Mattermost</Button>  
                    <br/>
                    <br/>
                </Container>
          </div>
        </>
    )

}

export default withBlockExtensions(View);