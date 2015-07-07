//Created by Shiyang Fei on 7/7/2015
Ext.define('SevenAdmin.component.general.DegreeCombo', {
    extend: 'Ext.form.field.ComboBox',
    requires: ['SevenAdmin.store.general.DegreeStore'],
    xtype: 'degree-combo',
    displayField: 'text',
    valueField: 'text',
    queryMode: 'local',

    initComponent: function () {
        this.store = Ext.create('SevenAdmin.store.general.DegreeStore')
        this.callParent(arguments);
    }
});