# BTCPay Greenfield Node Client

## Installation

```bash
yarn add btcpay-greenfield-node-client
```

or

```bash
npm install btcpay-greenfield-node-client
```

## Configuration

### Set Base URL

```typescript
import { OpenAPI } from 'btcpay-greenfield-node-client';

OpenAPI.BASE = 'https://your-btcpayserver-url.com';
```

### Authorization

#### API Key

```typescript
import { OpenAPI } from 'btcpay-greenfield-node-client';

OpenAPI.TOKEN = process.env.BTCPAY_API_KEY;
// or as a function
OpenAPI.TOKEN = () => {
  return 'SOME_TOKEN';
};
```

#### Username & Password

```typescript
import { OpenAPI } from 'btcpay-greenfield-node-client';

OpenAPI.USERNAME = process.env.BTCPAY_USERNAME;
OpenAPI.PASSWORD = process.env.BTCPAY_PASSWORD;
// or as function
OpenAPI.USERNAME = () => {
  return 'USERNAME';
};
OpenAPI.PASSWORD = () => {
  return 'PASSWORD';
};
```

## Usage

## Development

1. Run `yarn generate`
2. Commit
3. Run `yarn build`
4. Publish to `npm`

## Acknowledgement

This library leverages the work done by [@ferdikoomen](https://github.com/ferdikoomen) in [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen).
