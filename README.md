# setup-k8s-operator-sdk

![Build and Release](https://github.com/shivanshs9/setup-k8s-operator-sdk/workflows/Build%20and%20Release/badge.svg)

#### Setup [operator-sdk](https://github.com/operator-framework/operator-sdk/) with a single GitHub action!

This GitHub Action optionally downloads and caches [operator-sdk](https://github.com/operator-framework/operator-sdk/) binary for use in your own Github Action Workflows.
Just specify the version according to semver spec and you're good to go!

> This action assumes a Linux or MacOS environment, and will not work on Windows, since operator-sdk is [only packaged](https://github.com/operator-framework/operator-sdk/releases) for linux/macos/s390x.

## Usage

See [action.yml](action.yml) for more details.

```yaml
steps:
  - uses: shivanshs9/setup-k8s-operator-sdk@v1
    with:
      version: "^0.17.0" # The operator-sdk version to download (if necessary) and use.
```

Required inputs:

- `version`: operator-sdk version to use (from [Releases](https://github.com/operator-framework/operator-sdk/releases)). You can also specify version range, according to semver spec.

## Related Actions

- [Setup KinD Action](https://github.com/marketplace/actions/kind-kubernetes-in-docker-action)
- [Setup GO Environment](https://github.com/marketplace/actions/setup-go-environment)

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
