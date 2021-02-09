/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectToNodeRequest } from '../models/ConnectToNodeRequest';
import type { CreateLightningInvoiceRequest } from '../models/CreateLightningInvoiceRequest';
import type { LightningChannelData } from '../models/LightningChannelData';
import type { LightningInvoiceData } from '../models/LightningInvoiceData';
import type { LightningNodeInformationData } from '../models/LightningNodeInformationData';
import type { OpenLightningChannelRequest } from '../models/OpenLightningChannelRequest';
import type { PayLightningInvoiceRequest } from '../models/PayLightningInvoiceRequest';
import { request as __request } from '../core/request';

export class LightningStoreService {

    /**
     * Get node information
     * View information about the lightning node
     * @returns LightningNodeInformationData Lightning node information such as reachable nodeinfos
     * @throws ApiError
     */
    public static async storeLightningNodeApiGetInfo({
        cryptoCode,
        storeId,
    }: {
        /** The cryptoCode of the lightning-node to query **/
        cryptoCode: string,
        /** The store id with the lightning-node configuration to query **/
        storeId: string,
    }): Promise<LightningNodeInformationData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/lightning/${cryptoCode}/info`,
            errors: {
                404: `The lightning node configuration was not found`,
                503: `Unable to access the lightning node`,
            },
        });
        return result.body;
    }

    /**
     * Connect to lightning node
     * Connect to another lightning node.
     * @returns any Successfully connected
     * @throws ApiError
     */
    public static async storeLightningNodeApiConnectToNode({
        cryptoCode,
        storeId,
        requestBody,
    }: {
        /** The cryptoCode of the lightning-node to query **/
        cryptoCode: string,
        /** The store id with the lightning-node configuration to query **/
        storeId: string,
        requestBody: ConnectToNodeRequest,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/stores/${storeId}/lightning/${cryptoCode}/connect`,
            body: requestBody,
            errors: {
                400: `Wellknown error codes are: \`could-not-connect\``,
                404: `The lightning node configuration was not found`,
                422: `Unable to validate the request`,
                503: `Unable to access the lightning node`,
            },
        });
        return result.body;
    }

    /**
     * Get channels
     * View information about the current channels of the lightning node
     * @returns LightningChannelData list of channels
     * @throws ApiError
     */
    public static async storeLightningNodeApiGetChannels({
        cryptoCode,
        storeId,
    }: {
        /** The cryptoCode of the lightning-node to query **/
        cryptoCode: string,
        /** The store id with the lightning-node configuration to query **/
        storeId: string,
    }): Promise<Array<LightningChannelData>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/lightning/${cryptoCode}/channels`,
            errors: {
                404: `The lightning node configuration was not found`,
            },
        });
        return result.body;
    }

    /**
     * Open channel
     * Open a channel with another lightning node. You should connect to that node first.
     * @returns any Successfully opened
     * @throws ApiError
     */
    public static async storeLightningNodeApiOpenChannel({
        cryptoCode,
        storeId,
        requestBody,
    }: {
        /** The cryptoCode of the lightning-node to query **/
        cryptoCode: string,
        /** The store id with the lightning-node configuration to query **/
        storeId: string,
        requestBody: OpenLightningChannelRequest,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/stores/${storeId}/lightning/${cryptoCode}/channels`,
            body: requestBody,
            errors: {
                400: `Wellknown error codes are: \`channel-already-exists\`, \`cannot-afford-funding\`, \`need-more-confirmations\`, \`peer-not-connected\``,
                404: `The lightning node configuration was not found`,
                422: `Unable to validate the request`,
                503: `Unable to access the lightning node`,
            },
        });
        return result.body;
    }

    /**
     * Get deposit address
     * Get an on-chain deposit address for the lightning node
     * @returns string deposit address
     * @throws ApiError
     */
    public static async storeLightningNodeApiGetDepositAddress({
        cryptoCode,
        storeId,
    }: {
        /** The cryptoCode of the lightning-node to query **/
        cryptoCode: string,
        /** The store id with the lightning-node configuration to query **/
        storeId: string,
    }): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/stores/${storeId}/lightning/${cryptoCode}/address`,
            errors: {
                404: `The lightning node configuration was not found`,
                503: `Unable to access the lightning node`,
            },
        });
        return result.body;
    }

    /**
     * Get invoice
     * View information about the requested lightning invoice
     * @returns LightningInvoiceData Lightning invoice data
     * @throws ApiError
     */
    public static async storeLightningNodeApiGetInvoice({
        cryptoCode,
        storeId,
        id,
    }: {
        /** The cryptoCode of the lightning-node to query **/
        cryptoCode: string,
        /** The store id with the lightning-node configuration to query **/
        storeId: string,
        /** The id of the lightning invoice. **/
        id: string,
    }): Promise<LightningInvoiceData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/lightning/${cryptoCode}/invoices/${id}`,
            errors: {
                404: `The lightning node configuration or the specified invoice was not found `,
                503: `Unable to access the lightning node`,
            },
        });
        return result.body;
    }

    /**
     * Pay Lightning Invoice
     * Pay a lightning invoice.
     * @returns any Successfully paid
     * @throws ApiError
     */
    public static async storeLightningNodeApiPayInvoice({
        cryptoCode,
        storeId,
        requestBody,
    }: {
        /** The cryptoCode of the lightning-node to query **/
        cryptoCode: string,
        /** The store id with the lightning-node configuration to query **/
        storeId: string,
        requestBody: PayLightningInvoiceRequest,
    }): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/stores/${storeId}/lightning/${cryptoCode}/invoices/pay`,
            body: requestBody,
            errors: {
                400: `Wellknown error codes are: \`could-not-find-route\`, \`generic-error\``,
                404: `The lightning node configuration was not found`,
                422: `Unable to validate the request`,
                503: `Unable to access the lightning node`,
            },
        });
        return result.body;
    }

    /**
     * Create lightning invoice
     * Create a lightning invoice.
     * @returns LightningInvoiceData Successfully created
     * @throws ApiError
     */
    public static async storeLightningNodeApiCreateInvoice({
        cryptoCode,
        storeId,
        requestBody,
    }: {
        /** The cryptoCode of the lightning-node to query **/
        cryptoCode: string,
        /** The store id with the lightning-node configuration to query **/
        storeId: string,
        requestBody: CreateLightningInvoiceRequest,
    }): Promise<LightningInvoiceData> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/stores/${storeId}/lightning/${cryptoCode}/invoices`,
            body: requestBody,
            errors: {
                400: `Wellknown error codes are: \`invoice-error\``,
                404: `The lightning node configuration was not found`,
                503: `Unable to access the lightning node`,
            },
        });
        return result.body;
    }

}