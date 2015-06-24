/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */

Ext.Loader.setConfig({
    disableCaching: false,
    enabled: true,
    paths: {
        SevenAdmin: 'app'
    }
});

Ext.application({
    name: 'SevenAdmin',

    extend: 'SevenAdmin.Application',
    
    autoCreateViewport: 'SevenAdmin.view.launch.Launch'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to SevenAdmin.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
