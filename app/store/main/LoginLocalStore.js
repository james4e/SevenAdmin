/**
 * Created by shiyangfei on 6/20/15.
 */
Ext.define('SevenAdmin.store.main.LoginLocalStore', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.LocalStorage',
        'SevenAdmin.model.main.CredentialModel'
    ],
    storeId: 'LoginLocal',
    model: 'SevenAdmin.model.main.CredentialModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'localstorage',
        id: 'loginlocalstorage'
    }
});