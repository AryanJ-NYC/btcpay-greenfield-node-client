/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookInvoiceEvent } from './WebhookInvoiceEvent';

/**
 * Callback sent if the `type` is `InvoiceProcessing`
 */
export type WebhookInvoiceProcessingEvent = (WebhookInvoiceEvent & {
    /**
     * Whether this invoice has received more money than expected
     */
    overPaid?: boolean,
});
