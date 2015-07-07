//Created by Shiyang Fei on 7/7/2015
Ext.define('SevenAdmin.component.general.MajorsTag', {
    extend: 'Ext.form.field.Tag',
    requires: ['SevenAdmin.store.general.MajorStore'],
    xtype: 'majors-tag',
    displayField: 'text',
    valueField: 'text',
    queryMode: 'local',

    initComponent: function () {
        this.store = Ext.create('SevenAdmin.store.general.MajorStore');
        this.callParent(arguments);
    }
});