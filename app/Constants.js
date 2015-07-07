/**
 * Created by shiyangfei on 6/5/15.
 */
//Created by Shiyang Fei on 6/3/2015
Ext.define('SevenAdmin.Constants', {
    singleton: true,
    requires: [
        'SevenAdmin.Env'
    ],

    apiUrlPrefix: 'http://' + SevenAdmin.Env.serverIP + ':8081/v1',

    roleMap: {
        1: 'student',
        2: 'teacher'
    },

    timeOptions: [
        {text: '12:00 AM', value: 0},
        {text: '01:00 AM', value: 1},
        {text: '02:00 AM', value: 2},
        {text: '03:00 AM', value: 3},
        {text: '04:00 AM', value: 4},
        {text: '05:00 AM', value: 5},
        {text: '06:00 AM', value: 6},
        {text: '07:00 AM', value: 7},
        {text: '08:00 AM', value: 8},
        {text: '09:00 AM', value: 9},
        {text: '10:00 AM', value: 10},
        {text: '11:00 AM', value: 11},
        {text: '12:00 PM', value: 12},
        {text: '01:00 PM', value: 13},
        {text: '02:00 PM', value: 14},
        {text: '03:00 PM', value: 15},
        {text: '04:00 PM', value: 16},
        {text: '05:00 PM', value: 17},
        {text: '06:00 PM', value: 18},
        {text: '07:00 PM', value: 19},
        {text: '08:00 PM', value: 20},
        {text: '09:00 PM', value: 21},
        {text: '10:00 PM', value: 22},
        {text: '11:00 PM', value: 23}
    ],

    any: 'any',
    all: 'all',
    unitPrice: 2
});