//Created by Shiyang Fei on 7/7/2015
Ext.define('SevenAdmin.component.general.CountryCombo', {
    extend: 'Ext.form.field.ComboBox',
    requires: ['SevenAdmin.store.general.CountryStore'],
    xtype: 'country-combo',
    displayField: 'name',
    valueField: 'name',
    queryMode: 'local',

    initComponent: function () {
        this.store = Ext.create('SevenAdmin.store.general.CountryStore');
        this.callParent(arguments);
    }
});