/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOnChainTransactionRequest } from '../models/CreateOnChainTransactionRequest';
import type { OnChainWalletAddressData } from '../models/OnChainWalletAddressData';
import type { OnChainWalletOverviewData } from '../models/OnChainWalletOverviewData';
import type { OnChainWalletTransactionData } from '../models/OnChainWalletTransactionData';
import type { OnChainWalletUTXOData } from '../models/OnChainWalletUTXOData';
import type { TransactionStatus } from '../models/TransactionStatus';
import { request as __request } from '../core/request';

export class StoreWalletOnChainService {

    /**
     * Get store on-chain wallet overview
     * View information about the specified wallet
     * @returns OnChainWalletOverviewData specified wallet
     * @throws ApiError
     */
    public static async storeOnChainWalletsShowOnChainWalletOverview({
        storeId,
        cryptoCode,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The crypto code of the payment method to fetch **/
        cryptoCode: string,
    }): Promise<OnChainWalletOverviewData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/payment-methods/OnChain/${cryptoCode}/wallet`,
            errors: {
                403: `If you are authenticated but forbidden to view the specified store`,
                404: `The key is not found for this store/wallet`,
            },
        });
        return result.body;
    }

    /**
     * Get store on-chain wallet address
     * Get or generate address for wallet
     * @returns OnChainWalletAddressData reserved address
     * @throws ApiError
     */
    public static async storeOnChainWalletsGetOnChainWalletReceiveAddress({
        storeId,
        cryptoCode,
        forceGenerate,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The crypto code of the payment method to fetch **/
        cryptoCode: string,
        /** Whether to generate a new address for this request even if the previous one was not used **/
        forceGenerate?: string,
    }): Promise<OnChainWalletAddressData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/payment-methods/OnChain/${cryptoCode}/wallet/address`,
            query: {
                'forceGenerate': forceGenerate,
            },
            errors: {
                403: `If you are authenticated but forbidden to view the specified store`,
                404: `The key is not found for this store/wallet`,
            },
        });
        return result.body;
    }

    /**
     * UnReserve last store on-chain wallet address
     * UnReserve address
     * @returns any address unreserved
     * @throws ApiError
     */
    public static async storeOnChainWalletsUnReserveOnChainWalletReceiveAddress({
        storeId,
        cryptoCode,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The crypto code of the payment method to fetch **/
        cryptoCode: string,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/stores/${storeId}/payment-methods/OnChain/${cryptoCode}/wallet/address`,
            errors: {
                403: `If you are authenticated but forbidden to view the specified store`,
                404: `The key is not found for this store/wallet or there was no address reserved`,
            },
        });
        return result.body;
    }

    /**
     * Get store on-chain wallet transactions
     * Get store on-chain wallet transactions
     * @returns OnChainWalletTransactionData transactions list
     * @throws ApiError
     */
    public static async storeOnChainWalletsShowOnChainWalletTransactions({
        storeId,
        cryptoCode,
        statusFilter,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The crypto code of the wallet to fetch **/
        cryptoCode: string,
        /** statuses to filter the transactions with **/
        statusFilter?: Array<TransactionStatus>,
    }): Promise<Array<OnChainWalletTransactionData>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/payment-methods/OnChain/${cryptoCode}/wallet/transactions`,
            query: {
                'statusFilter': statusFilter,
            },
            errors: {
                403: `If you are authenticated but forbidden to view the specified store`,
                404: `The key is not found for this store/wallet`,
            },
        });
        return result.body;
    }

    /**
     * Create store on-chain wallet transaction
     * Create store on-chain wallet transaction
     * @returns any the tx
     * @throws ApiError
     */
    public static async storeOnChainWalletsCreateOnChainTransaction({
        storeId,
        cryptoCode,
        requestBody,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The crypto code of the wallet **/
        cryptoCode: string,
        requestBody: CreateOnChainTransactionRequest,
    }): Promise<(string | OnChainWalletTransactionData)> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/stores/${storeId}/payment-methods/OnChain/${cryptoCode}/wallet/transactions`,
            body: requestBody,
            errors: {
                403: `If you are authenticated but forbidden to view the specified store`,
                404: `The key is not found for this store/wallet`,
            },
        });
        return result.body;
    }

    /**
     * Get store on-chain wallet transactions
     * Get store on-chain wallet transaction
     * @returns OnChainWalletTransactionData transaction
     * @throws ApiError
     */
    public static async storeOnChainWalletsGetOnChainWalletTransaction({
        storeId,
        cryptoCode,
        transactionId,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The crypto code of the wallet to fetch **/
        cryptoCode: string,
        /** The transaction id to fetch **/
        transactionId: string,
    }): Promise<OnChainWalletTransactionData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/payment-methods/OnChain/${cryptoCode}/wallet/transactions/${transactionId}`,
            errors: {
                403: `If you are authenticated but forbidden to view the specified store`,
                404: `The key is not found for this store/wallet`,
            },
        });
        return result.body;
    }

    /**
     * Get store on-chain wallet UTXOS
     * Get store on-chain wallet utxos
     * @returns OnChainWalletUTXOData utxo list
     * @throws ApiError
     */
    public static async storeOnChainWalletsGetOnChainWalletUtxOs({
        storeId,
        cryptoCode,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The crypto code of the wallet to fetch **/
        cryptoCode: string,
    }): Promise<Array<OnChainWalletUTXOData>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/payment-methods/OnChain/${cryptoCode}/wallet/utxos`,
            errors: {
                403: `If you are authenticated but forbidden to view the specified store`,
                404: `The key is not found for this store/wallet`,
            },
        });
        return result.body;
    }

}