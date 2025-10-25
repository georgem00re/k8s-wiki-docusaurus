
# Control Plane

## What is the Control Plane?

A [Kubernetes](../what-is-kubernetes) [cluster](../architecture#clusters) has one or more control plane 
[nodes](../architecture#nodes).
A cluster can run with a single control plane node, but typically has multiple for redundancy and availability.
A cluster's collective set of control plane nodes (and the processes that run on them) is known as the **control plane**.
The control plane is considered the 'brain' of the cluster, and is responsible for managing its overall state and
operation.

## Control Plane Components

The control plane hosts several core processes that together manage and coordinate the cluster's overall state:
- [**`kube-apiserver`**](#kube-apiserver)
- [**`etcd`**](#etcd)
- [**`kube-scheduler`**](#kube-scheduler)
- [**`kube-controller-manager`**](#kube-controller-manager)
- [**`cloud-controller-manager`**](#cloud-controller-manager) (optional)

These processes are commonly referred to as the **control plane components**.
Each runs as a separate process (often a separate container or systemd service) on the control plane node(s).
If a cluster has multiple control plane nodes, each node will run its own set of processes, but not all of them will
operate actively at once — some will remain idle in a standby state.

### `kube-apiserver`

The **`kube-apiserver`** process is the entry point to the control plane.
All communication to and from the control plane — from users or internal components — goes through `kube-apiserver`.
This process exposes the Kubernetes REST API, which is the only supported interface to interact with the cluster.
Any change you make to a Kubernetes cluster's resources always goes through the `kube-apiserver` process.
For example, when you run a [kubectl](../../concepts/kubectl) command, it ultimately sends an HTTPS request to the 
Kubernetes REST API.
The `kube-apiserver` process receives API requests, validates, authenticates, and authorises them, and then updates the
desired state of the cluster by writing to `etcd`.

### `etcd`

The **`etcd`** process serves as a key-value store for cluster state.
It stores all the configuration data and resource definitions that describe the desired and current state of the cluster.
The `kube-apiserver` process communicates directly with `etcd` to read and write the cluster's state data.
You can think of `etcd` as the single source of truth for Kubernetes.
Importantly, `etcd` stores information about all the resources currently deployed in the cluster ([pods](../pods), 
nodes, etc.).
If `etcd` is lost or corrupted, the cluster loses its memory of what currently exists and what should exist.

### `kube-scheduler`

The **`kube-scheduler`** process is responsible for assigning newly-created pods to worker nodes.
When a new pod is created, the scheduler evaluates available nodes to decide where it should run.
It makes this decision based on various factors, such as the pod's resource requirements and node capacity.
Once a suitable node is found, the scheduler binds the pod to that node.
If the scheduler cannot find a node that meets the pod's requirements, the pod will remain in a pending state until
resources become available or constraints are adjusted.

### `kube-controller-manager`

The **`kube-controller-manager`** process is a control plane process that runs controller loops.
Controller loops are background process that continuously monitor the cluster's state and reconcile it with the desired state.
Each controller focuses on a specific type of Kubernetes object or subsystem, such as nodes, pods, services, etc.
When the actual state drifts from the desired state, the controller manager takes corrective action to bring it back in line.
All of these controllers run as independent loops within the same process.
Controllers communicate with the `kube-apiserver` process, watching for changes to cluster resources.
When they detect a difference between desired state (as defined in `etcd`) and current state (as reported by the cluster),
they issue the necessary API calls to correct it.

### `cloud-controller-manager`

The **`cloud-controller-manager`** process is a control plane process that is responsible for managing interactions 
between Kubernetes and cloud-specific infrastructure.
It allows Kubernetes to remain cloud-agnostic while still leveraging cloud provider features, such as load balancers and
network and storage resources.
Each major cloud provider implements its own version of the `cloud-controller-manager`.
When you deploy a Kubernetes cluster on a specific cloud (like AWS, GCP, or Azure), the `cloud-controller-manager` for 
that provider enables the cluster to understand and interact with the surrounding cloud environment.
