/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LightningNetworkPaymentMethodData } from '../models/LightningNetworkPaymentMethodData';
import { request as __request } from '../core/request';

export class StorePaymentMethodsLightningNetworkService {

    /**
     * Get store Lightning Network payment methods
     * View information about the stores' configured Lightning Network payment methods
     * @returns LightningNetworkPaymentMethodDataList list of payment methods
     * @throws ApiError
     */
    // public static async storeLightningNetworkPaymentMethodsGetLightningNetworkPaymentMethods(): Promise<LightningNetworkPaymentMethodDataList> {
    //     const result = await __request({
    //         method: 'GET',
    //         path: `/api/v1/stores/${storeId}/payment-methods/LightningNetwork`,
    //     });
    //     return result.body;
    // }

    /**
     * Get store Lightning Network payment method
     * View information about the specified payment method
     * @returns LightningNetworkPaymentMethodData specified payment method
     * @throws ApiError
     */
    public static async storeLightningNetworkPaymentMethodsGetLightningNetworkPaymentMethod({
        storeId,
        cryptoCode,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The crypto code of the payment method to fetch **/
        cryptoCode: string,
    }): Promise<LightningNetworkPaymentMethodData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/payment-methods/LightningNetwork/${cryptoCode}`,
            errors: {
                403: `If you are authenticated but forbidden to view the specified store`,
                404: `The key is not found for this store/payment method`,
            },
        });
        return result.body;
    }

    /**
     * Update store Lightning Network payment method
     * Update the specified store's payment method
     * @returns LightningNetworkPaymentMethodData updated specified payment method
     * @throws ApiError
     */
    public static async storeLightningNetworkPaymentMethodsUpdateLightningNetworkPaymentMethod({
        storeId,
        cryptoCode,
        requestBody,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The crypto code of the payment method to update **/
        cryptoCode: string,
        requestBody: LightningNetworkPaymentMethodData,
    }): Promise<LightningNetworkPaymentMethodData> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/stores/${storeId}/payment-methods/LightningNetwork/${cryptoCode}`,
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
     * Remove store Lightning Network payment method
     * Removes the specified store payment method.
     * @returns any The payment method has been removed
     * @throws ApiError
     */
    public static async deleteStorePaymentMethodsLightningNetworkService({
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
            path: `/api/v1/stores/${storeId}/payment-methods/LightningNetwork/${cryptoCode}`,
            errors: {
                400: `A list of errors that occurred when removing the payment method`,
                403: `If you are authenticated but forbidden to remove the specified payment method`,
                404: `The key is not found for this store/payment-method`,
            },
        });
        return result.body;
    }

}
