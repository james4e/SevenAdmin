/**
 * Created by shiyangfei on 12/22/14.
 */
Ext.define('SevenAdmin.view.admin.Admin', {
    extend: 'SevenAdmin.component.View',
    xtype: 'admin',
    requires: [
        'SevenAdmin.view.admin.AdminViewController',
        'SevenAdmin.store.admin.AdminStore'
    ],
    controller: 'admin',
    items: [
        {
            xtype: 'container',
            minHeight: 280,
            flex: 1,
            defaults: {
                flex: 1
            },
            items: [
                {
                    xtype: 'c-panel',
                    title: 'Admin Summary',
                    items: [
                        {
                            xtype: 'gridpanel',
                            autoScroll: true,
                            flex: 1,
                            store: Ext.create('SevenAdmin.store.admin.AdminStore'),
                            autoLoadStore: true,
                            columns: {
                                defaults: {
                                    width: 100
                                },
                                items: [
                                    {
                                        text: 'Name',
                                        dataIndex: 'name'
                                    },
                                    {
                                        text: 'Email',
                                        dataIndex: 'email'
                                    }
                                ]
                            }
                        }
                    ],
                    viewPanel: true
                },
                {
                    xtype: 'c-panel',
                    viewPanel: true,
                    title: 'New Admin',
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
                                    name: 'name',
                                    fieldLabel: 'Name'
                                },
                                {
                                    name: 'email',
                                    fieldLabel: 'email'
                                },
                                {
                                    name: 'password',
                                    fieldLabel: 'password',
                                    inputType: 'password'
                                },
                                {
                                    name: 'password1',
                                    fieldLabel: 'password1',
                                    inputType: 'password'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'submit',
                                    itemId: 'submit'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});