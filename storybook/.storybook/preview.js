/* global window */

import {
  configure,
  addParameters,
  setCustomElements,
} from '@storybook/web-components';

import customElements from '../../stencil/custom-elements.json';

setCustomElements(customElements);

addParameters({
  docs: {
    iframeHeight: '200px',
  },
  options: {
    showRoots: true,
  },
});

// force full reload to not reregister web components
const req = require.context('../stories', true, /\.stories\.(js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
