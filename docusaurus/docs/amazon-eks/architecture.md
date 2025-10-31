
# Amazon EKS Architecture

## VPC Deployments

To create a [Kubernetes](../kubernetes/what-is-kubernetes) [cluster](../kubernetes/clusters) using 
[Amazon EKS](what-is-amazon-eks), you must first create an AWS Virtual Private Cloud (or VPC) to host the cluster's
networking resources — this includes subnets, route tables, security groups, and network interfaces.
Every Amazon EKS cluster is deployed inside a VPC.

## AWS-Managed Control Plane

When you deploy a cluster using Amazon EKS, AWS manages the [control plane](../kubernetes/control-plane) for you.
AWS automatically provisions and runs all control plane components for you across multiple availability zones. The
control plane is fully managed, highly available, and automatically scaled by AWS.

### Control Plane Access

The control plane runs inside AWS's own private, dedicated VPC.
Therefore, you do not have SSH or root access to the control plane.
However, AWS exposes a Kubernetes API endpoint — the Kubernetes REST API served by the
[`kube-apiserver`](../kubernetes/kube-apiserver) process — which you can use to interact with your cluster.
This API endpoint is exposed through two different network interfaces — one public and one private.
The public endpoint is accessible over the public Internet. The private endpoint is only accessible from within the
cluster's VPC.

## Worker Nodes

In Amazon EKS, [worker nodes](../kubernetes/worker-nodes) can run as either Amazon EC2 instances or AWS Fargate 
tasks, depending on the level of control you want over the underlying infrastructure.
Use AWS Fargate if you prefer a serverless, fully managed compute option where AWS handles the provisioning and scaling 
of resources.
Choose EC2-based worker nodes if you need full control over the underlying instances, such as custom AMIs, instance 
types, or networking configurations.

All EKS worker nodes always run inside your own VPC — never in AWS’s managed control plane VPC.
If you’re using EC2-hosted worker nodes, you can deploy them in either public or private subnets, though private subnets 
are strongly recommended for better security.
If you’re using AWS Fargate, your [pods](../kubernetes/pods) must run in private subnets within your VPC.
