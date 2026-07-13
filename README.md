# Centrifugo RPC Bridge

Proxy server for routing Centrifugo RPC calls to multiple backend instances.

## How it works

Accepts POST `/rpc` with `{ "instance": "...", ...payload }` and forwards the request to the matching backend URL.

### Available instances

| Instance | URL |
|----------|-----|
| `nucestatic1` | `https://nucestatic1.devan.my.id/rpc` |
| `nucestatic2` | `https://nucestatic2.devan.my.id/rpc` |
| `nucestatic3` | `https://nucestatic3.devan.my.id/rpc` |
| `nucestatic4` | `https://nucestatic4.devan.my.id/rpc` |

## Usage

```bash
npm start
```

Server listens on port `8888`.

## Environment

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `8888` | Server port |

## License

MIT
