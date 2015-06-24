//Created by Shiyang Fei on 1/20/2015
Ext.define('SevenAdmin.view.watchlist.WatchListGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'SevenAdmin.store.general.MarketDataStore'
    ],
    xtype: 'watch-list-grid',
    columns: {
        defaults: {
            align: 'right',
            flex: 1,
            minWidth: 100
        },
        items: [
            {
                text: 'Symbol',
                dataIndex: 'Symbol',
                align: 'left'
            },
            {
                text: 'Last Price',
                dataIndex: 'LastPrice',
                renderer: SevenAdmin.Utils.priceRenderer
            },
            {
                text: 'Change',
                dataIndex: 'Change',
                renderer: SevenAdmin.Utils.priceChangeRenderer
            },
            {
                text: 'Change %',
                dataIndex: 'ChangePercent',
                renderer: SevenAdmin.Utils.priceChangePercentageRenderer
            },
            {
                text: 'Volume',
                dataIndex: 'Volume',
                renderer: SevenAdmin.Utils.largeIntRenderer
            },
            {
                text: 'High',
                dataIndex: 'High',
                renderer: SevenAdmin.Utils.priceRenderer
            },
            {
                text: 'Low',
                dataIndex: 'Low',
                renderer: SevenAdmin.Utils.priceRenderer
            },
            {
                text: 'Open',
                dataIndex: 'Open',
                renderer: SevenAdmin.Utils.priceRenderer
            }
        ]
    },
    initComponent: function () {
        this.store = Ext.StoreManager.lookup('watchListStore') || Ext.create('SevenAdmin.store.general.MarketDataStore', {
            storeId: 'watchListStore'
        });
        this.callParent(arguments);
    }
});