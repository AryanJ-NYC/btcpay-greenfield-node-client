/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateOnChainTransactionRequestDestination } from './CreateOnChainTransactionRequestDestination';

export type CreateOnChainTransactionRequest = {
    /**
     * What and where to send money
     */
    destinations?: Array<CreateOnChainTransactionRequestDestination>;
    /**
     * A wallet address or a BIP21 payment link
     */
    feeRate?: string;
    /**
     * Whether to attempt to do a BIP78 payjoin if one of the destinations is a BIP21 with payjoin enabled
     */
    proceedWithPayjoin?: boolean | null;
    /**
     * Whether to broadcast the transaction after creating it or to simply return the transaction in hex format.
     */
    proceedWithBroadcast?: boolean | null;
    /**
     * Whether to send all the spent coins to the destinations (THIS CAN COST YOU SIGNIFICANT AMOUNTS OF MONEY, LEAVE FALSE UNLESS YOU KNOW WHAT YOU ARE DOING).
     */
    noChange?: boolean | null;
    /**
     * Whether to enable RBF for the transaction. Leave blank to have it random (beneficial to privacy)
     */
    rbf?: boolean | null;
    /**
     * Restrict the creation of the transactions from the outpoints provided ONLY (coin selection)
     */
    selectedInputs?: Array<string> | null;
}
