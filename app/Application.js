/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('SevenAdmin.Application', {
    extend: 'Ext.app.Application',
    name: 'SevenAdmin',
    requires: [
        'SevenAdmin.view.login.Login',
        'SevenAdmin.view.main.Main',
        'SevenAdmin.Ajax',
        'SevenAdmin.Env',
        'SevenAdmin.Constants',
        'SevenAdmin.Utils'
    ],
    stores: [
        'main.LoginLocalStore',
        'main.LoginSessionStore'
    ],

    init: function () {
        document.getElementsByTagName('body')[0].removeChild(Ext.get('main-loader').dom);
    },

    launch: function () {
        Ext.create('SevenAdmin.store.main.LoginLocalStore').load();
        Ext.create('SevenAdmin.store.main.LoginSessionStore').load();
        var view,
            userId = SevenAdmin.Utils.getCredential('userId'),
            roleId = SevenAdmin.Utils.getCredential('roleId'),
            name = SevenAdmin.Utils.getCredential('name');
        Ext.Ajax.useDefaultXhrHeader = false;
        if (Ext.isEmpty(userId)) {
            view = Ext.create('SevenAdmin.view.login.Login');
        } else {
            Ext.getStore('LoginSession').add({
                userId: userId,
                roleId: roleId,
                name: name
            });
            view = Ext.create('SevenAdmin.view.main.Main');
        }
        view.getEl().fadeIn({
            duration: 1000
        });
    }
});
