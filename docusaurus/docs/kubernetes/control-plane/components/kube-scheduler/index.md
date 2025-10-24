
# `kube-scheduler`

The kube-scheduler process is a core process that's responsible for assigning newly-created pods to worker nodes.
When a new pod is created, the scheduler evaluates available nodes to decide where it should run.
It makes this decision based on various factors, such as the pod's resource requirements and node capacity.
Once a suitable node is found, the scheduler binds the pod to that node.
If the scheduler cannot find a node that meets the pod's requirements, the pod will remain in a pending state until 
resources become available or constraints are adjusted.
