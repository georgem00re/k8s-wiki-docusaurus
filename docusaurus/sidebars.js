
export default {
    sidebar: [
        {
            type: "category", label: "Kubernetes", items: [
                { type: 'doc', id: 'kubernetes/what-is-kubernetes/index', label: 'What is Kubernetes?' },
                { type: 'doc', id: 'kubernetes/architecture/index', label: 'Architecture' },
                { type: 'doc', id: 'kubernetes/declarative-configuration/index', label: 'Declarative Configuration' },
                { type: 'doc', id: 'kubernetes/objects/index', label: 'Objects' },
                { type: 'doc', id: 'kubernetes/pods/index', label: 'Pods' },
                { type: 'doc', id: 'kubernetes/services/index', label: 'Services' },
                { type: 'doc', id: 'kubernetes/ingresses/index', label: 'Ingresses' },
                { type: 'doc', id: 'kubernetes/deployments/index', label: 'Deployments' },
                { type: 'doc', id: 'kubernetes/horizontal-pod-autoscalers/index', label: 'Horizontal Pod Autoscalers' },
                { type: 'doc', id: 'kubernetes/control-plane/index', label: 'Control Plane' },
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
            ]
        },
    ],
};
