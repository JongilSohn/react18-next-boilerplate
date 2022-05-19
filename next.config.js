// next.config.js
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const intercept = require('intercept-stdout');

// safely ignore recoil stdout warning messages
function interceptStdout(text) {
  if (text.includes('Duplicate atom key')) {
    return '';
  }
  return text;
}

module.exports = withPlugins([[withImages]], {
  swcMinify: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    disableStaticImages: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});

if (process.env.NODE_ENV === 'development') {
  intercept(interceptStdout);
}
