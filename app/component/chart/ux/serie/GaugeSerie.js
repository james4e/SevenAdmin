/**
 * Serie class for gauge series type
 *
 * See {@link SevenAdmin.component.chart.ux.serie.Serie} class for more info
 *
 * Gauge series is a one dimensional series type, i.e only y-axis data
 */
Ext.define('SevenAdmin.component.chart.ux.serie.GaugeSerie', {
    extend: 'SevenAdmin.component.chart.ux.serie.Serie',
    alternateClassName: [ 'highcharts.gauge' ],
    type: 'gauge'

    /***
     * @cfg xField
     * @hide
     */
});
