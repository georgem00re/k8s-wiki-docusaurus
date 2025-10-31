
# Kubernetes Objects

## What is an Object?

In [Kubernetes](../what-is-kubernetes), an **object** is a persistent entity that represents a piece of the system's 
desired state.
Objects tell Kubernetes what you want to exist in the [cluster](../clusters) — for example, which 
applications to run, which container images to use, how many replicas to maintain, and how those workloads should be 
exposed or stored.
You can think of an object as a single building block for a workload running on a Kubernetes cluster.

## Native and Custom Objects

A **native object** is an object that is built into Kubernetes by default. 
Kubernetes provides a wide range of native objects.
Examples of native objects include [Pods](../pods), [Services](../services), Ingresses, and [Deployments](../deployments).
Kubernetes also allows you to define your own **custom objects** using Custom Resource Definitions (CRDs).
