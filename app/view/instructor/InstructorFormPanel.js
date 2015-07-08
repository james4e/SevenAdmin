//Created by Shiyang Fei on 7/7/2015
/**
 * Created by shiyangfei on 12/22/14.
 */
Ext.define('SevenAdmin.view.instructor.InstructorFormPanel', {
    extend: 'SevenAdmin.component.Panel',
    xtype: 'instructor-form-panel',
    autoScroll: true,
    title: 'Mentor Detail',
    viewModel: {
        data: {
            header: 'Mentor',
            imageHtml: '<div class="image-preview center-block" style="background-image:url(resources/images/unknown-user.png)"></div>'
        }
    },
    requires: [
        'SevenAdmin.store.instructor.InstructorStore',
        'Ext.grid.Panel'
    ],
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
                    allowBlank: false,
                    maxWidth: 300,
                    renderer: function (v) {
                        return v === true ? 'YES' : 'NO';
                    }
                },
                {
                    fieldLabel: 'Name',
                    name: 'name',
                    allowBlank: false
                },
                {
                    fieldLabel: 'Email',
                    name: 'email',
                    allowBlank: false
                },
                {
                    fieldLabel: 'School',
                    xtype: 'school-combo',
                    name: 'school'
                },
                {
                    fieldLabel: 'Majors',
                    xtype: 'majors-tag',
                    name: 'majors'
                },
                {
                    fieldLabel: 'Subjects',
                    xtype: 'subjects-tag',
                    name: 'subjects'
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
                    itemId: 'delete'
                },
                {
                    xtype: 'tbfill'
                },
                {
                    text: 'Approve',
                    itemId: 'approve',
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