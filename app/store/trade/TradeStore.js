/**
 * Created by shiyangfei on 1/26/15.
 */
Ext.define('SevenAdmin.store.trade.TradeStore', {
    extend: 'Ext.data.Store',

    requires: [
        'SevenAdmin.model.trade.TradeModel'
    ],

    model: 'SevenAdmin.model.trade.TradeModel',

    storeId: 'trade',

    proxy: {
        type: 'ajax',
        url: 'data/json/order.json',
        reader: {
            type: 'json'
        }
    }
});