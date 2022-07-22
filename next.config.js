const { withAxiom } = require('next-axiom');
// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = withAxiom(nextConfig);
