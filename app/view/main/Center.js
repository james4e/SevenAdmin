/**
 * Created by shiyangfei on 10/5/14.
 */
Ext.define('SevenAdmin.view.main.Center', {
    extend: 'Ext.container.Container',
    xtype: 'center',
    layout: 'card',
    activeItem: 0,
    requires: [
        'SevenAdmin.view.dashboard.DashBoard'
    ],
    items: [
        {
            xtype: 'c-dashboard'
        }
    ]
});