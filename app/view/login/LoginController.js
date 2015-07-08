/**
 * Created by shiyangfei on 7/7/15.
 */
Ext.define('SevenAdmin.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onSubmit: function () {
        var me = this,
            form = this.lookupReference('form');
        if (form.isValid()) {
            SevenAdmin.Ajax.request({
                url: '/admin/login',
                scope: me,
                params: form.getValues(),
                successFn: function (response) {
                    me.onLoginSuccess(response);
                }
            });
        }
    },

    onLoginSuccess: function (userInfo) {
        //Double check if the user is an admin user
        if (userInfo.roleId == 3) {
            var me = this;
            me.setSessionAfterLogin(userInfo);
            me.clearLoginView();
            me.switchToMainView();
        } else {
            Ext.Msg.alert('Error', 'Login Failed');
        }
    },

    setSessionAfterLogin: function (r) {
        var credential = {}
        for (var f in r) {
            credential[f] = r[f];
        }
        SevenAdmin.Utils.clearAllSession();
        Ext.getStore('LoginSession').add(credential);
        Ext.getStore('LoginSession').sync();
        Ext.getStore('LoginLocal').add(credential);
        Ext.getStore('LoginLocal').sync();
    },

    switchToMainView: function () {
        var view = Ext.create('SevenAdmin.view.main.Main');
        view.getEl().fadeIn({
            duration: 1000
        });
    },

    clearLoginView: function () {
        this.view.parentView.destroy();
        this.view.destroy();
    }
});