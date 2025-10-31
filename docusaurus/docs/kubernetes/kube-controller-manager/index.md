
# `kube-controller-manager`

## What is `kube-controller-manager`?

**`kube-controller-manager`** is a process that runs on a [Kubernetes](../what-is-kubernetes) [cluster's](../clusters)
[control plane](../control-plane).
It runs controller loops, which are background processes that continuously monitor the cluster's state and reconcile it 
with the desired state.
When the actual state drifts from the desired state, `kube-controller-manager` takes corrective action to bring it back 
in line.
