
# Deployments

## What is a Deployment?

A deployment is a Kubernetes object that serves as a pod manager (or controller).
Because pods are ephemeral, deployments can be used to ensure that a desired number of pods are running at all times.
Deployments can automatically create, replace, or scale pods as needed.
To host a long-lived application in a Kubernetes cluster, you'll almost certainly want to use a Kubernetes deployment.
