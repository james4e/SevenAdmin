/**
 * Created by shiyangfei on 1/12/15.
 */
Ext.define('SevenAdmin.store.dashboard.StaticSummaryStore', {
    extend: 'Ext.data.Store',

    requires: [
        'SevenAdmin.model.dashboard.StaticSummaryModel'
    ],

    model: 'SevenAdmin.model.dashboard.StaticSummaryModel',

    storeId: 'static-summary',

    autoLoad: true,

    proxy: {
        type: 'memory'
    },

    data: [
        {
            header: 'Total Count',
            body: '2533'
        },
        {
            header: 'Students',
            body: '2533'
        },
        {
            header: 'Instructors',
            body: '0'
        }
    ]
});