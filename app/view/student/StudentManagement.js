/**
 * Created by shiyangfei on 12/22/14.
 */
Ext.define('SevenAdmin.view.student.StudentManagement', {
    extend: 'SevenAdmin.component.View',
    xtype: 'student',
    requires: [
        'SevenAdmin.view.student.StudentGridPanel'
    ],
    autoScroll: true,
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
                    xtype: 'student-panel',
                    viewPanel: true
                }
            ]
        }
    ]
});