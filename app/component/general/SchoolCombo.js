//Created by Shiyang Fei on 7/7/2015
Ext.define('SevenAdmin.component.general.SchoolCombo', {
    extend: 'Ext.form.field.ComboBox',
    requires: ['SevenAdmin.store.general.SchoolStore'],
    xtype: 'school-combo',
    displayField: 'text',
    valueField: 'text',
    queryMode: 'local',

    initComponent: function () {
        this.store = Ext.create('SevenAdmin.store.general.SchoolStore');
        this.callParent(arguments);
    }
});