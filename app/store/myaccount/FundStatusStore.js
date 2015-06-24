//Created by Shiyang Fei on 1/21/2015
Ext.define('SevenAdmin.store.myaccount.FundStatusStore', {
    extend: 'Ext.data.Store',

    requires: [
        'SevenAdmin.model.myaccount.FundStatusModel'
    ],

    model: 'SevenAdmin.model.myaccount.FundStatusModel',

    storeId: 'fundStatus',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/json/fund-status.json',
        reader: {
            type: 'json'
        }
    }
});