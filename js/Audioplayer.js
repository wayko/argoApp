 $(document).ready(function(){
      var myCirclePlayer = new CirclePlayer("#jquery_jplayer_1",
			{
				mp3: "/Audio/preciosa.mp3"
			}, {
				playlistOptions: {
					enableRemoveControls: true
				},
				cssSelectorAncestor: "#cp_container_1",
				swfPath: "js",
                supplied: "mp3"
               
			});


    });


