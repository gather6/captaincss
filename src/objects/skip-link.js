/**
 * -=-=-=-=-=-=-=-=-
 *    SKIP LINK
 * -=-=-=-=-=-=-=-=-
 */

const { pluginDisabled } = require('../utilities');

module.exports = function ({ addComponents, config, theme, variants }) {
  if (pluginDisabled('skipLink', config)) return;

  const userStyles = theme('skipLink.styles');

  const skipLink = [
    {
      '.skip-link': Object.assign(
        {
          clip: 'rect(1px, 1px, 1px, 1px)',
          display: 'block',
          height: '1px',
          overflow: 'hidden',
          padding: '20px',
          position: 'absolute',
          textDecoration: 'underline',
          top: '1rem',
          left: '1rem',
          width: '1px',
          zIndex: '999',
        },
        userStyles
      ),

      '.skip-link:focus': {
        clip: 'auto',
        height: 'auto',
        overflow: 'visible',
        width: 'auto',
      },
    },
  ];

  return addComponents(skipLink, variants('skipLink'));
};
