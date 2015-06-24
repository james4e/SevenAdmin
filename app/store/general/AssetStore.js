/**
 * Created by shiyangfei on 1/3/15.
 */
Ext.define('SevenAdmin.store.general.AssetStore', {
    extend: 'Ext.data.Store',
    requires: [
        'SevenAdmin.model.general.AssetModel'
    ],
    model: 'SevenAdmin.model.general.AssetModel',
    sorters: 'symbol',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/json/assets.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});