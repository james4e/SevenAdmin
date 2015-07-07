/**
 * Created by sfei on 10/6/2014.
 */
Ext.define('SevenAdmin.view.login.Login', {
    extend: 'Ext.container.Viewport',
    requires: [
        'SevenAdmin.view.login.LoginController'
    ],
    xtype: 'app-login',
    config: {
        cls: 'login',
        html: '<div class="title">Shiyang Test</div>'
    },

    initComponent: function () {
        this.callParent(arguments);
        this.createLoginWindow();
    },

    createLoginWindow: function () {
        Ext.create('Ext.window.Window', {
            title: 'Login',
            controller: 'login',
            reference: 'window',
            bodyPadding: 10,
            closable: false,
            autoShow: true,
            items: {
                xtype: 'form',
                reference: 'form',
                items: [{
                    xtype: 'textfield',
                    name: 'email',
                    fieldLabel: 'Email',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    name: 'password',
                    inputType: 'password',
                    fieldLabel: 'Password',
                    allowBlank: false
                }],
                buttons: [{
                    text: 'Login',
                    formBind: true,
                    disabled: true,
                    handler: 'onSubmit'
                }]
            }
        });
    }
});
