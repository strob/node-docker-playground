This repository demonstrates:

1. A static node web app and a dynamic node server; and

2. A github workflow that builds a Docker image of the latter into the Github Container Registry.

The Docker image can be deployed to Kubernetes with a command like:

```
kubectl set image deployments/paf-play 'paf-playground=ghcr.io/strob/paf-playground:$COMMIT_HASH'
```
