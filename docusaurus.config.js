/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kubernetes (K8s) Wiki',
  url: 'http://localhost',
  baseUrl: '/',
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
        },
        blog: false,
      },
    ],
  ],
};

export default config;
