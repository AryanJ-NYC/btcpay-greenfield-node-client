/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Check whether network fee should be added to the invoice if on-chain payment is used. ([More information](https://docs.btcpayserver.org/FAQ/FAQ-Stores/#add-network-fee-to-invoice-vary-with-mining-fees))
 */
export enum NetworkFeeMode {
    MULTIPLE_PAYMENTS_ONLY = 'MultiplePaymentsOnly',
    ALWAYS = 'Always',
    NEVER = 'Never',
}