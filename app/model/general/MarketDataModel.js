/**
 * Created by sfei on 2015/1/18 0018.
 */
Ext.define('SevenAdmin.model.general.MarketDataModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'Symbol', type: 'string' },
        { name: 'LastPrice', type: 'number' },
        { name: 'Change', type: 'number' },
        { name: 'ChangePercent', type: 'number', convert: function (value, record) {
            return (value / 100);
        }},
        { name: 'Volume', type: 'number' },
        { name: 'Bid', type: 'number' },
        { name: 'Ask', type: 'number' }
    ]
});