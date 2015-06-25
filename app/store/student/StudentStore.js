Ext.define('SevenAdmin.store.student.StudentStore', {
    extend: 'Ext.data.Store',

    requires: [
        'SevenAdmin.model.student.StudentModel'
    ],

    model: 'SevenAdmin.model.student.StudentModel',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/json/student.json',
        reader: {
            type: 'json'
        }
    }
});