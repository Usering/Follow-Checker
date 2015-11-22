$(document).ready(function(){

	var target = window.location.pathname.match(/\/users\/(\w+)\/profile/i)
	if (target) {
		var targetId = target[1]
		$.ajax({
			type: "GET",
			url: "http://www.roblox.com/mobileapi/userinfo",
		})
		.error(function(data){
			console.log("COULD NOT GET LOGGED IN USER!")
		})
		.done(function(data){
			var status = $('<p class="followStatus">Follows You</p>')
			var parent = $(".header-title").first()
			userId = data.UserID
			$.ajax({
				type: "GET",
				url: "http://api.roblox.com/user/following-exists",
				data: "userId=" + userId + "&followerUserId=" + targetId
			}).done(function(data){
				console.log(data)
				if (data.isFollowing == true) {
					parent.append(status)
				} else {

				}
 			})
		})
	}
})