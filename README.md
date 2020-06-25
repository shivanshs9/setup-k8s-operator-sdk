# setup-operator-sdk

This Github Action optionally downloads and caches operator-sdk binary for use in your own Github Action Workflows.
Just specify the version according to semver spec and you're good to go!

## Usage

See [action.yml](action.yml) for more details.

```yaml
steps:
  - uses: shivanshs9/setup-k8s-operator-sdk@v1
    with:
      version: "^0.17.0" # The operator-sdk version to download (if necessary) and use.
```

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
