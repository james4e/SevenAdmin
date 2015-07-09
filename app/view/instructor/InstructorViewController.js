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
        },
        'gridpanel button#new': {
            'click': 'onGridNew'
        },
        'fileuploadfield[name="profileImage"]': {
            'change': 'onProfileImageChanged'
        },
        'form textfield[name="password"]': {
            'validitychange': function (field) {
                field.next().validate();
            },
            'blur': function (field) {
                field.next().validate();
            }
        }
    },

    onGridRowSelect: function (grid, record, tr, rowIndex, e, eOpts) {
        var form = this.view.down('form');
        form.up('c-panel').getViewModel().set('form', record.data);
        form.up('c-panel').getViewModel().set('imageHtml', this.getImageHtml(record.get('profileImage')));
        form.up('c-panel').updateTitle(record.get('name') || 'New');
        form.getForm().reset();
        form.getForm().setValues(record.data);
    },

    getImageHtml: function (image) {
        var url = image ? SevenAdmin.Utils.getImageUrl(image, 'profile') : 'resources/images/unknown-user.png',
            backgroundUrl = 'url(' + url + ')';
        return '<div class="image-preview center-block" style="background-image:' + backgroundUrl + '"></div>';
    },

    onFormSubmit: function (btn) {
        var me = this,
            form = btn.up('form'),
            values = form.getForm().getValues(),
            action = values.teacherId ? 'edit' : 'create',
            majors = form.down('majors-tag').getValue(),
            subjects = form.down('subjects-tag').getValue();
        if (form.isValid()) {
            SevenAdmin.Utils.submitForm(form, {
                url: SevenAdmin.Utils.getAPIUrl('/admin/teacher'),
                params: {
                    action: action,
                    majors: Ext.encode(majors),
                    subjects: Ext.encode(subjects)
                },
                waitMsg: 'Submitting mentor information',
                callback: function (res, o) {
                    form.up('c-view').down('gridpanel').getStore().load();
                },
                scope: me
            });
        }
    },

    onFormDelete: function (btn) {
        var me = this,
            form = btn.up('form');
        if (form.isValid()) {
            me.changeMentorApprovedStatus(form, false)
        }
    },

    onFormApprove: function (btn) {
        var me = this,
            form = btn.up('form');
        if (form.isValid()) {
            me.changeMentorApprovedStatus(form, true)
        }
    },

    changeMentorApprovedStatus: function (form, approved) {
        var me = this;
        SevenAdmin.Utils.submitForm(form, {
            url: SevenAdmin.Utils.getAPIUrl('/admin/teacher'),
            params: {
                action: 'edit',
                approved: approved
            },
            waitMsg: 'Submitting mentor information',
            callback: function (res, o) {
                form.up('c-view').down('gridpanel').getStore().load();
            },
            scope: me
        });
    },

    onGridNew: function (btn) {
        var grid = btn.up('gridpanel');
        var r = Ext.create('SevenAdmin.model.instructor.InstructorModel', {
            name: 'New Mentor',
            approved: false,
            signupDate: new Date(),
            majors: [],
            subjects: []
        });
        grid.getStore().insert(0, r);
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
    },

    onProfileImageChanged: function (field, value, eOpts) {
        var inputElement = field.getEl().down('input[type="file"]'),
            file = inputElement.dom.files[0],
            previewBox = field.up('form').getEl().down('.image-preview'),
            reader = new FileReader();
        reader.onload = function (e) {
            previewBox.setStyle('background-image', 'url(' + e.target.result + ')')
        };
        reader.readAsDataURL(file);
    }
});