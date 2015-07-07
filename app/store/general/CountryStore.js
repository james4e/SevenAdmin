//Created by Shiyang Fei on 7/7/2015
Ext.define('SevenAdmin.store.general.CountryStore', {
    extend: 'Ext.data.Store',
    fields: ['name', 'code'],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        useDefaultXhrHeader: false,
        url: SevenAdmin.Env.jsonDataUrlPrefix + 'countries.json',
        reader: {
            type: 'json'
        }
    }
});