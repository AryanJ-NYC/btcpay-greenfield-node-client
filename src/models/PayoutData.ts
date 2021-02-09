/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PayoutData = {
    /**
     * The id of the payout
     */
    id?: string;
    /**
     * The revision number of the payout. This revision number is incremented when the payout amount or destination is modified before the approval.
     */
    revision?: number;
    /**
     * The id of the pull payment this payout belongs to
     */
    pullPaymentId?: string;
    /**
     * The creation date of the payout as a unix timestamp
     */
    date?: string;
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
    /**
     * The amount of the payout in the currency of the payment method (eg. BTC). This is only available from the `AwaitingPayment` state.
     */
    paymentMethodAmount?: string | null;
    /**
     * The state of the payout (`AwaitingApproval`, `AwaitingPayment`, `InProgress`, `Completed`, `Cancelled`)
     */
    state?: 'AwaitingApproval' | 'AwaitingPayment' | 'InProgress' | 'Completed' | 'Cancelled';
}
