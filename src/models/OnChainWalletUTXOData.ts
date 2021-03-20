/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OnChainWalletUTXOData = {
    /**
     * A comment linked to this utxo
     */
    comment?: string;
    /**
     * the value of this utxo
     */
    amount?: string;
    /**
     * a link to the configured blockchain explorer to view the utxo
     */
    link?: string;
    /**
     * outpoint of this utxo
     */
    outpoint?: string;
}
