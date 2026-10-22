# deploy-test

Minimal Node.js app deployed to the CERIT-SC Kubernetes cluster (`kuba-cluster`) by GitHub Actions on every push to `main`.

Live at https://deploy-test-kouril1.dyn.cloud.e-infra.cz

## Required GitHub secrets

- `HARBOR_USERNAME`: your Harbor (cerit.io) username, lowercase
- `HARBOR_CLI_SECRET`: the CLI secret from your Harbor user profile
- `KUBECONFIG`: a kubeconfig for `kuba-cluster` (download it from Rancher)
