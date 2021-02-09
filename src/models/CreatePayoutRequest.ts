/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePayoutRequest = {
    /**
     * The destination of the payout (can be an address or a BIP21 url)
     */
    destination?: string;
    /**
     * The amount of the payout in the currency of the pull payment (eg. USD).
     */
    amount?: string;
    /**
     * The payment method of the payout
     */
    paymentMethod?: string;
}
