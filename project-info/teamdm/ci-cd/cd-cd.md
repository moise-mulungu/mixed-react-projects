# via AWS

- why? Vercel is easier. You can get an ephemeral website URL for each branch you push.
  - Many full-stack job descriptions list AWS experience

# Terraform (AWS)

We use Terraform because we needed a way to automate the process of building and deploying feature branches. We wanted to hide the complexity such that when a dev creates a PR, it triggers a build and deployment without the dev having to worry about any of the 'plumbing' going on behind the scenes. Terraform allows us to automate the process of provisioning DNS records, Amazon S3 buckets, Amazon EC2 instances and AWS Elastic Load Balancing (ELB)'s. It also makes it easy to tear it all down when finished. We also like that it supports multiple clouds, which is why we chose to use it over AWS CloudFormation.

# At work, they plan to retire their use of AWS Elastic Beanstalk, but stay with AWS. What are the AWS alternatives:

## AWS CodeDeploy

## AWS CloudFormation

```js
// await is a unary operator, so you don't need the ugly parentheses in order to immediately invoke an async function
const result = await async function() { return 1; }()
result // 1
// see if that works with arrow function syntax
// "syntactic sugar"
const result = await async() => { return 1; }()

```

(read)
