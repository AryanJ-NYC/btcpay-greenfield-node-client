/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookData } from './WebhookData';

export type WebhookDataCreate = (WebhookData & {
    /**
     * Must be used by the callback receiver to ensure the delivery comes from BTCPay Server. BTCPay Server includes the `BTCPay-Sig` HTTP header, whose format is `sha256=HMAC256(UTF8(webhook's secret), body)`. The pattern to authenticate the webhook is similar to [how to secure webhooks in Github](https://docs.github.com/webhooks/securing/).
     */
    secret?: string,
});
