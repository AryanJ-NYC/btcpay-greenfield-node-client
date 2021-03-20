/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateOnChainTransactionRequestDestination = {
    /**
     * A wallet address or a BIP21 payment link
     */
    destination?: string;
    /**
     * The amount to send. If `destination` is a BIP21 link, the amount must be the same or null.
     */
    amount?: string | null;
    /**
     * Whether to subtract from the provided amount. Must be false if `destination` is a BIP21 link
     */
    subtractFromAmount?: boolean;
}
