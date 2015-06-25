/**
 * Created by shiyangfei on 12/22/14.
 */
Ext.define('SevenAdmin.view.student.StudentGridPanel', {
    extend: 'SevenAdmin.component.Panel',
    xtype: 'student-panel',
    autoScroll: true,
    requires: [
        'SevenAdmin.store.student.StudentStore'
    ],
    title: 'Student Management',
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
                    store: Ext.create('SevenAdmin.store.student.StudentStore'),
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
                            },
                            {
                                text: 'Active?',
                                dataIndex: 'isActive',
                                renderer: function (v, m, r, rowIndex, colIndex, store, view) {
                                    return v ? 'YES' : 'NO';
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ]
});