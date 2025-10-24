
# Services

## What is a Service?

Although pods are ephemeral, services can be used to assign them stable network identities.
A service assigns a persistent virtual IP address (and DNS name) to a group of one or more pods.
A service also load balances traffic across all healthy pods behind it.
Services automatically keep track of the pods they route to, updating as pods are created, replaced, or removed.
