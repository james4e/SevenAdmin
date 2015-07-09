//Created by Shiyang Fei on 1/21/2015
Ext.define('SevenAdmin.model.instructor.InstructorModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'approved',
            type: 'boolean'
        },
        {
            name: 'teacherId'
        },
        {
            name: 'name'
        },
        {
            name: 'roleId'
        },
        {
            name: 'email'
        },
        {
            name: 'phone'
        },
        {
            name: 'school'
        },
        {
            name: 'degree'
        },
        {
            name: 'qq'
        },
        {
            name: 'weixin'
        },
        {
            name: 'description'
        },
        {
            name: 'signupDate'
        },
        {
            name: 'majors',
            convert: function (v) {
                if (SevenAdmin.Utils.isJson(v)) {
                    return _.pluck(Ext.decode(v), 'text')
                }
            }
        },
        {
            name: 'subjects',
            convert: function (v) {
                if (SevenAdmin.Utils.isJson(v)) {
                    return _.pluck(Ext.decode(v), 'text')
                }
            }
        },
        {
            name: 'country'
        },
        {
            name: 'state'
        },
        {
            name: 'zip'
        },
        {
            name: 'profileImage'
        }
    ]
});