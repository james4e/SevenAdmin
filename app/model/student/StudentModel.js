//Created by Shiyang Fei on 1/21/2015
Ext.define('SevenAdmin.model.student.StudentModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'firstName'
        },
        {
            name: 'lastName'
        },
        {
            name: 'name',
            convert: function(v, r) {
                return r.get('firstName') + ' ' + r.get('lastName');
            }
        },
        {
            name: 'email',
            convert: function(v, r) {
                return '****@*****';
            }
        },
        {
            name: 'wechat',
            convert: function(v, r) {
                return '********';
            }
        }
    ]
});