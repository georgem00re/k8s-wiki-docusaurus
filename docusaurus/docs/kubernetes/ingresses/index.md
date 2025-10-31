
# Kubernetes Ingresses

## What is an Ingress?

An **ingress** is a [Kubernetes](../what-is-kubernetes) [object](../objects) that manages external access to 
[services](../services) within a [cluster](../clusters).
You can think of it as a smart router or entry point that sits in front of your cluster and decides how incoming 
requests from outside the cluster should be routed to [internal services](../services#internal-services).
An ingress is designed to expose internal services  to external clients (users, browsers, APIs, etc.) through a single, 
managed entry point.
[External services](../services#external-services) already expose themselves to the outside world, so you wouldn't
use an ingress with an external service. Ingresses exclusively route HTTP and HTTP traffic.
