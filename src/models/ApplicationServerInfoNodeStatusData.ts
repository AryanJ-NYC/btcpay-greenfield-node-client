/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Detailed sync status of the internal full node
 */
export type ApplicationServerInfoNodeStatusData = {
    /**
     * The height of the chain of header of the internal full node
     */
    headers?: number;
    /**
     * The height of the latest validated block of the internal full node
     */
    blocks?: number;
    /**
     * The current synchronization progress
     */
    verificationProgress?: number;
}
