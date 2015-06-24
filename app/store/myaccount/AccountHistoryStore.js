/**
 * Created by shiyangfei on 1/12/15.
 */
Ext.define('SevenAdmin.store.myaccount.AccountHistoryStore', {
    extend: 'Ext.data.Store',

    requires: [
        'SevenAdmin.model.myaccount.AccountHistoryModel'
    ],

    model: 'SevenAdmin.model.myaccount.AccountHistoryModel',

    storeId: 'accounthistory',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/json/account-history.json',

        reader: {
            type: 'json'
        }
    }
});