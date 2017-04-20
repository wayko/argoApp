$(document).ready(function (){
$("#home").click(function (){
$("#cont").html("<h1>Welcome Page</h1>");
$("#homecon").html("Welcome to DreamCPU..<em>Where Your Dream Computer Awaits</em>");
$("#leftsideul").html("");
});
$("#service").click(function (){
$("#cont").html("<h1>Services Page</h1>");
$("#homecon").html("<p><span><h3 id='liheaders'>These are the services we provide....</h3></span></p><ul><li id='liheaders'>Web Based Services</li><ul><li><button class='btn normal btnmargin' id='domreg'>Domain Registration</button></li><li><button class='btn normal btnmargin' id='webdesign'>Webpage Design</button></li></ul></ul><ul><li id='liheaders'>Programming Related Services</li><ul><li><button class='btn normal btnmargin' id='webprogramming'>Website Programming</button></li><li><button class='btn normal btnmargin' id='dfe'>Database Front End Application</button></li><li><button class='btn normal btnmargin' id='sql'>SQL</button></li></ul></ul><ul><li id='liheaders'>Computer Related Services</li><ul><li><button class='btn normal btnmargin' id='computerrepair'>Computer Repair</button></li><li><button class='btn normal btnmargin' id='maleware'>Maleware Removal</button></li><li><button class='btn normal btnmargin' id='virus'>Virus Removal</button></li><li><button class='btn normal btnmargin' id='osinstall'>Operating System Installation</button></li><li><button class='btn normal btnmargin' id='softwareinstall'>Software Installation</button></li></ul></ul><form target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post'><input type='hidden' name='cmd' value='_s-xclick'><input type='hidden' name='hosted_button_id' value='4NZJMAQGAK5C2'><table><tr><td><input type='hidden' name='on0' value='Options'>Options</td></tr><tr><td><select name='os0'><option value='Domain Registration'>Domain Registration $0.01 USD</option><option value='Domain Registration,Webhosting'>Domain Registration,Webhosting $0.01 USD</option><option value='Domain Registration,Webhosting &amp;Email'>Domain Registration,Webhosting &amp;Email $0.01 USD</option></select> </td></tr></table><input type='hidden' name='currency_code' value='USD'><input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'><img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1'></form>");
$("#leftsideul").html("");
});
$("#contact").click(function (){
$("#cont").html("<h1>Contact Page</h1>");
$("#homecon").html('<h3>Please fill out the form and click send request</h3><br><p><form action="">Name: &nbsp;&nbsp;<Input Type="textbox" name="name" id="name"> <br><br> Email:&nbsp;&nbsp;&nbsp; <input type="textbox" name="email" id="email"> <br><br>Phone Number: &nbsp;&nbsp;<Input Type="textbox" name="phone_number" id="phone_number"> <br><br>Job Requested: &nbsp;&nbsp;<Input Type="textbox" name="job_requested" id="job_requested"> <br><br> <button type="submit" value="Send Request" class="btn success" id="sendrequest">Submit</button></form></p>');
$("#leftsideul").html("");
});  
$("#rssfeeds").click(function (){
$("#cont").html("<h1>RSSFeeds</h1>");
$("#homecon").html("<script type='text/javascript'>$(document).ready(function () {$('#ticker1').rssfeed('http://feeds.feedburner.com/Jquery4u',{}, function(e) {$(e).find('div.rssBody').vTicker();});});</script><div id='ticker1'></div>");
});
$(document).on("click","#sendrequest",function(){
 var name = $("input#name").val();  
        var email = $("input#email").val();  
        var phone_number = $("input#phone_number").val(); 
		var job_requested = $("input#job_requested").val();
    var dataString = 'name='+ name + '&email=' + email + '&phone_number=' + phone_number + '&job_requested=' + job_requested; 
if (name == ""){
		alert("name field is empty");
		return false;
		}
		if (email == ""){
		alert("email field is empty");
		return false;
		}
		if (phone_number == ""){
		alert("phone number field is empty");
		return false;
		}
		if (job_requested == ""){
		alert("job reqested field is empty");
		return false;
		}
    $.ajax({  
      type: "POST",  
      url: "insert.php",  
      data: dataString,  
      success: function() {  
        $('#homecon').html("<div id='message'></div>");  
        $('#message').html("<h2>Contact Form Submitted!</h2>")  
        .append("<h3 style='display:block;'>Thank you for contacting DreamCPU. We have received your request " +  name + ". We will review it and contact you as soon as possible.</h3>")  
        .hide()  
        .fadeIn(1500, function() {   
        });  
      },
		error: function(){
		alert('There was a error');
		}
    });  
    return false;  
});
$("#podcast").click(function() {
$("#cont").html("<h1>Podcasts</h1>");
$("#homecon").html("");
$("#leftsideul").html("<li id='vpc'><a href='#'>Video PodCast</a></li><li></li><li id='apc'><a href='#'>Audio PodCast</a></li>");
});
$("#home").mouseover(function(){
$("#service").removeClass('active');
$("#contact").removeClass('active');
$("#podcast").removeClass('active');
$("#programming").removeClass('active');
$("#rssfeeds").removeClass('active')
$("#home").addClass('active');
});
$("#rssfeeds").mouseover(function(){
$("#home").removeClass('active');
$("#service").removeClass('active');
$("#contact").removeClass('active');
$("#podcast").removeClass('active');
$("#programming").removeClass('active');
$("#rssfeeds").addClass('active');
});
$("#service").mouseover(function(){
$("#home").removeClass('active');
$("#contact").removeClass('active');
$("#podcast").removeClass('active');
$("#programming").removeClass('active');
$("#rssfeeds").removeClass('active')
$("#service").addClass('active');
});
$("#contact").mouseover(function(){
$("#service").removeClass('active');
$("#home").removeClass('active');
$("#podcast").removeClass('active');
$("#programming").removeClass('active');
$("#rssfeeds").removeClass('active')
$("#contact").addClass('active');
});
$("#podcast").mouseover(function(){
$("#service").removeClass('active');
$("#contact").removeClass('active');
$("#home").removeClass('active');
$("#programming").removeClass('active');
$("#rssfeeds").removeClass('active')
$("#podcast").addClass('active');
});
$("#programming").mouseover(function(){
$("#service").removeClass('active');
$("#contact").removeClass('active');
$("#home").removeClass('active');
$("#podcast").removeClass('active');
$("#rssfeeds").removeClass('active')
$("#programming").addClass('active');
});
$(document).on("click","#apc",function(){
$("#homecon").html("<audio src='http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg' autoplay>Your browser does not support the <code>audio</code> element.<track kind='captions' src='foo.en.vtt' srclang='en' label='English'> </audio>");
});
$(document).on("click","#vpc",function(){
$("#homecon").html("<video width='320' height='240' controls='controls'><source src='http://www.dreamcpu.com/videos/daniel.ogv' poster='/images/cloudhover.png'/><source src='http://www.dreamcpu.com/videos/daniel.mp4' type='video/mp4' poster='/images/cloudhover.png'/>Your browser does not support the video tag.</video>");
});
$("#programming").click(function(){
$("#cont").html("<h1>Programming Blog</h1>");
$("#homecon").addClass('blogs');
$("#homecon").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas tincidunt ante non fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus quis urna leo, et pharetra ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque nisl sem, imperdiet sit amet pharetra vel, tincidunt id dolor. Phasellus nec faucibus massa. Phasellus placerat eros ante, a venenatis lectus. Aenean eros nisl, porttitor vitae scelerisque at, ultrices ac tellus. Sed at elit vitae elit iaculis blandit. Aliquam facilisis ante at magna facilisis semper. Vivamus vitae turpis sapien, vitae tempor dolor. In lacinia mollis pellentesque. Aliquam ut ipsum mauris. Duis mollis, ipsum vitae adipiscing vestibulum, urna purus feugiat orci, ac congue eros felis quis nulla. Cras nibh lacus, vestibulum at volutpat at, rutrum at nisl. Duis nulla massa, imperdiet sed porta a, sodales sed dolor.Donec tincidunt ultrices vestibulum. Mauris venenatis lacinia tristique. Nullam vitae mi eget velit tempor vestibulum non vel sem. Donec vulputate sagittis sodales. Nullam ligula mi, aliquet sit amet vestibulum id, consequat at est. Phasellus egestas quam et mauris dignissim dictum ut ut felis. Aenean tempus ante non turpis faucibus aliquet non ut urna. In vulputate, erat sed ultrices faucibus, nunc arcu condimentum leo, nec iaculis elit nibh eget turpis. Donec pellentesque augue erat, eget elementum magna. Phasellus rutrum malesuada libero quis posuere. Nunc nec sapien arcu, non mollis sem. Suspendisse accumsan mollis arcu id vestibulum.Morbi sit amet massa tempus leo faucibus luctus vitae vitae ipsum. Quisque et justo purus, bibendum sodales metus. Mauris eu enim nisl. Praesent ac eros eget arcu consequat placerat. Praesent ut felis mi. Mauris in risus quam, at malesuada arcu. Etiam id urna sit amet erat iaculis rhoncus. Suspendisse sollicitudin facilisis purus. Suspendisse adipiscing blandit tempor. Donec id ultrices leo. Aliquam pellentesque porttitor odio vel tempor. Suspendisse porta sem a ligula tempor malesuada nec sed libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl erat, egestas ut faucibus at, adipiscing et metus.Etiam id enim sem, nec vehicula velit. Phasellus luctus rhoncus commodo. Duis justo nulla, accumsan volutpat adipiscing at, placerat in eros. Pellentesque fermentum urna sit amet mauris pretium nec sollicitudin justo porta. Pellentesque pharetra enim quis lectus elementum vulputate. Quisque scelerisque turpis non odio posuere ut blandit elit adipiscing. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent enim arcu, tincidunt vel porttitor ut, viverra eget nunc. Nulla ornare accumsan risus sit amet blandit. Quisque suscipit accumsan neque, nec hendrerit odio malesuada quis. In hac habitasse platea dictumst. Nulla sodales metus pellentesque magna vulputate tristique.Donec imperdiet, turpis eu interdum aliquam, lectus nisl tincidunt diam, rhoncus aliquam massa diam vitae lorem. In laoreet ante vel nisi mollis ac euismod lorem pulvinar. Donec id massa at tellus porta gravida. Phasellus at venenatis elit. Quisque ac justo quam, ut lobortis justo. Duis sit amet sapien dui. Fusce volutpat ultricies velit sollicitudin tempus. Fusce ante neque, iaculis in sagittis in, congue nec leo. Vivamus semper interdum elementum. Morbi nisl ante, malesuada a luctus vestibulum, ornare ut felis. Aliquam tristique feugiat nibh in fermentum. teteetetetetttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas tincidunt ante non fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus quis urna leo, et pharetra ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque nisl sem, imperdiet sit amet pharetra vel, tincidunt id dolor. Phasellus nec faucibus massa. Phasellus placerat eros ante, a venenatis lectus. Aenean eros nisl, porttitor vitae scelerisque at, ultrices ac tellus. Sed at elit vitae elit iaculis blandit. Aliquam facilisis ante at magna facilisis semper. Vivamus vitae turpis sapien, vitae tempor dolor. In lacinia mollis pellentesque. Aliquam ut ipsum mauris. Duis mollis, ipsum vitae adipiscing vestibulum, urna purus feugiat orci, ac congue eros felis quis nulla. Cras nibh lacus, vestibulum at volutpat at, rutrum at nisl. Duis nulla massa, imperdiet sed porta a, sodales sed dolor.Donec tincidunt ultrices vestibulum. Mauris venenatis lacinia tristique. Nullam vitae mi eget velit tempor vestibulum non vel sem. Donec vulputate sagittis sodales. Nullam ligula mi, aliquet sit amet vestibulum id, consequat at est. Phasellus egestas quam et mauris dignissim dictum ut ut felis. Aenean tempus ante non turpis faucibus aliquet non ut urna. In vulputate, erat sed ultrices faucibus, nunc arcu condimentum leo, nec iaculis elit nibh eget turpis. Donec pellentesque augue erat, eget elementum magna. Phasellus rutrum malesuada libero quis posuere. Nunc nec sapien arcu, non mollis sem. Suspendisse accumsan mollis arcu id vestibulum.Morbi sit amet massa tempus leo faucibus luctus vitae vitae ipsum. Quisque et justo purus, bibendum sodales metus. Mauris eu enim nisl. Praesent ac eros eget arcu consequat placerat. Praesent ut felis mi. Mauris in risus quam, at malesuada arcu. Etiam id urna sit amet erat iaculis rhoncus. Suspendisse sollicitudin facilisis purus. Suspendisse adipiscing blandit tempor. Donec id ultrices leo. Aliquam pellentesque porttitor odio vel tempor. Suspendisse porta sem a ligula tempor malesuada nec sed libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl erat, egestas ut faucibus at, adipiscing et metus.Etiam id enim sem, nec vehicula velit. Phasellus luctus rhoncus commodo. Duis justo nulla, accumsan volutpat adipiscing at, placerat in eros. Pellentesque fermentum urna sit amet mauris pretium nec sollicitudin justo porta. Pellentesque pharetra enim quis lectus elementum vulputate. Quisque scelerisque turpis non odio posuere ut blandit elit adipiscing. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent enim arcu, tincidunt vel porttitor ut, viverra eget nunc. Nulla ornare accumsan risus sit amet blandit. Quisque suscipit accumsan neque, nec hendrerit odio malesuada quis. In hac habitasse platea dictumst. Nulla sodales metus pellentesque magna vulputate tristique.Donec imperdiet, turpis eu interdum aliquam, lectus nisl tincidunt diam, rhoncus aliquam massa diam vitae lorem. In laoreet ante vel nisi mollis ac euismod lorem pulvinar. Donec id massa at tellus porta gravida. Phasellus at venenatis elit. Quisque ac justo quam, ut lobortis justo. Duis sit amet sapien dui. Fusce volutpat ultricies velit sollicitudin tempus. Fusce ante neque, iaculis in sagittis in, congue nec leo. Vivamus semper interdum elementum. Morbi nisl ante, malesuada a luctus vestibulum, ornare ut felis. Aliquam tristique feugiat nibh in fermentum. teteetetetetttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas tincidunt ante non fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus quis urna leo, et pharetra ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque nisl sem, imperdiet sit amet pharetra vel, tincidunt id dolor. Phasellus nec faucibus massa. Phasellus placerat eros ante, a venenatis lectus. Aenean eros nisl, porttitor vitae scelerisque at, ultrices ac tellus. Sed at elit vitae elit iaculis blandit. Aliquam facilisis ante at magna facilisis semper. Vivamus vitae turpis sapien, vitae tempor dolor. In lacinia mollis pellentesque. Aliquam ut ipsum mauris. Duis mollis, ipsum vitae adipiscing vestibulum, urna purus feugiat orci, ac congue eros felis quis nulla. Cras nibh lacus, vestibulum at volutpat at, rutrum at nisl. Duis nulla massa, imperdiet sed porta a, sodales sed dolor.Donec tincidunt ultrices vestibulum. Mauris venenatis lacinia tristique. Nullam vitae mi eget velit tempor vestibulum non vel sem. Donec vulputate sagittis sodales. Nullam ligula mi, aliquet sit amet vestibulum id, consequat at est. Phasellus egestas quam et mauris dignissim dictum ut ut felis. Aenean tempus ante non turpis faucibus aliquet non ut urna. In vulputate, erat sed ultrices faucibus, nunc arcu condimentum leo, nec iaculis elit nibh eget turpis. Donec pellentesque augue erat, eget elementum magna. Phasellus rutrum malesuada libero quis posuere. Nunc nec sapien arcu, non mollis sem. Suspendisse accumsan mollis arcu id vestibulum.Morbi sit amet massa tempus leo faucibus luctus vitae vitae ipsum. Quisque et justo purus, bibendum sodales metus. Mauris eu enim nisl. Praesent ac eros eget arcu consequat placerat. Praesent ut felis mi. Mauris in risus quam, at malesuada arcu. Etiam id urna sit amet erat iaculis rhoncus. Suspendisse sollicitudin facilisis purus. Suspendisse adipiscing blandit tempor. Donec id ultrices leo. Aliquam pellentesque porttitor odio vel tempor. Suspendisse porta sem a ligula tempor malesuada nec sed libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl erat, egestas ut faucibus at, adipiscing et metus.Etiam id enim sem, nec vehicula velit. Phasellus luctus rhoncus commodo. Duis justo nulla, accumsan volutpat adipiscing at, placerat in eros. Pellentesque fermentum urna sit amet mauris pretium nec sollicitudin justo porta. Pellentesque pharetra enim quis lectus elementum vulputate. Quisque scelerisque turpis non odio posuere ut blandit elit adipiscing. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent enim arcu, tincidunt vel porttitor ut, viverra eget nunc. Nulla ornare accumsan risus sit amet blandit. Quisque suscipit accumsan neque, nec hendrerit odio malesuada quis. In hac habitasse platea dictumst. Nulla sodales metus pellentesque magna vulputate tristique.Donec imperdiet, turpis eu interdum aliquam, lectus nisl tincidunt diam, rhoncus aliquam massa diam vitae lorem. In laoreet ante vel nisi mollis ac euismod lorem pulvinar. Donec id massa at tellus porta gravida. Phasellus at venenatis elit. Quisque ac justo quam, ut lobortis justo. Duis sit amet sapien dui. Fusce volutpat ultricies velit sollicitudin tempus. Fusce ante neque, iaculis in sagittis in, congue nec leo. Vivamus semper interdum elementum. Morbi nisl ante, malesuada a luctus vestibulum, ornare ut felis. Aliquam tristique feugiat nibh in fermentum. teteetetetettttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt");
});
});