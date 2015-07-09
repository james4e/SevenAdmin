//Created by Shiyang Fei on 7/7/2015
/**
 * Created by shiyangfei on 12/22/14.
 */
Ext.define('SevenAdmin.view.instructor.InstructorFormPanel', {
    extend: 'SevenAdmin.component.Panel',
    xtype: 'instructor-form-panel',
    requires: [
        'Ext.form.field.File',
        'Ext.form.field.Display',
        'Ext.form.field.Tag',
        'SevenAdmin.store.instructor.InstructorStore',
        'Ext.grid.Panel'
    ],
    autoScroll: true,
    title: 'Mentor Detail',
    viewModel: {
        data: {
            header: 'Mentor',
            imageHtml: '<div class="image-preview center-block" style="background-image:url(resources/images/unknown-user.png)"></div>'
        }
    },
    items: [
        {
            xtype: 'form',
            autoScroll: true,
            style: {
                'padding': '15px'
            },
            minHeight: 280,
            flex: 1,
            layout: 'anchor',
            defaults: {
                anchor: '-20px'
            },
            defaultType: 'textfield',
            items: [
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'container',
                            bind: {
                                html: '{imageHtml}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'fileuploadfield',
                    name: 'profileImage',
                    buttonOnly: true,
                    hideLabel: true,
                    buttonText: 'Update Profile Image'
                },
                {
                    fieldLabel: 'Approved',
                    xtype: 'displayfield',
                    name: 'approved',
                    maxWidth: 300,
                    renderer: function (v) {
                        return v === true ? 'YES' : 'NO';
                    }
                },
                {
                    fieldLabel: 'Name',
                    name: 'name'
                },
                {
                    fieldLabel: 'Email',
                    name: 'email',
                    vtype: 'email'
                },
                {
                    fieldLabel: 'Password',
                    name: 'password',
                    inputType: 'password',
                    vtype: 'password',
                    itemId: 'password',
                    submitValue: false
                },
                {
                    fieldLabel: 'Verify',
                    name: 'verify',
                    inputType: 'password',
                    vtype: 'password',
                    initialPassField: 'password',
                    submitValue: false
                },
                {
                    fieldLabel: 'School',
                    xtype: 'school-combo',
                    name: 'school',
                    displayField: 'text',
                    valueField: 'text'
                },
                {
                    fieldLabel: 'Majors',
                    xtype: 'majors-tag',
                    name: 'majors',
                    displayField: 'text',
                    valueField: 'text',
                    submitValue: false
                },
                {
                    fieldLabel: 'Subjects',
                    xtype: 'subjects-tag',
                    name: 'subjects',
                    displayField: 'text',
                    valueField: 'text',
                    submitValue: false
                },
                {
                    fieldLabel: 'Degree',
                    xtype: 'degree-combo',
                    name: 'degree'
                },
                {
                    fieldLabel: 'Phone',
                    name: 'phone'
                },
                {
                    fieldLabel: 'QQ',
                    name: 'qq'
                },
                {
                    fieldLabel: 'Weixin',
                    name: 'weixin'
                },
                {
                    fieldLabel: 'Country',
                    xtype: 'country-combo',
                    name: 'country'
                },
                {
                    fieldLabel: 'State',
                    name: 'state'
                },
                {
                    fieldLabel: 'Zip',
                    name: 'zip'
                },
                {
                    fieldLabel: 'Description',
                    xtype: 'textarea',
                    name: 'description'
                },
                {
                    fieldLabel: 'ID',
                    xtype: 'displayfield',
                    submitValue: true,
                    name: 'teacherId'
                },
                {
                    fieldLabel: 'Sign Up Date',
                    xtype: 'displayfield',
                    name: 'signupDate',
                    renderer: Ext.util.Format.dateRenderer('Y-m-d')
                }
            ],

            buttons: [
                {
                    text: 'Delete',
                    itemId: 'delete',
                    tooltip: 'Cancel the membership of this mentor. He will not be displayed to students any more.'
                },
                {
                    xtype: 'tbfill'
                },
                {
                    text: 'Approve',
                    itemId: 'approve',
                    tooltip: 'Approve a mentor. Mentor will only be displayed in our web after approval.',
                    bind: {
                        disabled: '{form.approved}'
                    }
                },
                {
                    text: 'Submit',
                    itemId: 'submit',
                    formBind: true,
                    disabled: true

                }
            ]
        }
    ]
});