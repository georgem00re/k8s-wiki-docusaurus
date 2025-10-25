
# Horizontal Pod Autoscalers

## What is a Horizontal Pod Autoscaler?

A **horizontal pod autoscaler (HPA)** is a [Kubernetes](../what-is-kubernetes) [object](../objects) that can be used to 
automatically scale the number of [pods](../pods) running in a [cluster](../architecture#clusters) based on observed 
metrics, such as CPU or memory usage.
HPAs are commonly applied to [deployments](../deployments).
For an HPA to access CPU and memory metrics, you must have a metrics server running in your Kubernetes cluster.
