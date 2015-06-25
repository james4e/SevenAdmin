/**
 * Created by shiyangfei on 1/12/15.
 */
Ext.define('SevenAdmin.store.dashboard.UserCountHistoryStore', {
    extend: 'Ext.data.Store',

    requires: [
        'SevenAdmin.model.dashboard.UserCountHistoryModel'
    ],

    model: 'SevenAdmin.model.dashboard.UserCountHistoryModel',

    storeId: 'user-count-history',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/json/user-count-history.json',

        reader: {
            type: 'json'
        }
    }
});