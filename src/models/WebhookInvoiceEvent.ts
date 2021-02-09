/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookEvent } from './WebhookEvent';

export type WebhookInvoiceEvent = (WebhookEvent & {
    /**
     * The store id of the invoice's event
     */
    storeId?: string,
    /**
     * The invoice id of the invoice's event
     */
    invoiceId?: string,
});
