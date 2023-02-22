# Performance test

## Pre-requisites

[k6 installation](https://k6.io/docs/get-started/installation/)

## Run

With docker
```bash
docker run --rm -i grafana/k6 run - <single-request.js
```

With k6-cli
```bash
k6 run single-request.js
```

