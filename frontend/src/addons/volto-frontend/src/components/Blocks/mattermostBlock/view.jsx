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
                <Container text style={{background: '#333333', border: 'none', borderRadius: '5px', color: 'white'}}>
                    <h4 style={{fontWeight: 'bold' , paddingLeft: '15px', textAlign: 'center', color: '#00ec97'}}>Mattermost Instance Link</h4>
                    
                    <p style={{paddingLeft: '10px', textAlign: 'center'}}><span style={{fontSize: '16px', paddingLeft: '8px'}}> &nbsp;<a href='/mattermost'>Mattermost </a>  </span>  </p>
                    <Image className='icon centered-inblock'src={bgPNG} size='small' bordered
                    style={{borderRadius: '5px', marginRight: '0px'}} />
                    
                    
                    <br/>
                    <br/>
                </Container>
          </div>
        </>
    )

}

export default withBlockExtensions(View);