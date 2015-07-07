/**
 * Created by shiyangfei on 6/18/15.
 */
Ext.define('SevenAdmin.store.main.LoginSessionStore', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.SessionStorage',
        'SevenAdmin.model.main.CredentialModel'
    ],
    storeId: 'LoginSession',
    model: 'SevenAdmin.model.main.CredentialModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'sessionstorage',
        id: 'loginsessionstorage'
    }
});