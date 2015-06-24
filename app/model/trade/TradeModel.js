/**
 * Created by shiyangfei on 1/26/15.
 */
Ext.define('SevenAdmin.model.trade.TradeModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'action',
            type: 'string'
        },
        {
            name: 'symbol',
            type: 'string'
        },
        {
            name: 'quantity',
            type: 'number'
        },
        {
            name: 'orderType',
            type: 'string'
        },
        {
            name: 'duration',
            type: 'string'
        },
        {
            name: 'qualifier',
            type: 'string'
        },
        {
            name: 'orderDate',
            type: 'date'
        },
        {
            name: 'status',
            type: 'string',
            convert: function (v, r) {
                var ran = Math.floor(Math.random() * 3),
                    status;
                if (!v) {
                    switch(ran) {
                        case 0: {
                            status = 'pending';
                            break;
                        }
                        case 1: {
                            status = 'completed';
                            break;
                        }
                        case 2: {
                            status = 'cancelled';
                            break;
                        }
                        default: {
                            status = 'pending';
                            break;
                        }
                    }
                }
                else {
                    status = v;
                }
                return status;
            }
        }
    ]
});