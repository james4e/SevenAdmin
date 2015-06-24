//Created by Shiyang Fei on 1/20/2015
Ext.define('SevenAdmin.store.position.PositionStore', {
    extend: 'Ext.data.Store',

    requires: [
        'SevenAdmin.model.position.PositionModel'
    ],

    model: 'SevenAdmin.model.position.PositionModel',

    storeId: 'position',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/json/quote.json',

        reader: {
            type: 'json'
        }
    }
});