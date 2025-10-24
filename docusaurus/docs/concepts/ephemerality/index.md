
# Ephemerality

## What is Ephemerality?

**Ephemerality** is the quality of lasting for a short time.
In computing, an ephemeral resource is one that is temporary, short-lived, and designed to be automatically discarded or 
destroyed after a limited period of use.

## Ephemeral Containers

A Docker container running a single batch job is an example of an ephemeral resource: 
it exists just long enough to complete the task and is then removed, leaving no trace.

## Ephemeral IP Addresses

In cloud environments (like AWS, Azure, or Google Cloud), ephemeral IP addresses are frequently used. 
When a virtual machine starts up, the cloud provider automatically assigns it a temporary public or private IP address. 
This IP address is released back into the provider's IP pool when the resource stops, restarts, or is terminated.
If the resource is later recreated, it usually receives a new IP address, since the previous one is no longer reserved.
