
# `kube-scheduler`

## What is `kube-scheduler`?

**`kube-scheduler`** is a process that runs on a [Kubernetes](../what-is-kubernetes) [cluster's](../clusters)
[control plane](../control-plane).
It is responsible for assigning containerised workloads to [worker nodes](../worker-nodes).
When a containerised workload is created, `kube-scheduler` evaluates available worker nodes to decide where it should run.
It makes this decision based on various factors, such as the workload's resource requirements and worker node capacity.
