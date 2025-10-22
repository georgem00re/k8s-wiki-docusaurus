
# Nodes

## What is a Node?

A **node** is a physical or virtual machine that runs various Kubernetes agent processes.

The nodes of a [cluster](../clusters) are not necessarily colocated. This makes a Kubernetes cluster a [distributed 
system](../../03-concepts/distributed-system).

## Node Types

There are two main node types:
- Control Plane Nodes
- Worker Nodes

A cluster has one or more control plane nodes and zero or more worker nodes. However, to host and run containerised 
workloads, a cluster must have at least one worker node.
