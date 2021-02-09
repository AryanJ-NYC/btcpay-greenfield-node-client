/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutOptions } from './CheckoutOptions';

export type CreateInvoiceRequest = {
    /**
     * The amount of the invoice
     */
    amount?: string;
    /**
     * The currency the invoice will use
     */
    currency?: string | null;
    /**
     * Additional information around the invoice that can be supplied. Some metadata are treated differently by BTCPay Server:
     * * `orderId`: A string, you can use this property to store the ID of an external system. We allow you to search in the invoice list based on this ID.
     */
    metadata?: any;
    /**
     * Additional settings to customize the checkout flow
     */
    checkout?: (CheckoutOptions) | null;
}
