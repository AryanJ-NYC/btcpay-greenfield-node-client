/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LightningInvoiceStatus } from './LightningInvoiceStatus';

export type LightningInvoiceData = {
    /**
     * The invoice's ID
     */
    id?: string;
    status?: LightningInvoiceStatus;
    /**
     * The BOLT11 representation of the invoice
     */
    BOLT11?: string;
    /**
     * The unix timestamp when the invoice got paid
     */
    paidAt?: number | null;
    /**
     * The unix timestamp when the invoice expires
     */
    expiresAt?: number;
    /**
     * The amount of the invoice in millisatoshi
     */
    amount?: string;
    /**
     * The amount received in millisatoshi
     */
    amountReceived?: string;
}
