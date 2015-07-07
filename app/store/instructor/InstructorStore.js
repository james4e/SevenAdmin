//Created by Shiyang Fei on 1/21/2015
Ext.define('SevenAdmin.store.instructor.InstructorStore', {
    extend: 'Ext.data.Store',
    requires: [
        'SevenAdmin.model.instructor.InstructorModel'
    ],
    model: 'SevenAdmin.model.instructor.InstructorModel',
    proxy: SevenAdmin.Utils.getStoreProxy('/admin/teacher')
});