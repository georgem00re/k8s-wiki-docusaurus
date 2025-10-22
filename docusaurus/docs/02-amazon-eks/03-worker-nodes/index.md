
# Worker Nodes

In Amazon EKS, worker nodes can be Amazon EC2 instances or AWS Fargate tasks. What you choose depends on the level of 
control over the underlying infrastructure that you want.

You should use AWS Fargate if you prefer a serverless, fully-managed compute option.
However, if you need full control over the underlying infrastructure, you should use EC2-hosted worker nodes.

EKS worker nodes always run inside your own VPC (never in AWS's managed control plane VPC).

If you're using EC2-hosted worker nodes, you can deploy them in public or private subnets (though using private subnets 
is widely recommended for security). If you're using AWS Fargate, the subnets used must be private.
