
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    sidebar: [
        {
            type: "category", label: "Kubernetes", items: [
                { type: 'doc', id: 'kubernetes/what-is-kubernetes', label: 'What is Kubernetes?' },
                { type: 'doc', id: 'kubernetes/declarative-configuration', label: 'Declarative Configuration' },
                { type: "category", label: "Architecture", items: [
                    { type: 'doc', id: 'kubernetes/clusters', label: 'Clusters' },
                    { type: "category", label: "Nodes", link: { type: 'doc', id: 'kubernetes/nodes' }, items: [
                        { type: 'doc', id: 'kubernetes/control-plane-nodes', label: 'Control Plane Nodes' },
                        { type: 'doc', id: 'kubernetes/worker-nodes', label: 'Worker Nodes' },
                    ]},
                    { type: "category", label: "Control Plane", link: { type: 'doc', id: 'kubernetes/control-plane' }, items: [
                        { type: 'doc', id: 'kubernetes/kube-apiserver', label: 'kube-apiserver' },
                        { type: 'doc', id: 'kubernetes/etcd', label: 'etcd' },
                        { type: 'doc', id: 'kubernetes/kube-scheduler', label: 'kube-scheduler' },
                        { type: 'doc', id: 'kubernetes/kube-controller-manager', label: 'kube-controller-manager' },
                        { type: 'doc', id: 'kubernetes/cloud-controller-manager', label: 'cloud-controller-manager' },
                    ]}
                ]},
                { type: "category", label: "Objects", link: { type: 'doc', id: 'kubernetes/objects' }, items: [
                    { type: "category", label: "Native Objects", link: { type: 'doc', id: 'kubernetes/native-objects' }, items: [
                        { type: 'doc', id: 'kubernetes/pods', label: 'Pods' },
                        { type: 'doc', id: 'kubernetes/services', label: 'Services' },
                        { type: 'doc', id: 'kubernetes/ingresses', label: 'Ingresses' },
                        { type: 'doc', id: 'kubernetes/deployments', label: 'Deployments' },
                        { type: 'doc', id: 'kubernetes/horizontal-pod-autoscalers', label: 'Horizontal Pod Autoscalers' },
                    ]},
                    { type: "doc", id: "kubernetes/custom-objects", label: "Custom Objects" }
                ]},
            ]
        },
        {
            type: "category", label: "Amazon EKS", items: [
                { type: 'doc', id: 'amazon-eks/what-is-amazon-eks', label: 'What is Amazon EKS?' },
                { type: 'doc', id: 'amazon-eks/architecture', label: 'Architecture' },
            ]
        },
        {
            type: "category", label: "Terminology", items: [
                { type: 'doc', id: 'terminology/containerised-application', label: 'Containerised Application' },
                { type: 'doc', id: 'terminology/container-orchestration', label: 'Container Orchestration' },
                { type: 'doc', id: 'terminology/distributed-system', label: 'Distributed System' },
                { type: 'doc', id: 'terminology/ephemerality', label: 'Ephemerality' },
                { type: 'doc', id: 'terminology/kubectl', label: 'Kubectl' },
                { type: 'doc', id: 'terminology/minikube', label: 'Minikube' },
            ]
        },
    ],
};

export default sidebars;
