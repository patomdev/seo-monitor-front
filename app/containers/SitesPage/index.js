/*
 * SitesPage
 *
 * This is container to displaying crawled pages, at the '/sites' route
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { loadSites } from './actions';
import {
  makeSelectSites,
  makeSelectLoading,
  makeSelectError,
} from './selectors';

export class SitesPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.initSites();
  }

  render() {
    const { loading, error, sites } = this.props;
    const sitesListProps = {
      loading,
      error,
      sites,
    };

    return (
      <div>
        {sitesListProps.loading}
        {sitesListProps.error}
        {sitesListProps.sites}
        <Helmet
          title="Sites"
          meta={[
            { name: 'description', content: 'List of crawled pages' },
          ]}
        />
        <h2>
          <FormattedMessage {...messages.header} />
        </h2>

      </div>
    );
  }
}

SitesPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  sites: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  initSites: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    initSites: dispatch(loadSites()),
  };
}

const mapStateToProps = createStructuredSelector({
  sites: makeSelectSites(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(SitesPage);
