
# Declarative Configuration

## Kubernetes is Declarative

[Kubernetes](../what-is-kubernetes) is **declarative**, which means that you define the desired state of your system — 
such as which applications should be running, how many replicas they should have, and how they should be exposed — and 
Kubernetes continuously works to ensure the actual state of the [cluster](../architecture#clusters) matches that 
desired state.

## Object Manifests

The desired state of an application is defined using a set of Kubernetes [objects](../objects) described in YAML 
manifests. Kubernetes interprets these object definitions and takes the necessary actions to bring the cluster into the 
specified state.
