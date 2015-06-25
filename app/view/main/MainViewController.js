/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 */
Ext.define('SevenAdmin.view.main.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    requires: [
        'SevenAdmin.component.ConstructionPanel',
        'SevenAdmin.view.student.StudentManagement',
        'SevenAdmin.view.instructor.InstructorManagement'
    ],

    onNavigationItemClick: function (dataview, record, item, index, e, eOpts) {
        var me = this;
        me.switchView(record.get('view'), record.get('title'));
    },

    switchView: function (viewName, title) {
        var me = this,
            centerContainer = this.lookupReference('center'),
            view,
            currentView;
        view = centerContainer.child(viewName);
        if (!view) {
            view = me.createNewChildView(viewName, title);
        }
        currentView = centerContainer.getLayout().getActiveItem();
        if (currentView.id != view.id) {
            currentView.getEl().fadeOut({
                callback: function () {
                    centerContainer.getLayout().setActiveItem(view);
                    view.getEl().setOpacity(1);
                    if (view.enableAnimation) {
                        view.animateShow();
                    }
                    if (currentView.enableAnimation) {
                        currentView.setViewPanelsTransparentOnHide();
                    }
                }
            });
        }
    },

    createNewChildView: function (viewName, title) {
        var me = this,
            centerContainer = this.lookupReference('center'),
            view;
        if (Ext.ClassManager.getByAlias('widget.' + viewName)) {
            view = Ext.create('widget.' + viewName)
        } else {
            view = Ext.create('widget.construction-panel', {
                viewTitle: title
            });
        }
        centerContainer.add(view);
        return view;
    }
});
