
# Services

## What is a Service?

In [Kubernetes](what-is-kubernetes), a **service** is a [native object](native-objects) that can be used to assign
stable network identities to [pods](pods).
Because pods are [ephemeral](../terminology/ephemerality), their IP addresses can change whenever they are recreated.
A service assigns a persistent virtual IP address (and DNS name) to a group of one or more pods, providing a stable
network endpoint that remains the same even as the underlying pods come and go.

## Load Balancing

Services can also **load balance** traffic across the pods they represent, distributing incoming requests evenly among 
them. Services automatically keep track of the pods they route to, updating themselves as pods are created, replaced, 
or removed.

## External Services

An **external service** is a type of service that can also be used to expose an application running inside a Kubernetes
[cluster](clusters) to clients outside the cluster. 
It provides a stable, publicly reachable endpoint that forwards traffic into the cluster to the appropriate pods.
If you have a web server running inside your Kubernetes cluster, you might use an external service to allow external
traffic — such as requests from browsers or APIs on the Internet — to reach your web server through a stable, 
public-facing endpoint.

## Internal Services

An **internal service** is the default service type in Kubernetes. It provides a stable, virtual IP address and DNS name 
that can be used only within the cluster — i.e., by other pods, system components, or internal clients.
If you have a database running inside your Kubernetes cluster, you might use an internal service to provide a stable, 
in-cluster network endpoint that other pods can use to connect to it.
