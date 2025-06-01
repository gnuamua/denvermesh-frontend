import cx from 'classnames';
import React from 'react';
import { Container ,Button, Progress
} from 'semantic-ui-react';

const View = (props) => {
  // - `data` holds the values entered in the block edit form.
  // - `className` holds the CSS class names injected into this block
  //   by Volto's `styleClassNameExtenders`.
  // - `style` holds the CSS properties injected into this block
  //   by Volto's `Block Style Wrapper`.
  const { data, className, style } = props;
  return (
    <div className={cx('block', 'block01', className)} style={style}>
      <Container text style={{background: '#333333', border: 'none', borderRadius: '5px', color: 'white'}}>
                    <br/>
                    <h4 style={{fontWeight: 'bold' , paddingLeft: '15px', textAlign: 'center', color: '#00ec97', marginTop: '0px'}}>{data.title}</h4>
                    <Button inverted color='olive' style={{marginLeft: '32%'}} as='a' href={data.url}>Donate</Button>  
                    <br/>
                    <br/>
                    <Progress percent={data.percent} indicating />
                    <h4 style={{fontWeight: 'bold' , paddingLeft: '15px', textAlign: 'center', color: '#00ec97', marginTop: '0px'}}>Thank You!!</h4>
                    <h4 style={{fontWeight: 'bold' , paddingLeft: '15px', textAlign: 'center', color: '#00ec97', marginTop: '0px'}}>{data.dateMessage}</h4>
                    <h5 style={{fontWeight: 'bold' , paddingLeft: '5px', textAlign: 'center', marginTop: '0px', marginRight: '5px', color: 'orange'}}>Donations are used for the following:</h5>
                    <ul style={{fontWeight: 'bold' , textAlign: 'left', fontSize: '12px', marginTop: '0px',  color: 'orange'}}>
                        <li>Linode Server costs</li>
                        <li>Mattermost Instance Hosting</li>
                        <li>Email Server Self-Hosted (Free member @denvermesh.org email addresses available)</li>
                        <li>Stickers & Other Materials</li>
                        <li>Domain Name Registration</li>
                    </ul>
                    <h4 style={{fontWeight: 'bold' , textAlign: 'left', fontSize: '14px', marginTop: '0px',  color: 'orange'}}>We are looking to Register as a Non-profit Organization in the near future</h4>
       </Container>
    </div>
  );
};

export default View;