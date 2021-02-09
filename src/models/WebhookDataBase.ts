/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookDataBase = {
    /**
     * The id of the webhook
     */
    id?: string;
    /**
     * Whether this webhook is enabled or not
     */
    enabled?: boolean;
    /**
     * If true, BTCPay Server will retry to redeliver any failed delivery after 10 seconds, 1 minutes and up to 6 times after 10 minutes.
     */
    automaticRedelivery?: boolean;
    /**
     * The endpoint where BTCPay Server will make the POST request with the webhook body
     */
    url?: string;
    /**
     * Which event should be received by this endpoint
     */
    authorizedEvents?: {
        /**
         * If true, the endpoint will receive all events related to the store.
         */
        everything?: string,
        /**
         * If `everything` is false, the specific events that the endpoint is interested in. Current events are: `InvoiceCreated`, `InvoiceReceivedPayment`, `InvoiceProcessing`, `InvoiceExpired`, `InvoiceSettled`, `InvoiceInvalid`.
         */
        specificEvents?: string,
    };
}
