//Created by Shiyang Fei on 1/21/2015
Ext.define('SevenAdmin.store.instructor.InstructorStore', {
    extend: 'Ext.data.Store',

    requires: [
        'SevenAdmin.model.instructor.InstructorModel'
    ],

    model: 'SevenAdmin.model.instructor.InstructorModel',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        useDefaultXhrHeader: false,
        url: SevenAdmin.Utils.getAPIUrl('/admin/teacher'),
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});