//Created by Shiyang Fei on 1/20/2015
//Created by Shiyang Fei on 1/20/2015
Ext.define('SevenAdmin.view.position.PositionGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'SevenAdmin.store.position.PositionStore'
    ],
    xtype: 'position-grid',

    initComponent: function () {
        this.columns = this.createColumns();
        this.store = Ext.StoreManager.lookup('positionStore') || Ext.create('SevenAdmin.store.position.PositionStore', {
            storeId: 'positionStore'
        });
        this.callParent(arguments);
    },

    createColumns: function () {
        return {
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
                    text: 'Total Change',
                    dataIndex: 'TotalChange',
                    renderer: SevenAdmin.Utils.priceChangePercentageRenderer
                },
                {
                    text: 'Total G/L',
                    dataIndex: 'TotalGL',
                    renderer: SevenAdmin.Utils.priceChangeRenderer
                }
            ]
        }
    }
});