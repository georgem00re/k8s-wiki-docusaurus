
# Kubernetes Nodes

## What is a Node?

Kubernetes [clusters](../clusters) are composed of nodes. A **node** is a physical or virtual machine that runs various 
Kubernetes agent processes that enable it to communicate and operate as part of the cluster. The nodes in a Kubernetes 
cluster are not necessarily colocated, which makes the cluster a [distributed system](../../concepts/distributed-system).

### Node Types

A Kubernetes [cluster](../clusters) is composed of two main types of [nodes](../nodes): 
**control plane nodes** and **worker nodes**.
Control plane nodes are responsible for managing the overall state and operation of the cluster, while worker nodes
host the actual containerised workloads.
A cluster has one or more control plane nodes and zero or more worker nodes. 
But, to host and run a containerised workload, a cluster must have at least one worker node.
