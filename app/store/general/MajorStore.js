//Created by Shiyang Fei on 7/7/2015
Ext.define('SevenAdmin.store.general.MajorStore', {
    extend: 'Ext.data.Store',
    fields: ['text'],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        useDefaultXhrHeader: false,
        url: SevenAdmin.Env.jsonDataUrlPrefix + 'default-majors.json',
        reader: {
            type: 'json'
        }
    }
});