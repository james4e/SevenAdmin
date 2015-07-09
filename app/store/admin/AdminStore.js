//Created by Shiyang Fei on 1/21/2015
Ext.define('SevenAdmin.store.admin.AdminStore', {
    extend: 'Ext.data.Store',
    fields: ['name', 'email'],
    params: {
        action: 'load'
    },
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'GET'
        },
        useDefaultXhrHeader: false,
        url: SevenAdmin.Utils.getAPIUrl('/admin/user-list'),
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});