
import type {Config} from '@docusaurus/types';

const repositoryName = process.env.REPOSITORY_NAME || '';

/** @type {import('@docusaurus/types').Config} */
const config: Config = {
    title: 'Kubernetes (K8s) Wiki',
    url: 'http://localhost',
    favicon: "img/k8s-logo.svg",
    baseUrl: repositoryName ? `/${repositoryName}/` : '/',
    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',
                    breadcrumbs: false,
                    sidebarPath: "./sidebars.ts"
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
