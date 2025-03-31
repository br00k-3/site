/** @type {import('next').NextConfig} */
const nextConfig = {

        async redirects() {
            return [
                // Basic permanent redirect
                {
                    source: '/resume',
                    destination: 'https://docs.google.com/document/d/19nAkOI_kK2Eilpc1I4ezNd9bjJMPoYDa_10xcAOi3vc/edit?usp=sharing',
                    permanent: true,
                }
            ]
        },
        images: {
            remotePatterns: [
              {
                protocol: 'https',
                hostname: 'lastfm.freetls.fastly.net',
                port: '',
                pathname: '/i/u/300x300/**',
                search: '',
              },
            ],
          },
};
export default nextConfig;