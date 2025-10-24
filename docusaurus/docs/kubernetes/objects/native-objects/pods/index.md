
# Pods

## What is a Pod?

The pod is the smallest deployable unit in Kubernetes.
It is a logical grouping of one or more related containers that share the same network and storage resources.
The pod is equivalent to the task in Amazon ECS.
A pod manifest (the YAML file) is the specification for a pod (object).
Containers themselves do not come bundled with computing resources, such as CPU or RAM.
But, pods are allocated resources from the nodes in which they are deployed.
Pods are essentially environments (with allocated resources) that run containers within them.
A single node can run multiple pods, depending on the node's resource capacity and the pods' requirements.

## Pods are Ephemeral

Pods are ephemeral - they often restart, crash, or get replaced during updates.
Each time that happens, they are allocated a new IP address.
Because Pods can be created and destroyed at any time, they should be treated as short-lived, disposable resources.
