/**
 * Created by shiyangfei on 10/5/14.
 */
Ext.define('SevenAdmin.model.main.NavigationModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'number' },
        { name: 'title', type: 'string' },
        { name: 'view', type: 'string' },
        { name: 'default', type: 'boolean' }
    ]
});