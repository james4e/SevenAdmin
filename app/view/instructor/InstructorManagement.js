/**
 * Created by shiyangfei on 12/22/14.
 */
Ext.define('SevenAdmin.view.instructor.InstructorManagement', {
    extend: 'SevenAdmin.component.View',
    xtype: 'instructor',
    requires: [
        'SevenAdmin.view.instructor.InstructorViewController',
        'SevenAdmin.view.instructor.InstructorGridPanel',
        'SevenAdmin.view.instructor.InstructorFormPanel'
    ],
    autoScroll: true,
    controller: 'instructor',
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
                    xtype: 'instructor-grid-panel',
                    viewPanel: true
                },
                {
                    xtype: 'instructor-form-panel',
                    viewPanel: true
                }
            ]
        }
    ]
});