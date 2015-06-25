/**
 * Created by shiyangfei on 12/22/14.
 */
Ext.define('SevenAdmin.view.instructor.InstructorGridPanel', {
    extend: 'SevenAdmin.component.Panel',
    xtype: 'instructor-panel',
    autoScroll: true,
    title: 'Instructor Management',
    requires: [
        'SevenAdmin.store.instructor.InstructorStore',
        'Ext.grid.Panel'
    ],
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
                    xtype: 'gridpanel',
                    store: Ext.create('SevenAdmin.store.instructor.InstructorStore'),
                    columns: {
                        defaults: {
                            flex: 1,
                            minWidth: 100
                        },
                        items: [
                            {
                                text: 'Name',
                                dataIndex: 'name'
                            },
                            {
                                text: 'Email',
                                dataIndex: 'email'
                            },
                            {
                                text: 'WeChat Id',
                                dataIndex: 'wechat'
                            },
                            {
                                text: 'Country',
                                dataIndex: 'country'
                            }
                        ]
                    }
                }
            ]
        }
    ]
});