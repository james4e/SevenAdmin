//Created by Shiyang Fei on 12/23/2014
Ext.define('SevenAdmin.Utils', {
    singleton: true,
    requires: [
        'SevenAdmin.Constants'
    ],

    getLocalCredential: function (name) {
        var data = Ext.getStore('LoginLocal').getAt(0);
        if (data) {
            return data.get(name);
        }
    },

    getCredential: function (name) {
        var data = Ext.getStore('LoginSession').getAt(0);
        if (data) {
            return data.get(name);
        }
    },

    clearAllSession: function () {
        Ext.getStore('LoginLocal').removeAll();
        Ext.getStore('LoginSession').removeAll();
    },

    capitalize: function (s) {
        return s[0].toUpperCase() + s.slice(1);
    },

    validateForm: function (form, modelCls, showError) {
        var me = this,
            error = Ext.create(modelCls, form.getValues()).validate();
        if (error.isValid()) {
            return true;
        } else {
            if (showError) {
                var errorText = '';
                Ext.each(error.items, function (e) {
                    errorText += me.capitalize(e.getField()) + ' ' + e.getMessage() + '<br>';
                });
                if (errorText.length > 0) {
                    Ext.Msg.alert('Warning', errorText);
                }
            }
            return false;
        }
    },

    switchView: function (targetXtype, targetQueryString, parentComponentId, animation) {
        var target = Ext.ComponentQuery.query(targetQueryString || '')[0] ?
            Ext.ComponentQuery.query(targetQueryString)[0] :
            Ext.createByAlias(targetXtype);
        if (parentComponentId) {
            target.parentComponentId = parentComponentId;
        }
        Ext.Viewport.animateActiveItem(target, animation || 'fade');
        return target;
    },

    logOut: function () {
        var me = this;
        SevenAdmin.Ajax.request({
            url: '/admin/logout',
            scope: me,
            params: Ext.JSON.encode({
                userId: me.getCredential('userId')
            }),
            successFn: function (response) {
                Ext.ComponentQuery.query('app-main')[0].getEl().fadeOut({
                    duration: 1000
                });
                Ext.create('Ext.util.DelayedTask', function () {
                    window.location.reload();
                }).delay(1000);
            }
        });
        me.clearAllSession();
    },

    onFormSubmissionFailure: function (form, r) {
        Ext.Msg.alert('Error', 'Submission failed');
    },

    getAPIUrl: function (url) {
        return SevenAdmin.Constants.apiUrlPrefix + url;
    },

    getStoreProxy: function (url, localStore) {
        return {
            type: 'ajax',
            actionMethods: {
                read: 'POST',
                write: 'POST',
                edit: 'POST',
                delete: 'POST'
            },
            useDefaultXhrHeader: false,
            url: localStore ? url : this.getAPIUrl(url),
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    },

    getJsonDataProxy: function (url, localStore) {
        return {
            type: 'ajax',
            useDefaultXhrHeader: false,
            url: url
        }
    },

    isJson: function (str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
});