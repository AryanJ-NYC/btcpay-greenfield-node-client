/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PullPaymentData = {
    /**
     * Id of the pull payment
     */
    id?: string;
    /**
     * Payment method of of the pull payment
     */
    name?: string;
    /**
     * The currency of the pull payment's amount
     */
    currency?: string;
    /**
     * The amount in the currency of this pull payment as a decimal string
     */
    amount?: string;
    /**
     * The length of each period in seconds
     */
    period?: number | null;
    /**
     * Whether this pull payment is archived
     */
    archived?: boolean;
    /**
     * The link to a page to claim payouts to this pull payment
     */
    viewLink?: string;
}
