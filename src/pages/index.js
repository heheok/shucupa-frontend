import React from 'react';
import { asyncComponent } from 'react-async-component';

export const Listing = asyncComponent({
  resolve: () =>
    new Promise(resolve =>
      require.ensure([], require => resolve(require('./Listing.js')), 'Listing')
    ),
  LoadingComponent: () => <div>Loading</div>,
  ErrorComponent: () => <div>Error</div>
});
