
# `kube-apiserver`

## What is `kube-apiserver`?

**`kube-apiserver`** is a process that runs on a [Kubernetes](what-is-kubernetes) [cluster's](clusters)
[control plane](control-plane). It serves as the entry point to the cluster.
All communication to and from the control plane — either from system administrators or internal components — flows 
through `kube-apiserver`.
`kube-apiserver` exposes the Kubernetes REST API, which is the only supported interface to interact with the cluster.
