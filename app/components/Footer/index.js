import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import messages from './messages';

function Footer() {
  return (
    <div>
      <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://twitter.com/patomdev">Patryk Omiotek</A>,
          }}
        />
      </section>
    </div>
  );
}

export default Footer;
