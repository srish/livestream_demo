flashvars = { channel: options.channelName };
	params = { AllowScriptAccess: 'always' };

swfobject.embedSWF("http://cdn.livestream.com/chromelessPlayer/v20/playerapi.swf", 
		"livestreamPlayer", "560", "340", "9.0.0", "expressInstall.swf", null, params);

function switchChannel() {
	player = document.getElementById("livestreamPlayer");
	player.setDevKey(options.devKey);
	player.load(options.channelName);
	player.startPlayback();
}


