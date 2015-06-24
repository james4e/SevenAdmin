/**
 * Created by shiyangfei on 10/3/14.
 */
Ext.define('SevenAdmin.view.main.Navigation', {
    extend: 'Ext.view.View',
    requires: [
        'SevenAdmin.store.main.NavigationStore'
    ],
    xtype: 'navigation',
    cls: 'navigation',
    loadMask: false,
    itemSelector: 'div.navigation-item',
    emptyText: 'No menu available',
    initComponent: function () {
        var me = this;
        me.store = Ext.create('SevenAdmin.store.main.NavigationStore');
        me.tpl = me.createViewTemplate();
        me.callParent(arguments);
        me.on('viewready', me.onNavigationViewReady, me);
        me.on('itemClick', me.onNavigationItemClick, me);
    },

    createViewTemplate: function () {
        return new Ext.XTemplate(
            '<tpl for=".">',
            '<div id="navigation-{#}" class="navigation-item animated fadeInLeft">{title}</div>',
            '</tpl>'
        );
    },

    onNavigationViewReady: function (view, eOpts) {
        var me = this;
        var task = new Ext.util.DelayedTask(function () {
            var firstItem = view.getEl().query(me.itemSelector)[0];
            Ext.get(firstItem).addCls('active');
        });
        task.delay(1000);
    },

    onNavigationItemClick: function (view, record, selectedItem, index, e, eOpts) {
        var me = this,
            items = view.getEl().query(me.itemSelector),
            len = items.length,
            i;
        for (i = 0; i < len; i++) {
            var item = items[i];
            if (item.id === selectedItem.id) {
                Ext.get(item).addCls('active');
            } else {
                Ext.get(item).removeCls('active');
            }
        }
    }
});