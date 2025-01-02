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
                    <Progress percent={10} indicating />
                    <h4 style={{fontWeight: 'bold' , paddingLeft: '15px', textAlign: 'center', color: '#00ec97', marginTop: '0px'}}>Thank You!!</h4>
                    <h4 style={{fontWeight: 'bold' , paddingLeft: '15px', textAlign: 'center', color: '#00ec97', marginTop: '0px'}}>Goal is $24 for January 2025</h4>
                    <h5 style={{fontWeight: 'bold' , paddingLeft: '5px', textAlign: 'center', marginTop: '0px', marginRight: '5px', color: 'orange'}}>Donations are used for the following:</h5>
                    <ul style={{fontWeight: 'bold' , textAlign: 'left', fontSize: '12px', marginTop: '0px',  color: 'orange'}}>
                        <li>Linode Server costs</li>
                        <li>Mattermost Instance Hosting</li>
                        <li>Email Server Hosting (Free member @denvermesh.org email addresses available)</li>
                        <li>Stickers & Other Materials</li>
                        <li>Domain Name Registration</li>
                    </ul>
                    <h4 style={{fontWeight: 'bold' , textAlign: 'left', fontSize: '14px', marginTop: '0px',  color: 'orange'}}>We are looking to Register as a Non-profit Organization in the Near Future</h4>
                </Container>
          </div>
        </>
    )

}

export default withBlockExtensions(View);