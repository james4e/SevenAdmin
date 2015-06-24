/**
 * Created by shiyangfei on 10/3/14.
 */
Ext.define('SevenAdmin.view.main.Header', {
    extend: 'Ext.container.Container',
    xtype: 'app-header',
    viewModel: {
        type: 'main'
    },
    bind: {
        data: {
            header: '{headerText}'
        }
    },
    initComponent: function () {
        var me = this;
        me.tpl = new Ext.XTemplate(
            '<tpl>',
            '<div class="app-header">{header}</div>',
            '</tpl>'
        );
        me.callParent(arguments);
    }
});