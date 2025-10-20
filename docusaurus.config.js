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
    themeConfig: {
        colorMode: {
            defaultMode: "light",
            disableSwitch: false,
        },
        docs: {
            sidebar: {
                hideable: true
            }
        },
        navbar: {
            title: "George's Kubernetes Wiki",
            logo: {
                src: "img/k8s-logo.svg",
            }
        }
    }
};

export default config;
