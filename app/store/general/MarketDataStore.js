/**
 * Created by sfei on 2015/1/18 0018.
 */
Ext.define('SevenAdmin.store.general.MarketDataStore', {
    extend: 'Ext.data.Store',
    requires: [
        'SevenAdmin.model.general.MarketDataModel'
    ],
    model: 'SevenAdmin.model.general.MarketDataModel',

    storeId: 'asset',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/json/quote.json',
        reader: {
            type: 'json'
        }
    }
});