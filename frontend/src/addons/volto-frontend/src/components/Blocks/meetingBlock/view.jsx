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
                    <h3 style={{fontWeight: 'bold' , paddingLeft: '15px', textAlign: 'center', color: '#00ec97'}}>Denver Mesh Meeting</h3>
                    <Image className='icon floated'src={bgPNG} size='small' floated='right' 
                    style={{borderRadius: '5px', marginRight: '20px'}} />
                    <span style={{paddingLeft: '10px'}}>Date: <span style={{fontSize: '16px', paddingLeft: '8px'}}>&nbsp;&nbsp;&nbsp;July 27 2024</span>  </span>
                    <br/>
                    <span style={{paddingLeft: '10px'}}>Time:
                        <span style={{fontSize: '16px', paddingLeft: '8px'}}>&nbsp;&nbsp;&nbsp;&nbsp;Voting ongoing</span> 
                    </span>
                    <br/>
                    <span style={{paddingLeft: '10px'}}>Where: <span style={{fontSize: '16px', paddingLeft: '6px'}}>Voting ongoing</span>  </span>
                    <br/>
                    <span style={{paddingLeft: '10px'}}>RSVP: <span style={{fontSize: '16px', paddingLeft: '8px'}}> &nbsp;<a href='/mattermost'>Mattermost </a>  </span>  </span>
                    <br/>
                    <br/>
                </Container>
          </div>
        </>
    )

}

export default withBlockExtensions(View);