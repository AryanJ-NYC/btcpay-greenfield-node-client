/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationData } from '../models/NotificationData';
import type { UpdateNotification } from '../models/UpdateNotification';
import { request as __request } from '../core/request';

export class NotificationsCurrentUserService {

    /**
     * Get notifications
     * View current user's notifications
     * @returns NotificationData list of notifications
     * @throws ApiError
     */
    public static async notificationsGetNotifications({
        seen,
    }: {
        /** filter by seen notifications **/
        seen?: string | null,
    }): Promise<NotificationData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/users/me/notifications`,
            query: {
                'seen': seen,
            },
        });
        return result.body;
    }

    /**
     * Get notification
     * View information about the specified notification
     * @returns NotificationData specified notification
     * @throws ApiError
     */
    public static async notificationsGetInvoice({
        id,
    }: {
        /** The notification to fetch **/
        id: string,
    }): Promise<NotificationData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/users/me/notifications/${id}`,
            errors: {
                403: `If you are authenticated but forbidden to view the specified notification`,
                404: `The key is not found for this notification`,
            },
        });
        return result.body;
    }

    /**
     * Update notification
     * Updates the notification
     * @returns NotificationData updated notification
     * @throws ApiError
     */
    public static async notificationsUpdateNotification({
        id,
        requestBody,
    }: {
        /** The notification to update **/
        id: string,
        requestBody: UpdateNotification,
    }): Promise<NotificationData> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/users/me/notifications/${id}`,
            body: requestBody,
            errors: {
                403: `If you are authenticated but forbidden to update the specified notification`,
                404: `The key is not found for this notification`,
            },
        });
        return result.body;
    }

    /**
     * Remove Notification
     * Removes the specified notification.
     * @returns any The notification has been deleted
     * @throws ApiError
     */
    public static async notificationsDeleteNotification({
        id,
    }: {
        /** The notification to remove **/
        id: string,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/users/me/notifications/${id}`,
            errors: {
                403: `If you are authenticated but forbidden to remove the specified notification`,
                404: `The key is not found for this notification`,
            },
        });
        return result.body;
    }

}