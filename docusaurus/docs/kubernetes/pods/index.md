
# Kubernetes Pods

## What is a Pod?

The **pod** is the smallest deployable unit in [Kubernetes](../what-is-kubernetes).
It is an [object](../objects) that represents a logical grouping of one or more related containers that share the same 
network and storage resources. 
You can think of a pod as a small, self-contained computing environment in which one or more closely related containers 
are executed together.

## Amazon ECS Tasks

If you're familiar with [Amazon Elastic Container Service (ECS)](https://aws.amazon.com/ecs/), a pod in Kubernetes is 
conceptually similar to a task in Amazon ECS — both represent a group of one or more containers that are deployed and 
managed together.

## Resource Allocation

Unlike containers, which don't have computing resources inherently allocated to them, pods are assigned CPU and memory
(RAM) from the [nodes](../architecture#nodes) where they're scheduled to run. A single node can usually host many pods,
depending on the node's resource capacity and the pods' requirements.

## Pod Manifests

A **pod manifest** is the specification for a pod object in Kubernetes. 
It is a YAML file that defines the pod's desired state, including details such as the containers it should run, their 
images, environment variables, storage volumes, and so on.

## Pods are Ephemeral

Pods are [**ephemeral**](../../concepts/ephemerality) - they often restart, crash, or get replaced during updates.
Each time that happens, they are allocated a new IP address.
Because pods can be created and destroyed at any time, they should be treated as short-lived, disposable resources.

## Pod Container Patterns

A single pod can host multiple containers, but in most real-world deployments, each pod typically runs just one 
container. When scaling an application, you usually run multiple pods, each hosting the same container type, rather than 
combining different containers in a single pod. Hosting multiple distinct containers within one pod is uncommon.
