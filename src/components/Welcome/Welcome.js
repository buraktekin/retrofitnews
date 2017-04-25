export default {
	name: 'Welcome',
	methods: {
		animateEl() {
			var minT = 2000;
			var maxT = 3000;
			var offset = $("#picture").offset();
			$(".slide").each(function() {
				var randomTime = Math.floor(Math.random() * (maxT - minT + 1)) + minT;
				var offsetAnimatedObject = $(this).offset();
				var distanceX = offset.left - offsetAnimatedObject.left + $(this).width();
				var distanceY = offset.top - offsetAnimatedObject.top - $(this).height() / 2;
				$(this).animate({ left: distanceX, top: distanceY, opacity: 0 }, randomTime);
			});
			$(".fa-hacker-news").each(function() {
				$(this).delay(2500).animate({ left: 0, opacity: 1 }, 2000);
			});
		},
	},
	computed: {},
	mounted() {
		this.animateEl();
	}
}