
# `etcd`

## What is `etcd`?

**`etcd`** is a process that runs on a [Kubernetes](what-is-kubernetes) [cluster's](clusters) [control plane](control-plane).
It serves as a key-value store for cluster state.
It stores information about the current and desired state of a cluster.
You can think of `etcd` as the single source of truth for Kubernetes.
If `etcd` is lost or corrupted, the cluster loses its memory of what currently exists and what should exist.
