
# Control Plane

## What is a Control Plane?

A [Kubernetes](what-is-kubernetes) [cluster's](clusters) collective set of 
[control plane nodes](control-plane-nodes) (and the processes that run on them) is known as the cluster's control plane.
The **control plane** is considered the 'brain' of the cluster, and is responsible for managing its overall state and 
operation. 

## Control Plane Components

The control plane hosts several core processes which are collectively referred to as the control plane components.

- [`kube-apiserver`](kube-apiserver)
- [`etcd`](etcd)
- [`kube-scheduler`](kube-scheduler)
- [`kube-controller-manager`](kube-controller-manager)
- [`cloud-controller-manager`](cloud-controller-manager) (optional)

Each component runs as a separate process on the cluster's control plane node(s).
If a cluster has multiple control plane nodes, each node will run its own set of processes, but not all of them will
operate actively at once — some will remain idle in a standby state.
