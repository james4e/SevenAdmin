/**
 * Created by shiyangfei on 12/22/14.
 */
Ext.define('SevenAdmin.view.instructor.InstructorGridPanel', {
    extend: 'SevenAdmin.component.Panel',
    xtype: 'instructor-panel',
    autoScroll: true,
    title: 'Instructor Management',
    requires: [
        'SevenAdmin.store.instructor.InstructorStore'
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
                    xtype: 'grid',
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
                                text: 'First Name',
                                dataIndex: 'firstName'
                            },
                            {
                                text: 'Email',
                                dataIndex: 'email'
                            },
                            {
                                text: 'WeChat Id',
                                dataIndex: 'wechat'
                            }
                        ]
                    }
                }
            ]
        }
    ]
});