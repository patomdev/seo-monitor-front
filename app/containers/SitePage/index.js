/*
 * SitesPage
 *
 * This is container to displaying crawled pages, at the '/sites' route
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import messages from './messages';
import { loadSite } from './actions';
import { makeSelectSite, makeSelectLoading } from './selectors';

export class SitePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.initSite(this.props.params.id);
  }

  renderSite(site) {
    return site ? <div>{site.title}</div> : null;
  }

  render() {
    const { loading, site } = this.props;
    const siteListProps = {
      loading,
      site,
    };

    return (
      <div>
        <div>
          {siteListProps.loading}
        </div>
        <div />
        <Helmet
          title="Sites"
          meta={[{ name: 'description', content: 'List of crawled pages' }]}
        />
        <h2>
          <FormattedMessage {...messages.header} />
        </h2>
        <div>
          {this.renderSite(siteListProps.site)}
        </div>
      </div>
    );
  }
}

SitePage.propTypes = {
  params: React.PropTypes.object,
  loading: React.PropTypes.bool,
  site: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  initSite: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    initSite: (id) => dispatch(loadSite(id)),
  };
}

const mapStateToProps = createStructuredSelector({
  site: makeSelectSite(),
  loading: makeSelectLoading(),
});

export default connect(mapStateToProps, mapDispatchToProps)(SitePage);
