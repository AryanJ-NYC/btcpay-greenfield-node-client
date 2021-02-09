/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookInvoiceEvent } from './WebhookInvoiceEvent';

/**
 * Callback sent if the `type` is `InvoiceSettled`
 */
export type WebhookInvoiceSettledEvent = (WebhookInvoiceEvent & {
    /**
     * Whether the invoice have been manually marked as confirmed
     */
    manuallyMarked?: boolean,
});
