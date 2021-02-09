/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookDeliveryData = {
    /**
     * The id of the delivery
     */
    id?: string;
    /**
     * Timestamp of when the delivery got broadcasted
     */
    timestamp?: number;
    /**
     * HTTP code received by the remote service, if any.
     */
    httpCode?: number | null;
    /**
     * User friendly error message, if any.
     */
    errorMessage?: string;
    /**
     * Whether the delivery failed or not (possible values are: `Failed`, `HttpError`, `HttpSuccess`)
     */
    status?: string;
}
