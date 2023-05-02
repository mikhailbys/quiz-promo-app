import {
    APP_DB_NAME,
    CURRENT_VERSION,
    defaultObjectStoreOptions,
    InitStoreModel
} from "./Database.helpers";

import { IDBPDatabase, openDB } from 'idb';

export class IndexedDb {
    database: IDBPDatabase | null;

    constructor() {
        this.database = null;
    }

    public async createObjectStore(model: InitStoreModel) {
        try {
            this.database = await openDB(APP_DB_NAME, CURRENT_VERSION, {
                upgrade(db: IDBPDatabase) {
                    if (!db.objectStoreNames.contains(model.name)) {
                        const { name, keys } = model;
                        const newStore = db.createObjectStore(name, defaultObjectStoreOptions);
                        keys.forEach(key => {
                            newStore.createIndex(`${key}_index`, key);
                        })
                    }
                },
            });
        } catch (error) {
            return false;
        }
    }

    public async getValue(storeName: string, id: number) {
        const transaction = this.database?.transaction(storeName, 'readonly');
        if (transaction) {
            const store = transaction.objectStore(storeName);
            const result = await store.get(id);
            //console.log('Get Data ', JSON.stringify(result));
            return result;
        }
    }

    public async getValueByIndex(storeName: string, fieldName: string, value: any) {
        const transaction = this.database?.transaction(storeName, 'readonly');
        if (transaction) {
            const store = transaction.objectStore(storeName);
            let index = store.index(`${fieldName}_index`);
            const result = await index.get(value);
            return result;
        }
    }

    public async putValue(storeName: string, value: object) {
        const transaction = this.database?.transaction(storeName, 'readwrite');
        if (transaction) {
            const store = transaction.objectStore(storeName);
            const result = await store.put(value);
            return result;
        }
    }
}