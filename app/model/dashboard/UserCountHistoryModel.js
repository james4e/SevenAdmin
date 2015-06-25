/**
 * Created by shiyangfei on 1/12/15.
 */
Ext.define('SevenAdmin.model.dashboard.UserCountHistoryModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'amount',
            type: 'number'
        },
        {
            name: 'date',
            type: 'date'
        }
    ]
});