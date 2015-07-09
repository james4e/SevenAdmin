/**
 * Created by shiyangfei on 12/22/14.
 */
Ext.define('SevenAdmin.view.instructor.InstructorGridPanel', {
    extend: 'SevenAdmin.component.Panel',
    xtype: 'instructor-grid-panel',
    autoScroll: true,
    title: 'Mentor Summary',
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
                        width: 100
                    },
                    items: [
                        {
                            text: 'Approved',
                            dataIndex: 'approved',
                            renderer: function (v) {
                                return v === true ? 'YES' : 'NO';
                            }
                        },
                        {
                            text: 'Name',
                            dataIndex: 'name',
                            width: 200
                        },
                        {
                            text: 'Email',
                            dataIndex: 'email',
                            width: 200
                        },
                        {
                            text: 'School',
                            dataIndex: 'school',
                            width: 200
                        },
                        {
                            text: 'Majors',
                            dataIndex: 'majors',
                            width: 200
                        },
                        {
                            text: 'Subjects',
                            dataIndex: 'subjects',
                            width: 200
                        },
                        {
                            text: 'Degree',
                            dataIndex: 'degree'
                        },
                        {
                            text: 'Phone',
                            dataIndex: 'phone'
                        },
                        {
                            text: 'QQ',
                            dataIndex: 'qq'
                        },
                        {
                            text: 'Weixin',
                            dataIndex: 'weixin'
                        },
                        {
                            text: 'Country',
                            dataIndex: 'country'
                        },
                        {
                            text: 'State',
                            dataIndex: 'state'
                        },
                        {
                            text: 'Zip',
                            dataIndex: 'zip'
                        },
                        {
                            text: 'Description',
                            dataIndex: 'description'
                        },
                        {
                            text: 'ID',
                            dataIndex: 'teacherId'
                        },
                        {
                            text: 'Sign Up Date',
                            dataIndex: 'signupDate',
                            renderer: Ext.util.Format.dateRenderer('Y-m-d')
                        }
                    ]
                },
                dockedItems: {
                    xtype: 'toolbar',
                    items: [
                        {
                            xtype: 'button',
                            text: '<i class="icon-user-add"></i> New',
                            itemId: 'new'
                        }
                    ]
                }
            }
        ];
        this.callParent(arguments);
    }
});