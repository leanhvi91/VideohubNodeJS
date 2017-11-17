$(document).ready(function(){
				//click hiện thị danh sách đang online
             	 $('#n2').click(function(){
               	$('.listfriend').toggleClass('hienlen');
              });
             	 //kết thúc hiển thị ds  online

  
             	 //click để show map
             		$("#n3").click(function(){
        			$('.maphienthi').toggleClass('hienlen');
                  navigator.geolocation.getCurrentPosition(function(pos){                
                    var lat = pos.coords.latitude;
                    var lng = pos.coords.longitude;    
                    var maphtml = "<img src='https://maps.googleapis.com/maps/api/staticmap?center="
                    + lat +","+lng
                    +"&zoom=17&size=300x300&maptype=roadmap&markers=color:red%7Clabel:S%7C" 
                    + lat +","+lng +"&key=AIzaSyDXDAY103-FhRobOnIjBGGtp3GU3f3hnEs'</img>";
                    $("#location").html(maphtml);
                });
              });
            });

