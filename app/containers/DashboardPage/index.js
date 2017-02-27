/*
 * DashboardPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Pusher from 'pusher-js';
import LineChart from 'components/LineChart';
import messages from './messages';
import { makeSelectMessages } from './selectors';
import { newMessage } from './actions';

export class DashboardPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.pusher = new Pusher('5ba303ce6d9a3bb318ab');
    this.chatRoom = this.pusher.subscribe('urls');
  }

  componentDidMount() {
    this.chatRoom.bind(
      'new_url',
      (message) => {
        this.props.newMessage(message);
      },
      this
    );
  }

  renderPushMessages(pushMessage) {
    return pushMessage.size
      ? pushMessage.map((message) => (
        <div key={message.id}>
          {message.crawled} <a href={message.url}>{message.url}</a>
        </div>
        ))
      : null;
  }

  render() {
    return (
      <div>
        <h2>
          <FormattedMessage {...messages.header} />
        </h2>
        <h2><FormattedMessage {...messages.pusherHeader} /></h2>
        {this.renderPushMessages(this.props.messages)}
        <LineChart />
      </div>
    );
  }
}

DashboardPage.propTypes = {
  messages: React.PropTypes.object,
  newMessage: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    newMessage: (message) => dispatch(newMessage(message)),
  };
}

const mapStateToProps = createStructuredSelector({
  messages: makeSelectMessages(),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
