import React from 'react';
import { Redirect } from 'react-router-dom';

class ContactRedirect extends React.Component {
  state = {
    redirect: false,
  };
  componentDidMount = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/contact" />;
    }
  };
  render() {
    return (
      <div>
        {this.renderRedirect()}
        {this.state.redirect ? <Redirect push to="/contact" /> : null}
        <button onClick={this.setRedirect}>Redirect</button>
      </div>
    );
  }
}
export default ContactRedirect;
