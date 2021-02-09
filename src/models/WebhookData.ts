/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookDataBase } from './WebhookDataBase';

export type WebhookData = (WebhookDataBase & {
    /**
     * The id of the webhook
     */
    id?: string,
});
