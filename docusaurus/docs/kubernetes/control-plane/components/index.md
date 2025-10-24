
# Components

The control plane hosts several core processes that together manage and maintain the state of the Kubernetes cluster:
- `kube-apiserver`
- `etcd`
- `kube-scheduler`
- `kube-controller-manager`
- `cloud-controller-manager` (optional)

Each of these runs as a separate process (often a separate container or systemd service) on the control plane node(s).
If a cluster has multiple control plane nodes, each node will run its own set of core processes.
However, not all of them will operate actively at once - some will remain idle in a standby state.
