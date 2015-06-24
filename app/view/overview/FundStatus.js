//Created by Shiyang Fei on 1/21/2015
Ext.define('SevenAdmin.view.overview.FundStatus', {
    extend: 'SevenAdmin.component.Panel',
    requires: [
        'SevenAdmin.store.myaccount.FundStatusStore',
        'SevenAdmin.component.chart.ux.Highcharts'
    ],
    xtype: 'fund-status',
    title: 'Fund Status',

    initComponent: function () {
        var chartStore = Ext.create('SevenAdmin.store.myaccount.FundStatusStore');
        this.items = [
            {
                xtype: "highchart",
                store: chartStore,
                series: [
                    {
                        type: 'pie',
                        categorieField: 'fundType',
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
                                        + Ext.util.Format.usMoney(this.y);
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
                            return Ext.util.Format.usMoney(this.y);
                        }
                    }
                }
            }
        ];
        this.callParent(arguments);
    }
});