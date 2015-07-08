//Created by Shiyang Fei on 7/7/2015
Ext.define('SevenAdmin.view.instructor.InstructorViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.instructor',

    control: {
        'gridpanel': {
            'rowclick': 'onGridRowSelect'
        },
        'form button#submit': {
            'click': 'onFormSubmit'
        },
        'form button#delete': {
            'click': 'onFormDelete'
        },
        'form button#approve': {
            'click': 'onFormApprove'
        }
    },

    onGridRowSelect: function (grid, record, tr, rowIndex, e, eOpts) {
        var form = this.view.down('form');
        form.up('c-panel').getViewModel().set('form', record.data);
        form.up('c-panel').getViewModel().set('header', record.data.name || 'New');
        form.getForm().setValues(record.data);
    },

    onFormSubmit: function (btn) {
        var me = this,
            form = btn.up('form'),
            formData = form.getForm().getValues();
        SevenAdmin.Ajax.request({
            url: '/admin/teacher',
            scope: me,
            params: Ext.apply(formData, {
                action: 'edit'
            }),
            successFn: function (response) {
                me.onFormActionSuccess('updated');
            }
        });
    },

    onFormDelete: function (btn) {
        var me = this,
            form = btn.up('form'),
            formData = form.getForm().getValues();
        SevenAdmin.Ajax.request({
            url: '/admin/teacher',
            scope: me,
            params: {
                action: 'delete',
                teacherId: formData.teacherId
            },
            successFn: function (response) {
                me.onFormActionSuccess('deleted');
            }
        });
    },

    onFormApprove: function (btn) {
        var me = this,
            form = btn.up('form'),
            formData = form.getForm().getValues();
        SevenAdmin.Ajax.request({
            url: '/admin/teacher',
            scope: me,
            params: {
                action: 'edit',
                teacherId: formData.teacherId,
                approved: true
            },
            successFn: function (response) {
                me.onFormActionSuccess('approved');
            }
        });
    },

    onFormActionSuccess: function (actionName) {
        var grid = this.view.down('gridpanel');
        grid.getStore().load();
        Ext.toast({
            html: 'Mentor data ' + actionName,
            closable: false,
            width: 200,
            align: 't'
        });
    }
});