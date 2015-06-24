//Created by Shiyang Fei on 12/23/2014
Ext.define('SevenAdmin.Utils', {
    singleton: true,

    priceRenderer: function (v, m, r, rowIndex, colIndex, store, view) {
        m.style = '';
        return Ext.util.Format.number(v, '0.00');
    },

    priceChangeRenderer: function (v, m, r, rowIndex, colIndex, store, view) {
        var negative = v < 0;
        if (negative) {
            m.style = 'color:#BA0000;';
        } else {
            m.style = 'color:#008000;';
        }
        return Ext.util.Format.number(v, '0.00');
    },

    priceChangePercentageRenderer: function (v, m, r, rowIndex, colIndex, store, view) {
        var negative = v < 0;
        if (negative) {
            m.style = 'color:#BA0000;';
        } else {
            m.style = 'color:#008000;';
        }
        return Ext.util.Format.number(v * 100, '0.00%');
    },

    largeIntRenderer: function (v, m, r, rowIndex, colIndex, store, view) {
        var negative = v < 0;
        m.style = '';
        if (negative) {
            m.style = m.style + 'color:#BA0000';
        }
        if (v >= 1000000000)
            return Ext.util.Format.number(v / 1000000000, this.format || '0,000.000') + 'bn';
        else if (v >= 1000000)
            return Ext.util.Format.number(v / 1000000, this.format || '0,000.000') + 'm';
        else if (v >= 1000)
            return Ext.util.Format.number(v / 1000, this.format || '0,000.000') + 'k';
        else
            return Ext.util.Format.number(v, '0,000');
    }
});