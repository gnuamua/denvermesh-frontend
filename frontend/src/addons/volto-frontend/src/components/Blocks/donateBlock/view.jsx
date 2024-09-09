import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { Segment, SegmentGroup, Container , Image, Button, Progress
 } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



 const View = () => {
    return (
        <>
          <div className='block'>  
                <Container text style={{background: '#333333', border: 'none', borderRadius: '5px', color: 'white'}}>
                    <br/>
                    <h4 style={{fontWeight: 'bold' , paddingLeft: '15px', textAlign: 'center', color: '#00ec97', marginTop: '0px'}}>Link to Donation Page</h4>
                    <Button inverted color='olive' style={{marginLeft: '32%'}} as='a' href="https://www.paypal.com/donate/?business=L3PBYDKZA2J4G&no_recurring=0&item_name=DenverMesh.org+-Not+Tax+Deductible+until+we+register+as+a+non+profit.&currency_code=USD">Donate</Button>  
                    <br/>
                    <br/>
                    <Progress percent={42} indicating />
                    <h4 style={{fontWeight: 'bold' , paddingLeft: '15px', textAlign: 'center', color: '#00ec97', marginTop: '0px'}}>Currently $10 Donated</h4>
                    <br/>
                    <h4 style={{fontWeight: 'bold' , paddingLeft: '15px', textAlign: 'center', color: '#00ec97', marginTop: '0px'}}>Goal is $24 for September 2024</h4>
                </Container>
          </div>
        </>
    )

}

export default withBlockExtensions(View);