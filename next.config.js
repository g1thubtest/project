/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		loader: 'akamai',
		path: '',
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
			},
		],
	},
	assetPrefix: './',
};

module.exports = nextConfig;
