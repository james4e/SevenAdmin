//Created by Shiyang Fei on 1/21/2015
Ext.define('SevenAdmin.store.dashboard.UserLocationDistStore', {
    extend: 'Ext.data.Store',

    requires: [
        'SevenAdmin.model.dashboard.UserLocationDistModel'
    ],

    model: 'SevenAdmin.model.dashboard.UserLocationDistModel',

    storeId: 'UserLocationDist',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/json/user-location-dist.json',
        reader: {
            type: 'json'
        }
    }
});