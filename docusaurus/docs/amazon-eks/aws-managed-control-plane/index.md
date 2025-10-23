
# AWS-Managed Control Plane

When you deploy a [cluster](../../kubernetes/clusters) using [Amazon EKS](../what-is-amazon-eks), AWS manages 
the control plane for you.

AWS automatically provisions and runs all control plane components for you across multiple availability zones. The 
control plane is fully managed, highly available, and auto-scaled by AWS.

The control plane runs inside AWS's own private, dedicated VPC - not in your VPC. You do not have SSH or root access to
the control plane. However, AWS exposes a Kubernetes API endpoint - the Kubernetes REST API served by the 
`kube-apiserver` process - which you can use to interact with the cluster (for example, through kubectl or the AWS CLI).

All your kubectl commands and Kubernetes API requests communicate securely with this endpoint to manage cluster resources.

This Kubernetes API endpoint is exposed through two different network interfaces - one public and one private.
The public endpoint is accessible over the public Internet. The private endpoint is only accessible from within the 
cluster's VPC. Either endpoint can be disabled, and which endpoint you decide to use depends on your security posture.
