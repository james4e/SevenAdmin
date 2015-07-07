//Created by Shiyang Fei on 7/7/2015
Ext.define('SevenAdmin.component.general.SubjectsTag', {
    extend: 'Ext.form.field.Tag',
    requires: ['SevenAdmin.store.general.SubjectStore'],
    xtype: 'subjects-tag',
    displayField: 'text',
    valueField: 'text',
    queryMode: 'local',

    initComponent: function () {
        this.store = Ext.create('SevenAdmin.store.general.SubjectStore');
        this.callParent(arguments);
    }
});