/**
 * Created by sfei on 10/6/2014.
 */
Ext.define('SevenAdmin.view.launch.Launch', {
    extend: 'Ext.container.Container',
    requires: [
        'SevenAdmin.view.main.Main',
        'SevenAdmin.view.login.Login'
    ],
    xtype: 'app-launch',
    layout: {
        type: 'border'
    },
    items: [
        {
            region: 'center',
            layout: 'card',
            xtype: 'container',
            activeItem: 'main',
            items: [
                {
                    xtype: 'app-main',
                    itemId: 'main'
                },
                {
                    xtype: 'app-login',
                    itemId: 'login'
                }
            ]
        }
    ]
});
