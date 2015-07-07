/**
 * Created by shiyangfei on 12/22/14.
 */
Ext.define('SevenAdmin.view.instructor.InstructorGridPanel', {
    extend: 'SevenAdmin.component.Panel',
    xtype: 'instructor-grid-panel',
    autoScroll: true,
    title: 'Instructor Summary',
    requires: [
        'SevenAdmin.store.instructor.InstructorStore',
        'Ext.grid.Panel'
    ],

    initComponent: function () {
        this.items = [
            {
                xtype: 'gridpanel',
                minHeight: 280,
                flex: 1,
                store: Ext.create('SevenAdmin.store.instructor.InstructorStore'),
                autoLoadStore: true,
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
                            text: 'Approved',
                            dataIndex: 'approved'
                        }
                    ]
                }
            }
        ];
        this.callParent(arguments);
    }
});