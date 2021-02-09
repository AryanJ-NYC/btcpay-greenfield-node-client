/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebhookData } from '../models/WebhookData';
import type { WebhookDataBase } from '../models/WebhookDataBase';
import type { WebhookDataCreate } from '../models/WebhookDataCreate';
import type { WebhookDataList } from '../models/WebhookDataList';
import type { WebhookDeliveryData } from '../models/WebhookDeliveryData';
import type { WebhookDeliveryList } from '../models/WebhookDeliveryList';
import { request as __request } from '../core/request';

export class WebhooksService {

    /**
     * Get webhooks of a store
     * View webhooks of a store
     * @returns WebhookDataList List of webhooks
     * @throws ApiError
     */
    public static async webhokksGetWebhooks({
        storeId,
    }: {
        /** The store id **/
        storeId: string,
    }): Promise<WebhookDataList> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/webhooks`,
        });
        return result.body;
    }

    /**
     * Create a new webhook
     * Create a new webhook
     * @returns WebhookDataCreate Information about the new webhook
     * @throws ApiError
     */
    public static async postWebhooksService({
        storeId,
        requestBody,
    }: {
        /** The store id **/
        storeId: string,
        requestBody: WebhookDataCreate,
    }): Promise<WebhookDataCreate> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/stores/${storeId}/webhooks`,
            body: requestBody,
            errors: {
                400: `A list of errors that occurred when creating the webhook`,
            },
        });
        return result.body;
    }

    /**
     * Get a webhook of a store
     * View webhook of a store
     * @returns WebhookData A webhook
     * @throws ApiError
     */
    public static async webhokksGetWebhook({
        storeId,
        webhookId,
    }: {
        /** The store id **/
        storeId: string,
        /** The webhook id **/
        webhookId: string,
    }): Promise<WebhookData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/webhooks/${webhookId}`,
            errors: {
                404: `The webhook has not been found`,
            },
        });
        return result.body;
    }

    /**
     * Update a webhook
     * Update a webhook
     * @returns WebhookData Information about the updated webhook
     * @throws ApiError
     */
    public static async putWebhooksService({
        storeId,
        webhookId,
        requestBody,
    }: {
        /** The store id **/
        storeId: string,
        /** The webhook id **/
        webhookId: string,
        requestBody: WebhookDataBase,
    }): Promise<WebhookData> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/stores/${storeId}/webhooks/${webhookId}`,
            body: requestBody,
            errors: {
                400: `A list of errors that occurred when creating the webhook`,
            },
        });
        return result.body;
    }

    /**
     * Delete a webhook
     * Delete a webhook
     * @returns any The webhook has been deleted
     * @throws ApiError
     */
    public static async deleteWebhooksService({
        storeId,
        webhookId,
        requestBody,
    }: {
        /** The store id **/
        storeId: string,
        /** The webhook id **/
        webhookId: string,
        requestBody: WebhookDataBase,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/stores/${storeId}/webhooks/${webhookId}`,
            body: requestBody,
            errors: {
                404: `The webhook does not exist`,
            },
        });
        return result.body;
    }

    /**
     * Get latest deliveries
     * List the latest deliveries to the webhook, ordered from the most recent
     * @returns WebhookDeliveryList List of deliveries
     * @throws ApiError
     */
    public static async getWebhooksService({
        storeId,
        webhookId,
        count,
    }: {
        /** The store id **/
        storeId: string,
        /** The webhook id **/
        webhookId: string,
        /** The number of latest deliveries to fetch **/
        count?: string,
    }): Promise<WebhookDeliveryList> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/webhooks/${webhookId}/deliveries`,
            query: {
                'count': count,
            },
        });
        return result.body;
    }

    /**
     * Get a webhook delivery
     * Information about a webhook delivery
     * @returns WebhookDeliveryData Information about a delivery
     * @throws ApiError
     */
    public static async getWebhooksService1({
        storeId,
        webhookId,
        deliveryId,
    }: {
        /** The store id **/
        storeId: string,
        /** The webhook id **/
        webhookId: string,
        /** The id of the delivery **/
        deliveryId: string,
    }): Promise<WebhookDeliveryData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/webhooks/${webhookId}/deliveries/${deliveryId}`,
            errors: {
                404: `The delivery does not exists.`,
            },
        });
        return result.body;
    }

    /**
     * Get the delivery's request
     * The delivery's JSON request sent to the endpoint
     * @returns any The delivery's JSON Request
     * @throws ApiError
     */
    public static async getWebhooksService2({
        storeId,
        webhookId,
        deliveryId,
    }: {
        /** The store id **/
        storeId: string,
        /** The webhook id **/
        webhookId: string,
        /** The id of the delivery **/
        deliveryId: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/webhooks/${webhookId}/deliveries/${deliveryId}/request`,
            errors: {
                404: `The delivery does not exists.`,
            },
        });
        return result.body;
    }

    /**
     * Redeliver the delivery
     * Redeliver the delivery
     * @returns string The new delivery id being broadcasted. (Broadcast happen asynchronously with this call)
     * @throws ApiError
     */
    public static async postWebhooksService1({
        storeId,
        webhookId,
        deliveryId,
    }: {
        /** The store id **/
        storeId: string,
        /** The webhook id **/
        webhookId: string,
        /** The id of the delivery **/
        deliveryId: string,
    }): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/stores/${storeId}/webhooks/${webhookId}/deliveries/${deliveryId}/redeliver`,
            errors: {
                404: `The delivery does not exists.`,
            },
        });
        return result.body;
    }

}