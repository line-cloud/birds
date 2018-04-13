function saveTheLastNotice(noticeInfo) {
	localStorage.lastNotice = JSON.stringify(noticeInfo);
}
function getTheLastNotice() {
	var lastNotice = {};
	lastNotice = JSON.parse(localStorage.lastNotice);
	if (lastNotice.receiver.length > 0) {
	    for (var i = 0; i < lastNotice.receiver.length; i++) {
	        if (i == lastNotice.receiver.length - 1) {
	            receiverName += lastNotice.receiver[i].name;
	        }else{
	            receiverName += lastNotice.receiver[i].name + '、';
	        }
	    }
	}else{
	    receiverName = '所有人';
	}
	lastNotice.receiver = receiverName;
	return lastNotice;
}

export default {
    saveTheLastNotice(noticeInfo){
    	return saveTheLastNotice(noticeInfo)
    },
    getTheLastNotice(){
    	return getTheLastNotice()
    }
}