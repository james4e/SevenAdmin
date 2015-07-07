/**
 * Created by shiyangfei on 7/7/15.
 */
/**
 * Created by shiyangfei on 6/5/15.
 */
Ext.define('SevenAdmin.Ajax', {
    singleton: true,
    requires: [
        'Ext.Ajax'
    ],

    alias: "widget.ajaxservice",

    config: {
        url: '',
        getPost: 'POST',
        useDefaultXhrHeader: false,
        params: null,
        successFn: null,
        failureFn: null,
        callbackFn: null
    },

    request: function (options) {
        Ext.Ajax.request({
            url: SevenAdmin.Utils.getAPIUrl(options.url),
            method: 'POST',
            useDefaultXhrHeader: false,
            params: Ext.JSON.encode(options.params),
            success: this.successResponse,
            failure: this.failureResponse,
            callback: this.callbackResponse,
            scope: options.scope,
            callbackFunctions: {
                successFn: options.successFn,
                failureFn: options.failureFn,
                callbackFn: options.callbackFn
            }
        });
    },

    successResponse: function (response, opts) {
        var resTxt = response.responseText,
            error;
        if (SevenAdmin.Utils.isJson(resTxt) && !Ext.isEmpty(Ext.decode(resTxt))) {
            var res = Ext.decode(resTxt);
            if (res.success) {
                Ext.callback(opts.callbackFunctions.successFn, opts.scope, [res.data]);
            } else {
                error = res.errorMsg || 'Failed due to unknown error';
                Ext.Msg.alert('Error', error);
            }
        } else {
            Ext.Msg.alert('Error', 'Failed due to unknown server side error');
        }
    },

    failureResponse: function (response, opts) {
        Ext.callback(opts.callbackFunctions.failureFn, opts.scope, [response.responseText]);
    },

    callbackResponse: function (opts, success, response) {
        Ext.callback(opts.callbackFunctions.callbackFn, opts.scope, []);
    }
});