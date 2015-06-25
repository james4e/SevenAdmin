/**
 * Created by shiyangfei on 6/24/15.
 */
Ext.define('SevenAdmin.view.dashboard.StaticSummary', {
    extend: 'SevenAdmin.component.Panel',
    requires: [
        'SevenAdmin.store.dashboard.UserCountHistoryStore',
        'SevenAdmin.component.chart.ux.Highcharts'
    ],
    xtype: 'statics-summary',
    title: 'Statics',

    initComponent: function () {
        var store = Ext.create('SevenAdmin.store.dashboard.StaticSummaryStore');
        this.items = [
            {
                xtype: "dataview",
                store: store,
                tpl: new Ext.XTemplate(
                    '<tpl for=".">',
                    '<div class="thumb-wrap statics-section">',
                    '<div class="statics-header">{header}:</div>',
                    '<div class="statics-body">{body}</div>',
                    '</div>',
                    '</tpl>'
                ),
                itemSelector: 'div.thumb-wrap',
                emptyText: 'No images available',
                renderTo: Ext.getBody()
            }
        ];
        this.callParent(arguments);
    }
});