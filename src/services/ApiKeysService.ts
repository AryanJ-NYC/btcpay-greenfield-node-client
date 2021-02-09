/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiKeyData } from '../models/ApiKeyData';
import { request as __request } from '../core/request';

export class ApiKeysService {

    /**
     * Revoke an API Key
     * Revoke the current API key so that it cannot be used anymore
     * @returns any The key has been deleted
     * @throws ApiError
     */
    public static async deleteApiKeysService({
        apikey,
    }: {
        /** The API Key to revoke **/
        apikey: string,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/api-keys/${apikey}`,
            errors: {
                404: `The key is not found for this user`,
            },
        });
        return result.body;
    }

    /**
     * Get the current API Key information
     * View information about the current API key
     * @returns ApiKeyData Information about the current api key
     * @throws ApiError
     */
    public static async getApiKeysService(): Promise<ApiKeyData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/api-keys/current`,
        });
        return result.body;
    }

    /**
     * Revoke the current API Key
     * Revoke the current API key so that it cannot be used anymore
     * @returns ApiKeyData The key was revoked and is no longer usable
     * @throws ApiError
     */
    public static async deleteApiKeysService1(): Promise<ApiKeyData> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/api-keys/current`,
        });
        return result.body;
    }

    /**
     * Create a new API Key
     * Create a new API Key
     * @returns ApiKeyData Information about the new api key
     * @throws ApiError
     */
    public static async postApiKeysService({
        requestBody,
    }: {
        requestBody?: {
            /**
             * The label of the new API Key
             */
            label?: string | null,
            /**
             * The permissions granted to this API Key (See API Key Authentication)
             */
            permissions?: Array<string> | null,
        },
    }): Promise<ApiKeyData> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/api-keys`,
            body: requestBody,
        });
        return result.body;
    }

}