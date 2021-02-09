/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookInvoiceEvent } from './WebhookInvoiceEvent';

/**
 * Callback sent if the `type` is `InvoiceExpired`
 */
export type WebhookInvoiceExpiredEvent = (WebhookInvoiceEvent & {
    /**
     * Whether the invoice received some payments before being expired.
     */
    partiallyPaid?: boolean,
});
