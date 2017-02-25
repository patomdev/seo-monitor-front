import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return (
    <div>
      <NavBar>
        <h1>SEO Monitor</h1>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/sites">
          <FormattedMessage {...messages.sites} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
