/**
 * Serie class for solid gauge series type
 *
 * See {@link SevenAdmin.component.chart.ux.serie.Serie} class for more info
 *
 * SolidGauge series is a one dimensional series type, i.e only y-axis data
 */
Ext.define('SevenAdmin.component.chart.ux.serie.SolidGaugeSerie', {
    extend: 'SevenAdmin.component.chart.ux.serie.Serie',
    alternateClassName: [ 'highcharts.solidgauge' ],
    type: 'solidgauge'

    /***
     * @cfg xField
     * @hide
     */
});
