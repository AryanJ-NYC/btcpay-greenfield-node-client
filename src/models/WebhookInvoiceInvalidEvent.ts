/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookInvoiceEvent } from './WebhookInvoiceEvent';

/**
 * Callback sent if the `type` is `InvoiceInvalid`
 */
export type WebhookInvoiceInvalidEvent = (WebhookInvoiceEvent & {
    /**
     * Whether the invoice have been manually marked as confirmed. If false, this invoice has received payments which could not confirm in time.
     */
    manuallyMarked?: boolean,
});
