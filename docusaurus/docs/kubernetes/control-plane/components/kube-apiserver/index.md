
# `kube-apiserver`

The kube-apiserver process is the entry point to the control plane.
All communication to and from the control plane — from users or internal components — goes through kube-apiserver.
kube-apiserver exposes the Kubernetes REST API, which is the only supported interface to interact with the cluster.
Any change you make to a Kubernetes cluster's resources always goes through the kube-apiserver process.
When you run a kubectl command, it ultimately sends an HTTPS request to the Kubernetes REST API.
kube-apiserver receives API requests and then validates, authenticates, and authorises them.
Then, kube-apiserver updates the desired state of the cluster by writing to etcd.
