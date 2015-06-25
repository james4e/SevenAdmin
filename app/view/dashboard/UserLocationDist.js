//Created by Shiyang Fei on 1/21/2015
Ext.define('SevenAdmin.view.dashboard.UserLocationDist', {
    extend: 'SevenAdmin.component.Panel',
    requires: [
        'SevenAdmin.store.dashboard.UserLocationDistStore',
        'SevenAdmin.component.chart.ux.Highcharts'
    ],
    xtype: 'user-location-dist',
    title: 'User Location Distribution',

    initComponent: function () {
        var chartStore = Ext.create('SevenAdmin.store.dashboard.UserLocationDistStore');
        this.items = [
            {
                xtype: "highchart",
                store: chartStore,
                series: [
                    {
                        type: 'pie',
                        categorieField: 'location',
                        dataField: 'amount'
                    }
                ],
                chartConfig: {
                    chart: {

                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                formatter: function (){
                                    return '<b>' + this.key + ': </b><br>'
                                        + this.y;
                                }
                            }
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: -10,
                        y: 100,
                        borderWidth: 0
                    },
                    tooltip: {
                        formatter: function () {
                            return this.y;
                        }
                    }
                }
            }
        ];
        this.callParent(arguments);
    }
});