/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateLightningInvoiceRequest = {
    /**
     * Amount wrapped in a string, represented in a millistatoshi string. (1000 millisatoshi = 1 satoshi)
     */
    amount?: string;
    /**
     * Description of the invoice in the BOLT11
     */
    description?: string | null;
    /**
     * Expiration time in seconds
     */
    expiry?: number;
    /**
     * True if the invoice should include private route hints
     */
    privateRouteHints?: boolean | null;
}
