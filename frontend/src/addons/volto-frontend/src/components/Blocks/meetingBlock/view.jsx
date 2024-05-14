import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { Segment, SegmentGroup, Container , Image
 } from 'semantic-ui-react';

import bgPNG from './web-logo-square1.png';

const src = './web-logo-square1.png';

 const View = () => {
    return (
        <>
          <div className='block'>  
                <Container text style={{background: '#1f2031', border: 'none', borderRadius: '5px'}}>
                    <h3 style={{fontWeight: 'bold' , paddingLeft: '15px', textAlign: 'center'}}>Denver Mesh Meeting</h3>
                    <Image className='icon floated'src={bgPNG} size='small' floated='right' 
                    style={{borderRadius: '5px', marginRight: '20px'}} />
                    <span style={{paddingLeft: '10px'}}>When: <span style={{fontSize: '16px', paddingLeft: '8px'}}>TBA</span>  </span>
                    <br/>
                    <span style={{paddingLeft: '10px'}}>Where: <span style={{fontSize: '16px', paddingLeft: '6px'}}>TBA</span>  </span>
                    <br/>
                    <span style={{paddingLeft: '10px'}}>RSVP: <span style={{fontSize: '16px', paddingLeft: '8px'}}> <a href='/mattermost'>Mattermost </a>  </span>  </span>
                    <br/>
                    <br/>
                </Container>
          </div>
        </>
    )

}

export default withBlockExtensions(View);