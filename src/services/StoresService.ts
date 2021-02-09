/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreBaseData } from '../models/StoreBaseData';
import type { StoreData } from '../models/StoreData';
import type { StoreDataList } from '../models/StoreDataList';
import { request as __request } from '../core/request';

export class StoresService {

    /**
     * Get stores
     * View information about the available stores
     * @returns StoreDataList list of stores
     * @throws ApiError
     */
    public static async storesGetStores(): Promise<StoreDataList> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores`,
        });
        return result.body;
    }

    /**
     * Create a new store
     * Create a new store
     * @returns StoreData Information about the new store
     * @throws ApiError
     */
    public static async postStoresService({
        requestBody,
    }: {
        requestBody: StoreBaseData,
    }): Promise<StoreData> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/stores`,
            body: requestBody,
            errors: {
                400: `A list of errors that occurred when creating the store`,
                403: `If you are authenticated but forbidden to add new stores`,
            },
        });
        return result.body;
    }

    /**
     * Get store
     * View information about the specified store
     * @returns StoreData specified store
     * @throws ApiError
     */
    public static async storesGetStore({
        storeId,
    }: {
        /** The store to fetch **/
        storeId: string,
    }): Promise<StoreData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}`,
            errors: {
                403: `If you are authenticated but forbidden to view the specified store`,
                404: `The key is not found for this store`,
            },
        });
        return result.body;
    }

    /**
     * Update store
     * Update the specified store
     * @returns StoreData updated specified store
     * @throws ApiError
     */
    public static async storesUpdateStore({
        storeId,
        requestBody,
    }: {
        /** The store to update **/
        storeId: string,
        requestBody: StoreData,
    }): Promise<StoreData> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/stores/${storeId}`,
            body: requestBody,
            errors: {
                400: `A list of errors that occurred when updating the store`,
                403: `If you are authenticated but forbidden to update the specified store`,
                404: `The key is not found for this store`,
            },
        });
        return result.body;
    }

    /**
     * Remove Store
     * Removes the specified store. If there is another user with access, only your access will be removed.
     * @returns any The store has been removed
     * @throws ApiError
     */
    public static async deleteStoresService({
        storeId,
    }: {
        /** The store to remove **/
        storeId: string,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/stores/${storeId}`,
            errors: {
                400: `A list of errors that occurred when removing the store`,
                403: `If you are authenticated but forbidden to remove the specified store`,
                404: `The key is not found for this store`,
            },
        });
        return result.body;
    }

}