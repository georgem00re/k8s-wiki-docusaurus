
# Kubernetes Deployments

## What is a Deployment?

A **deployment** is a [Kubernetes](../what-is-kubernetes) [object](../objects) that serves as a [pod](../pods) manager
(or controller).
Because pods are [ephemeral](../../concepts/ephemerality), a deployment can be used to ensure that a desired number of 
pods are running at all times. If a pod fails or is deleted, the deployment can automatically create a replacement to 
maintain the desired state.
Deployments are commonly used to manage long-running applications within Kubernetes [clusters](../clusters), 
such as web servers, APIs, or background services.
