
# Horizontal Pod Autoscalers

## What is a Horizontal Pod Autoscaler?

A horizontal pod autoscaler (HPA) is a Kubernetes object that can be used to auto-scale the number of pods.
HPAs can automatically adjust the number of pods based on observed metrics, such as CPU or memory usage.
HPAs are commonly applied to deployments, where they automatically adjust the `replicas` field.
For an HPA to access CPU and memory metrics, you must have a metrics server running in your cluster.
