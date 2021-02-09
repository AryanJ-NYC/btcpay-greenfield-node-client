/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OpenLightningChannelRequest = {
    /**
     * Node URI in the form `pubkey@endpoint[:port]`
     */
    nodeURI?: string;
    /**
     * The amount to fund (in satoshi)
     */
    channelAmount?: string;
    /**
     * The amount to fund (in satoshi per byte)
     */
    feeRate?: number;
}
