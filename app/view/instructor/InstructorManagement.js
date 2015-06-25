/**
 * Created by shiyangfei on 12/22/14.
 */
Ext.define('SevenAdmin.view.instructor.InstructorManagement', {
    extend: 'SevenAdmin.component.View',
    xtype: 'instructor',
    requires: [
        'SevenAdmin.view.instructor.InstructorGridPanel'
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
                    xtype: 'instructor-panel',
                    viewPanel: true
                }
            ]
        }
    ]
});