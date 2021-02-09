/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class MiscalleneousService {

    /**
     * Language codes
     * The supported language codes
     * @returns any The supported language codes
     * @throws ApiError
     */
    public static async langCodes(): Promise<Array<{
        /**
         * The language code
         */
        code?: string,
        /**
         * The language name
         */
        currentLanguage?: string,
    }>> {
        const result = await __request({
            method: 'GET',
            path: `/misc/lang`,
        });
        return result.body;
    }

    /**
     * Invoice checkout
     * View the checkout page of an invoice
     * @returns any The checkout page
     * @throws ApiError
     */
    public static async getMiscalleneousService({
        invoiceId,
        lang,
    }: {
        /** The invoice id **/
        invoiceId: string,
        /** The preferred language of the checkout page. You can see the list of language codes with [this operation](#operation/langCodes). **/
        lang?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/i/${invoiceId}`,
            query: {
                'lang': lang,
            },
        });
        return result.body;
    }

}