flashvars = { channel: options.channelName };
	params = { AllowScriptAccess: 'always' };

swfobject.embedSWF("http://cdn.livestream.com/chromelessPlayer/v20/playerapi.swf", 
		"livestreamPlayer", "560", "340", "9.0.0", "expressInstall.swf", null, params);

function switchChannel() {
	player = document.getElementById("livestreamPlayer");
	
	channelName = document.getElementById("channel-name"); 
	clipId = document.getElementById("clip-id");
	
	player.setDevKey(options.devKey);
	player.load(channelName.value, clipId.value);
	player.startPlayback();
	//clip id is pla_d87c0258-95f9-423f-85f2-d953c7370a76
}





