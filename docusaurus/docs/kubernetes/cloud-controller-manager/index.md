
# `cloud-controller-manager`

## What is `cloud-controller-manager`?

**`cloud-controller-manager`** is a process that runs on a [Kubernetes](../what-is-kubernetes) [cluster's](../clusters)
[control plane](../control-plane).
It is responsible for managing interactions between Kubernetes and cloud-specific infrastructure.
It enables Kubernetes to remain cloud-agnostic while still leveraging cloud infrastructure, such as load balancers and
network resources.
Each major cloud provider implements its own version of `cloud-controller-manager`.
When you deploy a Kubernetes cluster to a specific cloud (like AWS, GCP, or Azure), the `cloud-controller-manager` for
that provider enables the cluster to understand and interact with the surrounding cloud environment.
