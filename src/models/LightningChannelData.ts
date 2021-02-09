/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LightningChannelData = {
    /**
     * The public key of the node (Node ID)
     */
    remoteNode?: string;
    /**
     * Whether the node is public
     */
    isPublic?: boolean;
    /**
     * Whether the node is online
     */
    isActive?: boolean;
    /**
     * The capacity of the channel in millisatoshi
     */
    capacity?: string;
    /**
     * The local balance of the channel in millisatoshi
     */
    localBalance?: string;
    channelPoint?: string | null;
}
