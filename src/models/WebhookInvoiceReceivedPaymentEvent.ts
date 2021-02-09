/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookInvoiceEvent } from './WebhookInvoiceEvent';

/**
 * Callback sent if the `type` is `InvoiceReceivedPayment`
 */
export type WebhookInvoiceReceivedPaymentEvent = (WebhookInvoiceEvent & {
    /**
     * Whether this payment has been sent after expiration of the invoice
     */
    afterExpiration?: boolean,
});
