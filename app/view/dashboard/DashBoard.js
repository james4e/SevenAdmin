/**
 * Created by shiyangfei on 12/22/14.
 */
Ext.define('SevenAdmin.view.dashboard.DashBoard', {
    extend: 'SevenAdmin.component.View',
    xtype: 'c-dashboard',
    requires: [
        'SevenAdmin.view.overview.FundHistory',
        'SevenAdmin.view.watchlist.WatchListGrid',
        'SevenAdmin.view.position.PositionGrid',
        'SevenAdmin.view.overview.FundStatus'
    ],
    autoScroll: true,
    items: [
        {
            xtype: 'container',
            minHeight: 280,
            flex: 1,
            defaults: {
                flex: 1
            },
            items: [
                {
                    xtype: 'account-history',
                    viewPanel: true
                },
                {
                    xtype: 'fund-status',
                    viewPanel: true
                }
            ]
        },
        {
            xtype: 'container',
            minHeight: 280,
            flex: 1,
            defaults: {
                flex: 1
            },
            items: [
                {
                    xtype: 'c-panel',
                    viewPanel: true,
                    title: 'Watch List',
                    tbar: [
                        {xtype: 'button', itemId: 'remove', text: 'Remove'},
                        {xtype: 'button', itemId: 'trade', text: 'Trade'},
                        {xtype: 'button', itemId: 'detail', text: 'Details'}
                    ],
                    items: [
                        {
                            xtype: 'watch-list-grid'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            minHeight: 280,
            flex: 1,
            defaults: {
                flex: 1
            },
            items: [
                {
                    xtype: 'c-panel',
                    viewPanel: true,
                    title: 'Positions',
                    tbar: [
                        {xtype: 'button', itemId: 'remove', text: 'Add To Watch List'},
                        {xtype: 'button', itemId: 'trade', text: 'Trade'},
                        {xtype: 'button', itemId: 'detail', text: 'Details'}
                    ],
                    items: [
                        {
                            xtype: 'position-grid'
                        }
                    ]
                }
            ]
        }
    ]
});