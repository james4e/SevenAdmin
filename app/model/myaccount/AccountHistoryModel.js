/**
 * Created by shiyangfei on 1/12/15.
 */
Ext.define('SevenAdmin.model.myaccount.AccountHistoryModel', {
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