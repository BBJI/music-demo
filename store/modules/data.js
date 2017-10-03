import content from '../../src/content/content';

const state = {
	songs: [],
	init: '',
	hide: true,
	minute: '00',
	second: '00',
	currentMinute: '00',
	currentSecond: '00',
	secondInterval: null,
	initInterval: null,
	minuteInterval: null,
	currentMinuteInterval: null,
	currentSecondInterval: null,
	currentTimeInterval: null,
	durationInterval: null,
	widthInterval: null,
	currentTime: '',
	duration: '',
	width: '',
	clickPosition: '',
	presentTime: '',
	presentDuration: '',
	volume: '',
	presentVolume: 100
};

const mutations = {
	SET_SONGS: (state, content) => {
		state.songs = content;
	},
	SET_INIT: (state, i) => {
			if(state.width == 100){
				state.init = state.songs[i++].src;
			}else{
				state.init = state.songs[i].src;
			};			
	},
	SET_HIDE: (state) => {
		state.hide = !state.hide;
	},
	SET_MINUTE: (state) => {
		state.minuteInterval = setInterval(function() {
			if(state.minute >= 10) {
				state.minute = parseInt(Math.floor($('#myAudio')[0].duration/60));
			}else{
				state.minute = '0' + parseInt(Math.floor($('#myAudio')[0].duration/60));
			}
		},100);

	},
	SET_SECOND: (state) => {
		state.secondInterval = setInterval(function() {
			if(state.second >= 10){
				state.second = parseInt(Math.floor($('#myAudio')[0].duration%60));
			}else{
				state.second = '0' + parseInt(Math.floor($('#myAudio')[0].duration%60));
			}
		},100);
	},
	SET_CURRENT_MINUTE: (state) => {
		state.currentMinuteInterval = setInterval(function() {
			if(state.currentMinute >= 10){
				state.currentMinute = parseInt(Math.floor($('#myAudio')[0].currentTime/60));
			}else{
				state.currentMinute = '0' + parseInt(Math.floor($('#myAudio')[0].currentTime/60));
			}

		},100);
	},
	SET_CURRENT_SECOND: (state) => {
		state.currentSecondInterval = setInterval(function() {
			if(state.currentSecond >= 10 ){
			state.currentSecond = parseInt(Math.floor($('#myAudio')[0].currentTime%60));
			}else{
				state.currentSecond = '0' + parseInt(Math.floor($('#myAudio')[0].currentTime%60));
			}
		},100);
	},
	CLEAR_TIME: (state) => {
		clearInterval(state.secondInterval);
		clearInterval(state.minuteInterval);
		clearInterval(state.currentSecondInterval);
		clearInterval(state.currentMinuteInterval);
		clearInterval(state.currentTimeInterval);
		clearInterval(state.durationInterval);
		clearInterval(state.widthInterval);
		clearInterval(state.initInterval);
	},
	SET_CURRENTTIME: (state) => {
		state.currentTimeInterval = setInterval(function(){
		state.currentTime = $('#myAudio')[0].currentTime;		
		},100);

	},
	SET_DURATION: (state) => {
		state.durationInterval = setInterval(function(){
		state.duration = $('#myAudio')[0].duration;			
		},100);

	},
	SET_WIDTH: (state) => {
		state.widthInterval = setInterval(function() {
			state.width = state.currentTime / state.duration * 100;

		},100)
	},
	SET_VOLUME: (state) => {
		state.volume = $('#myAudio')[0].volume * 100;
	},
	CLICK_POSITION: (state, e) => {
		state.clickPosition = e.clientX;
		state.presentTime = state.clickPosition - $('.music-duration').offset().left;
		state.presentDuration = $('.music-duration').width();
		state.width = state.presentTime / state.presentDuration * 100;
		state.currentTime = state.duration * state.width * 0.01;
		$('#myAudio')[0].currentTime = state.currentTime;
	},
	VOLUME_CONTROL: (state, e) => {
		state.volume = e.clientX - $('.volume').offset().left;
		console.log(state.volume);
		$('#myAudio')[0].volume = state.volume/100;
		state.presentVolume = state.volume;
	},
	MUTE: (state) => {
		if(state.volume > 0) {
			state.volume = 0;
			$('#myAudio')[0].volume = 0;
		}else{
			state.volume = state.presentVolume;
			$('#myAudio')[0].volume = state.volume/100;
		}
		
	}

};

const actions = {
	initSongs: ({commit}) => {
		commit('SET_SONGS', content);
	},
	setInit: ({commit}, i) => {
		commit('SET_INIT', i);
	},
	initHide: ({commit}) => {
		commit('SET_HIDE', state.hide);
	},
	initMinute: ({commit}) => {
		commit('SET_MINUTE');
	},
	initSecond: ({commit}) => {
		commit('SET_SECOND');
	},
	initCurrentMinute: ({commit}) => {
		commit('SET_CURRENT_MINUTE');
	},
	initCurrentSecond: ({commit}) => {
		commit('SET_CURRENT_SECOND');
	},
	clearTime: ({commit}) => {
		commit('CLEAR_TIME');
	},
	initCurrentTime: ({commit}) => {
		commit('SET_CURRENTTIME');
	},
	initDuration: ({commit}) => {
		commit('SET_DURATION');
	},
	setWidth: ({commit}) => {
		commit('SET_WIDTH');
	},
	setVolume: ({commit}) => {
		commit('SET_VOLUME');
	},
	clickPosition: ({commit}, e) => {
		commit('CLICK_POSITION', e);
	},
	volumeControl: ({commit}, e) => {
		commit('VOLUME_CONTROL', e);
	},
	mute: ({commit}) => {
		commit('MUTE');
	}

};

const getters = {
	songs: (state) => {
		return state.songs;
	},
	init: (state) => {
		return state.init;
	},
	hide: (state) => {
		return state.hide;
	},
	minute: (state) => {
		return state.minute;
	},
	second: (state) => {
		return state.second;
	},
	currentSecond: (state) => {
		return state.currentSecond;
	},
	currentMinute: (state) => {
		return state.currentMinute;
	},
	currentTime: (state) => {
		return state.currentTime;
	},
	duration: (state) => {
		return state.duration;
	},
	width: (state) => {
		return state.width;
	},
	volume: (state) => {
		return state.volume;
	}

};

export default {
	state,
	mutations,
	actions,
	getters
}
