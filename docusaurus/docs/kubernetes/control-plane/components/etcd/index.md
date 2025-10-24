
# `etcd`

The etcd process is a core Kubernetes process that serves as a key-value store for cluster state.
It stores all configuration data and resource definitions that describe the desired and current state of the cluster.
kube-apiserver communicates directly with etcd to read and write the cluster's state data.
You can think of etcd as the single source of truth for Kubernetes.
Importantly, etcd stores information about all the resources currently deployed in the cluster (pods, nodes, etc.).
If etcd is lost or corrupted, the cluster loses its memory of what currently exists and what should exist.
