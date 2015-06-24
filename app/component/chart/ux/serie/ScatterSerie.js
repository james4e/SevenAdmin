/**
 * Serie class for scatter type series
 *
 * See {@link SevenAdmin.component.chart.ux.serie.Serie} class for more info
 */
Ext.define('SevenAdmin.component.chart.ux.serie.ScatterSerie', {
    extend: 'SevenAdmin.component.chart.ux.serie.Serie',
    alternateClassName: [ 'highcharts.scatter' ],
    type: 'scatter',

    /**
     * @cfg {String} zField
     * The field used to access the z-axis value (3D scatter)
     * source. Store's record
     */
    zField: null

});
