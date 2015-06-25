/**
 * Created by shiyangfei on 1/14/15.
 */
Ext.define('SevenAdmin.view.dashboard.UserCountHistory', {
    extend: 'SevenAdmin.component.Panel',
    requires: [
        'SevenAdmin.store.dashboard.UserCountHistoryStore',
        'SevenAdmin.component.chart.ux.Highcharts'
    ],
    xtype: 'user-count-history',
    title: 'User Trend',

    initComponent: function () {
        var chartStore = Ext.create('SevenAdmin.store.dashboard.UserCountHistoryStore');
        this.items = [
            {
                xtype: "highchart",
                store: chartStore,
                series: [
                    {
                        dataIndex: 'amount',
                        name: 'Amount'
                    }
                ],
                xField: 'date',
                chartConfig: {
                    chart: {
                        type: 'area'
                    },
                    legend: {
                        enabled: false
                    },
                    xAxis: {
                        labels: {
                            formatter: function () {
                                return Ext.util.Format.date(this.value, 'm/d')
                            }
                        }
                    },
                    tooltip: {
                        formatter: function() {
                            return  '<b>' + Ext.util.Format.date(this.x, 'm/d/y') +'</b><br/>'
                                + this.y;
                        }
                    }
                }
            }
        ];
        this.callParent(arguments);
    }
});