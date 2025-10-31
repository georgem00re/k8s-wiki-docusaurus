
# Horizontal Pod Autoscalers

## What is a Horizontal Pod Autoscaler?

In [Kubernetes](what-is-kubernetes), a **horizontal pod autoscaler (HPA)** is a [native object](native-objects)
that can be used to automatically scale the number of [pods](pods) running in a [cluster](clusters) based on observed 
metrics, such as CPU or memory usage.
HPAs are commonly applied to [deployments](deployments).
For an HPA to access CPU and memory metrics, you must have a metrics server running in your Kubernetes cluster.
