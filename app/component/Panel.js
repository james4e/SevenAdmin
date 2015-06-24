//Created by Shiyang Fei on 12/23/2014
/**
 * Panel with customized style
 */
Ext.define('SevenAdmin.component.Panel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.c-panel',
    cls: 'c-panel',
    viewPanel: true,
    tbarConfig: undefined,
    layout: 'fit',
    defaults: {
        cls: 'c-panel-item'
    },
    initComponent: function () {
        var me = this;
        me.processConfig();
        me.createPanelTitle();
        me.createBarItems();
        me.callParent(arguments);
    },

    processConfig: function () {
        var me = this;
        me.tbarConfig = me.tbar;
        me.tbar = [];
    },

    createPanelTitle: function () {
        var me = this;
        if (me.title) {
            me.tbar.push({
                xtype: 'tbtext',
                cls: 'c-panel-title',
                itemId: 'titleText',
                text: me.title
            });
            me.title = undefined;
            me.tbar.push({
                xtype: 'tbfill',
                itemId: 'fill'
            });
        }
    },

    createBarItems: function () {
        var me = this;
        if (Ext.isArray(me.tbarConfig)) {
            var len = me.tbarConfig.length,
                i,
                item;
            for (i = 0; i < len; i++) {
                item = me.tbarConfig[i];
                me.tbar.push(item);
            }
        }
    },

    updateTitle: function (titleText) {
        var me = this,
            titleTextBox = me.query('tbtext[itemId="titleText"]')[0];
        titleTextBox.update(titleText);
    }
});
