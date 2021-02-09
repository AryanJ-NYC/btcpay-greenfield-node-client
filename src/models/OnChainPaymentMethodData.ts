/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OnChainPaymentMethodData = {
    /**
     * Whether the payment method is enabled
     */
    enabled?: boolean;
    /**
     * Crypto code of the payment method
     */
    cryptoCode?: string;
    /**
     * The derivation scheme
     */
    derivationScheme?: string;
    /**
     * A label that will be shown in the UI
     */
    label?: string;
    /**
     * The wallet fingerprint followed by the keypath to derive the account key used for signing operation or creating PSBTs
     */
    accountKeyPath?: string;
}
