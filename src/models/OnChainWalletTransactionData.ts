/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LabelData } from './LabelData';
import type { TransactionStatus } from './TransactionStatus';

export type OnChainWalletTransactionData = {
    /**
     * The transaction id
     */
    transactionHash?: string | null;
    /**
     * A comment linked to the transaction
     */
    comment?: string;
    /**
     * The amount the wallet balance changed with this transaction
     */
    amount?: string;
    /**
     * The hash of the block that confirmed this transaction. Null if still unconfirmed.
     */
    blockHash?: string | null;
    /**
     * The height of the block that confirmed this transaction. Null if still unconfirmed.
     */
    blockHeight?: string | null;
    /**
     * The number of confirmations for this transaction
     */
    confirmations?: string | null;
    /**
     * The time of the transaction
     */
    timestamp?: number;
    /**
     * The status for this transaction
     */
    status?: TransactionStatus;
    /**
     * Labels linked to this transaction
     */
    labels?: Record<string, LabelData>;
}
