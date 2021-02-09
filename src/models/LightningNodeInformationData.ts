/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LightningNodeInformationData = {
    /**
     * Node URIs to connect to this node in the form `pubkey@endpoint[:port]`
     */
    nodeURIs?: Array<string>;
    /**
     * The block height of the lightning node
     */
    blockHeight?: number;
}
