
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    sidebar: [
        {
            type: "category", label: "Kubernetes", items: [
                { type: 'doc', id: 'kubernetes/what-is-kubernetes/index', label: 'What is Kubernetes?' },
                { type: 'doc', id: 'kubernetes/declarative-configuration/index', label: 'Declarative Configuration' },
                { type: "category", label: "Architecture", items: [
                    { type: 'doc', id: 'kubernetes/clusters/index', label: 'Clusters' },
                    { type: "category", label: "Nodes", link: { type: 'doc', id: 'kubernetes/nodes/index' }, items: [
                        { type: 'doc', id: 'kubernetes/control-plane-nodes/index', label: 'Control Plane Nodes' },
                        { type: 'doc', id: 'kubernetes/worker-nodes/index', label: 'Worker Nodes' },
                    ]},
                    { type: "category", label: "Control Plane", link: { type: 'doc', id: 'kubernetes/control-plane/index' }, items: [
                        { type: 'doc', id: 'kubernetes/kube-apiserver/index', label: 'kube-apiserver' },
                        { type: 'doc', id: 'kubernetes/etcd/index', label: 'etcd' },
                        { type: 'doc', id: 'kubernetes/kube-scheduler/index', label: 'kube-scheduler' },
                        { type: 'doc', id: 'kubernetes/kube-controller-manager/index', label: 'kube-controller-manager' },
                        { type: 'doc', id: 'kubernetes/cloud-controller-manager/index', label: 'cloud-controller-manager' },
                    ]}
                ]},
                { type: "category", label: "Objects", link: { type: 'doc', id: 'kubernetes/objects/index' }, items: [
                    { type: "category", label: "Native Objects", link: { type: 'doc', id: 'kubernetes/native-objects/index' }, items: [
                        { type: 'doc', id: 'kubernetes/pods/index', label: 'Pods' },
                        { type: 'doc', id: 'kubernetes/services/index', label: 'Services' },
                        { type: 'doc', id: 'kubernetes/ingresses/index', label: 'Ingresses' },
                        { type: 'doc', id: 'kubernetes/deployments/index', label: 'Deployments' },
                        { type: 'doc', id: 'kubernetes/horizontal-pod-autoscalers/index', label: 'Horizontal Pod Autoscalers' },
                    ]},
                    { type: "doc", id: "kubernetes/custom-objects/index", label: "Custom Objects" }
                ]},
            ]
        },
        {
            type: "category", label: "Amazon EKS", items: [
                { type: 'doc', id: 'amazon-eks/what-is-amazon-eks/index', label: 'What is Amazon EKS?' },
                { type: 'doc', id: 'amazon-eks/architecture/index', label: 'Architecture' },
            ]
        },
        {
            type: "category", label: "Concepts", items: [
                { type: 'doc', id: 'concepts/containerised-application/index', label: 'Containerised Application' },
                { type: 'doc', id: 'concepts/container-orchestration/index', label: 'Container Orchestration' },
                { type: 'doc', id: 'concepts/distributed-system/index', label: 'Distributed System' },
                { type: 'doc', id: 'concepts/ephemerality/index', label: 'Ephemerality' },
                { type: 'doc', id: 'concepts/kubectl/index', label: 'Kubectl' },
                { type: 'doc', id: 'concepts/minikube/index', label: 'Minikube' },
            ]
        },
    ],
};

export default sidebars;
