/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationServerInfoNodeStatusData } from './ApplicationServerInfoNodeStatusData';

/**
 * Detailed sync status
 */
export type ApplicationServerInfoSyncStatusData = {
    /**
     * The CryptoCode of the crypto currency (eg. BTC)
     */
    cryptoCode?: string;
    nodeInformation?: ApplicationServerInfoNodeStatusData;
    /**
     * The height of the chain of header of the internal indexer
     */
    chainHeight?: number;
    /**
     * The height of the latest indexed block of the internal indexer
     */
    syncHeight?: number | null;
}
