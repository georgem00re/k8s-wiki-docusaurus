
# `kube-controller-manager`

The kube-controller-manager process is a control plane process that runs controller loops.
Controller loops are background process that continuously monitor the cluster's state and reconcile it with the desired state.
Each controller focuses on a specific type of Kubernetes object or subsystem, such as nodes, pods, services, etc.
When the actual state drifts from the desired state, the controller manager takes corrective action to bring it back in line.
All of these controllers run as independent loops within the same process.
Controllers communicate with `kube-apiserver`, watching for changes to cluster resources.
When they detect a difference between desired state (as defined in etcd) and current state (as reported by the cluster), 
they issue the necessary API calls to correct it.
