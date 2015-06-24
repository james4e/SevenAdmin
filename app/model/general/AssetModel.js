/**
 * Created by shiyangfei on 1/3/15.
 */
Ext.define('SevenAdmin.model.general.AssetModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'symbol', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'exchange', type: 'string' }
    ]
});