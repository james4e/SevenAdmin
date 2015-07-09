//Created by Shiyang Fei on 7/7/2015
Ext.define('SevenAdmin.view.admin.AdminViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin',

    control: {
        'form button#submit': {
            'click': 'onFormSubmit'
        }
    },

    onFormSubmit: function (btn) {
        var form = btn.up('form'),
            values = form.getForm().getValues();
        SevenAdmin.Ajax.request({
            url: '/admin/signup',
            scope: this,
            params: form.getValues()
        });
    }
});