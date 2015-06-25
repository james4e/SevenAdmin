/**
 * Created by shiyangfei on 12/22/14.
 */
Ext.define('SevenAdmin.view.dashboard.DashBoard', {
    extend: 'SevenAdmin.component.View',
    xtype: 'c-dashboard',
    requires: [
        'SevenAdmin.view.dashboard.UserCountHistory',
        'SevenAdmin.view.dashboard.UserLocationDist',
        'SevenAdmin.view.dashboard.StaticSummary'
    ],
    autoScroll: true,
    items: [
        {
            xtype: 'container',
            minHeight: 280,
            flex: 1,
            defaults: {
                flex: 1
            },
            items: [
                {
                    xtype: 'statics-summary',
                    viewPanel: true
                }
            ]
        },
        {
            xtype: 'container',
            minHeight: 280,
            flex: 1,
            defaults: {
                flex: 1
            },
            items: [
                {
                    xtype: 'user-count-history',
                    viewPanel: true
                },
                {
                    xtype: 'user-location-dist',
                    viewPanel: true
                }
            ]
        }
    ]
});