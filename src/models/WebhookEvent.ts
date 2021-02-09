/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookEvent = {
    /**
     * The delivery id of the webhook
     */
    deliveryId?: string;
    /**
     * The id of the webhook
     */
    webhookId?: string;
    /**
     * If this delivery is a redelivery, the is the delivery id of the original delivery.
     */
    originalDeliveryId?: string;
    /**
     * True if this delivery is a redelivery
     */
    isRedelivery?: boolean;
    /**
     * The type of this event, current available are `InvoiceCreated`, `InvoiceReceivedPayment`, `InvoicePaidInFull`, `InvoiceExpired`, `InvoiceConfirmed`, and `InvoiceInvalid`.
     */
    type?: string;
    /**
     * The timestamp when this delivery has been created
     */
    timestamp?: number;
}
