/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationServerInfoSyncStatusData } from './ApplicationServerInfoSyncStatusData';

export type ApplicationServerInfoData = {
    /**
     * BTCPay Server version
     */
    version?: string;
    /**
     * The Tor hostname
     */
    onion?: string;
    /**
     * The payment methods this server supports
     */
    supportedPaymentMethods?: Array<string>;
    /**
     * True if the instance is fully synchronized, according to NBXplorer
     */
    fullySynched?: boolean;
    syncStatus?: Array<ApplicationServerInfoSyncStatusData>;
}
