/**
 * Created by shiyangfei on 10/5/14.
 */
Ext.define('SevenAdmin.store.main.NavigationStore', {
    extend: 'Ext.data.Store',

    requires: [
        'SevenAdmin.model.main.NavigationModel'
    ],

    model: 'SevenAdmin.model.main.NavigationModel',

    storeId: 'navigation',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/json/navigation.json',

        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});