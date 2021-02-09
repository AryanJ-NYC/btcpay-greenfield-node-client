/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OnChainPaymentMethodData } from '../models/OnChainPaymentMethodData';
import type { OnChainPaymentMethodPreviewResultData } from '../models/OnChainPaymentMethodPreviewResultData';
import { request as __request } from '../core/request';

export class StorePaymentMethodsOnChainService {

    /**
     * Get store on-chain payment methods
     * View information about the stores' configured on-chain payment methods
     * @returns OnChainPaymentMethodDataList list of payment methods
     * @throws ApiError
     */
    // TODO: ask BTCPay about adding storeID to Swagger
    // public static async storeOnChainPaymentMethodsGetOnChainPaymentMethods(): Promise<OnChainPaymentMethodDataList> {
    //     const result = await __request({
    //         method: 'GET',
    //         path: `/api/v1/stores/${storeId}/payment-methods/OnChain`,
    //     });
    //     return result.body;
    // }

    /**
     * Get store on-chain payment method
     * View information about the specified payment method
     * @returns OnChainPaymentMethodData specified payment method
     * @throws ApiError
     */
    public static async storeOnChainPaymentMethodsGetOnChainPaymentMethod({
        storeId,
        cryptoCode,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The crypto code of the payment method to fetch **/
        cryptoCode: string,
    }): Promise<OnChainPaymentMethodData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/payment-methods/OnChain/${cryptoCode}`,
            errors: {
                403: `If you are authenticated but forbidden to view the specified store`,
                404: `The key is not found for this store/payment method`,
            },
        });
        return result.body;
    }

    /**
     * Update store on-chain payment method
     * Update the specified store's payment method
     * @returns OnChainPaymentMethodData updated specified payment method
     * @throws ApiError
     */
    public static async storeOnChainPaymentMethodsUpdateOnChainPaymentMethod({
        storeId,
        cryptoCode,
        requestBody,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The crypto code of the payment method to update **/
        cryptoCode: string,
        requestBody: OnChainPaymentMethodData,
    }): Promise<OnChainPaymentMethodData> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/stores/${storeId}/payment-methods/OnChain/${cryptoCode}`,
            body: requestBody,
            errors: {
                400: `A list of errors that occurred when updating the store payment method`,
                403: `If you are authenticated but forbidden to update the specified store`,
                404: `The key is not found for this store`,
            },
        });
        return result.body;
    }

    /**
     * Remove store on-chain payment method
     * Removes the specified store payment method.
     * @returns any The payment method has been removed
     * @throws ApiError
     */
    public static async deleteStorePaymentMethodsOnChainService({
        storeId,
        cryptoCode,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The crypto code of the payment method to update **/
        cryptoCode: string,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/stores/${storeId}/payment-methods/OnChain/${cryptoCode}`,
            errors: {
                400: `A list of errors that occurred when removing the payment method`,
                403: `If you are authenticated but forbidden to remove the specified payment method`,
                404: `The key is not found for this store/payment-method`,
            },
        });
        return result.body;
    }

    /**
     * Preview store on-chain payment method addresses
     * View addresses of the current payment method of the store
     * @returns OnChainPaymentMethodPreviewResultData specified payment method addresses
     * @throws ApiError
     */
    public static async storeOnChainPaymentMethodsGetOnChainPaymentMethodPreview({
        storeId,
        cryptoCode,
        offset,
        amount,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The crypto code of the payment method to fetch **/
        cryptoCode: string,
        /** From which index to fetch the addresses **/
        offset?: number,
        /** Number of addresses to preview **/
        amount?: number,
    }): Promise<OnChainPaymentMethodPreviewResultData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/payment-methods/OnChain/${cryptoCode}/preview`,
            query: {
                'offset': offset,
                'amount': amount,
            },
            errors: {
                403: `If you are authenticated but forbidden to view the specified store`,
                404: `The key is not found for this store/payment method`,
            },
        });
        return result.body;
    }

    /**
     * Preview proposed store on-chain payment method addresses
     * View addresses of a proposed payment method of the store
     * @returns OnChainPaymentMethodPreviewResultData specified payment method addresses
     * @throws ApiError
     */
    public static async storeOnChainPaymentMethodsGetOnChainPaymentMethodPreview1({
        storeId,
        cryptoCode,
        requestBody,
        offset,
        amount,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The crypto code of the payment method to fetch **/
        cryptoCode: string,
        requestBody: OnChainPaymentMethodData,
        /** From which index to fetch the addresses **/
        offset?: number,
        /** Number of addresses to preview **/
        amount?: number,
    }): Promise<OnChainPaymentMethodPreviewResultData> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/stores/${storeId}/payment-methods/OnChain/${cryptoCode}/preview`,
            query: {
                'offset': offset,
                'amount': amount,
            },
            body: requestBody,
            errors: {
                403: `If you are authenticated but forbidden to view the specified store`,
                404: `The key is not found for this store`,
            },
        });
        return result.body;
    }

}
