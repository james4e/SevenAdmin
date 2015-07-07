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
        url: 'data/json/instructor.json',
        reader: {
            type: 'json'
        }
    }
});