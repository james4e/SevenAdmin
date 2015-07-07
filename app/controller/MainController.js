//Created by Shiyang Fei on 7/7/2015
Ext.define('SevenAdmin.controller.MainController', {
    extend: 'Ext.app.Controller',

    control: {
        'component[autoLoadStore="true"]': {
            render: 'onAutoLoadStoreComponentRender'
        }
    },

    onAutoLoadStoreComponentRender: function (cmp, eOpts) {
        if (cmp.getStore()) {
            cmp.getStore().load();
        }
    }
});