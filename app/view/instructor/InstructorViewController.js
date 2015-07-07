//Created by Shiyang Fei on 7/7/2015
Ext.define('SevenAdmin.view.instructor.InstructorViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.instructor',

    control: {
        'gridpanel': {
            'rowclick': 'onGridRowSelect'
        }
    },

    onGridRowSelect: function(grid, record, tr, rowIndex, e, eOpts) {
        console.log(grid)
    }
});