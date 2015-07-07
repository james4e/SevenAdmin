/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 */
Ext.define('SevenAdmin.view.main.Main', {
    extend: 'Ext.container.Viewport',
    requires: [
        'SevenAdmin.view.main.MainViewController',
        'SevenAdmin.view.main.MainViewModel',
        'SevenAdmin.view.main.Navigation',
        'SevenAdmin.view.main.Header',
        'SevenAdmin.view.main.Center',
        'SevenAdmin.component.Button',
        'SevenAdmin.component.Panel',
        'SevenAdmin.component.View',
        'SevenAdmin.Utils',
        'SevenAdmin.component.chart.ux.Highcharts'
    ],
    xtype: 'app-main',
    controller: 'main',
    cls: 'main',
    layout: {
        type: 'border'
    },
    items: [
        {
            region: 'west',
            xtype: 'container',
            width: 250,
            split: false,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start'
            },
            items: [
                {
                    xtype: 'app-header',
                    itemId: 'header',
                    height: 80
                },
                {
                    xtype: 'navigation',
                    itemId: 'navigation',
                    flex: 1,
                    listeners: {
                        'itemclick': 'onNavigationItemClick',
                        'scope': 'controller'
                    }
                }
            ]
        },
        {
            region: 'center',
            xtype: 'center',
            reference: 'center'
        }
    ]
});
