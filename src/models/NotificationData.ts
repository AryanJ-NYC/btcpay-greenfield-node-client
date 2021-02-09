/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NotificationData = {
    /**
     * The identifier of the notification
     */
    id?: string;
    /**
     * The html body of the notifications
     */
    body?: string;
    /**
     * The link of the notification
     */
    link?: string | null;
    /**
     * The creation time of the notification
     */
    createdTime?: number;
    /**
     * If the notification has been seen by the user
     */
    seen?: boolean;
}
