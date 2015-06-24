//Created by Shiyang Fei on 12/23/2014
Ext.define('SevenAdmin.component.View', {
    extend: 'Ext.container.Container',
    xtype: 'c-view',
    cls: 'c-view',
    autoScroll: true,
    enableAnimation: true,
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    defaults: {
        layout: {
            type: 'hbox',
            pack: 'start',
            align: 'stretch'
        }
    },
    animDuration: 1000,
    animDelay: 100,

    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        if (me.enableAnimation && me.items) {
            me.setViewPanelsOpacity();
        }
        me.on('beforerender', me.beforeCViewRender, me);
    },

    setViewPanelsOpacity: function () {
        var me = this,
            i, item,
            items = me.query('[viewPanel=true]'),
            len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i];
            if (!item.style) {
                item.style = {};
            }
            item.style['opacity'] = '0.01';
            item.style['margin'] = '10px';
        }
    },

    beforeCViewRender: function (view, eOpts) {
        var me = this;
        if (me.enableAnimation) {
            me.animateShow();
        }
    },

    animateShow: function () {
        var me = this,
            viewPanels = me.query('[viewPanel=true]'),
            len = viewPanels.length,
            i,
            panel;
        if (me.getEl()) {
            for (i = 0; i < len; i++) {
                panel = viewPanels[i];
                panel.getEl().fadeIn({
                    opacity: 1,
                    duration: me.animDuration,
                    delay: me.animDelay * i
                });
                me.anim2 = true;
            }
        } else {
            new Ext.util.DelayedTask(function () {
                me.animateShow()
            }, me).delay(200);
        }
    },

    setViewPanelsTransparentOnHide: function () {
        if (this.enableAnimation) {
            var me = this,
                viewPanels = me.query('[viewPanel=true]'),
                len = viewPanels.length,
                i,
                panel;
            for (i = 0; i < len; i++) {
                panel = viewPanels[i];
                panel.setStyle({
                    'opacity': '0.01'
                });
            }
        }
    }
});