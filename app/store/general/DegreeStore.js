//Created by Shiyang Fei on 7/7/2015
Ext.define('SevenAdmin.store.general.DegreeStore', {
    extend: 'Ext.data.Store',
    fields: ['text'],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        useDefaultXhrHeader: false,
        url: SevenAdmin.Env.jsonDataUrlPrefix + 'degrees.json',
        reader: {
            type: 'json'
        }
    }
});