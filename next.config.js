/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    testKey: `AB-${Math.random(12002)}`,
  },
};

module.exports = nextConfig;
