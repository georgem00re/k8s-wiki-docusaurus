
# Declarative Configuration

[Kubernetes](../../kubernetes/introduction) is **declarative**. You describe the desired state of your 
[containerised application](../../concepts/containerised-application), and Kubernetes constantly reconciles reality 
against that declaration, taking whatever actions are needed to achieve it. 

The desired state of your application is described as a series of Kubernetes objects defined in YAML manifests. 
Kubernetes takes these object definitions and translates them into actions on the underlying cluster.
