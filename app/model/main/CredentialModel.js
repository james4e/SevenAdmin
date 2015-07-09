/**
 * Created by shiyangfei on 6/18/15.
 */
Ext.define('SevenAdmin.model.main.CredentialModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'userId',
            type: 'string'
        }, {
            name: 'roleId',
            type: 'string'
        }, {
            name: 'name',
            type: 'string'
        }
    ]
});