/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('SevenAdmin.Application', {
    extend: 'Ext.app.Application',
    name: 'SevenAdmin',
    requires: [
        'SevenAdmin.view.launch.Launch'
    ],
    stores: [
        'SevenAdmin.store.general.AssetStore'
    ],

    init: function () {
        document.getElementsByTagName('body')[0].removeChild(Ext.get('main-loader').dom);
    },

    launch: function () {
        Ext.ComponentQuery.query('app-main')[0].getEl().fadeIn({
            duration: 1000
        });
    }
});
