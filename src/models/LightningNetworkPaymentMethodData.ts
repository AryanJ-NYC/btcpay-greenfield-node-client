/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LightningNetworkPaymentMethodData = {
    /**
     * Whether the payment method is enabled
     */
    enabled?: boolean;
    /**
     * Crypto code of the payment method
     */
    cryptoCode?: string;
    /**
     * The lightning connection string. Set to 'Internal Node' to use the internal node. (See [this doc](https://github.com/btcpayserver/BTCPayServer.Lightning/blob/master/README.md#examples) for some example)
     */
    connectionString?: string;
}
