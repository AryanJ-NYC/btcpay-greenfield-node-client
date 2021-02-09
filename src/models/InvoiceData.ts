/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateInvoiceRequest } from './CreateInvoiceRequest';
import type { InvoiceAdditionalStatus } from './InvoiceAdditionalStatus';
import type { InvoiceStatus } from './InvoiceStatus';

export type InvoiceData = (CreateInvoiceRequest & {
    /**
     * The identifier of the invoice
     */
    id?: string,
    /**
     * The link to the checkout page, where you can redirect the customer
     */
    checkoutLink?: string,
    /**
     * The creation time of the invoice
     */
    createdTime?: number,
    /**
     * The expiration time of the invoice
     */
    expirationTime?: number,
    /**
     * The monitoring time of the invoice
     */
    monitoringTime?: number,
    /**
     * The status of the invoice
     */
    status?: InvoiceStatus,
    /**
     * a secondary status of the invoice
     */
    additionalStatus?: InvoiceAdditionalStatus,
});
