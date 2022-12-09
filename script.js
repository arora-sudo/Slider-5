$(document).ready(
function()
{
	var img_name = 'a.jpg';
	var index=0;
	var img_add,list,loop,lastIndex;
	var scroll_pos=0;
	var temp=0;
	var status='on';
	$(".thumbnail").niceScroll();
	$(".image").html("<img class='images' src='images/"+img_name+"'>");
	$(".thumbs img").first().css('border','3px solid #fff');
	loop=setInterval(slider,2000);
	function slider()
	{
		lastIndex=$('.thumbs').last().index();
		if(index==lastIndex)
		{
			index=$(".thumbs").first().index();
		}
		else
		{
			++index;
		}
		
		img_add=$(".thumbs").eq(index).find('img').attr('src');
		list=img_add.split('/',3);
		img_name=list[2];
		$(".image img").fadeOut(300,function()
		{
			$(".image").html("<img class='images' src='images/"+img_name+"'>");
			$(".image img").fadeOut(0);
			$(".image img").fadeIn(300);
		}
		);
		
		$('.images1').fadeOut(300,function(){
			$(this).attr('src','images/'+img_name);
			$(this).fadeIn();
		});
		
		$(".thumbs img").css('border','3px solid rgba(0,0,0,0.4)');
		$(".thumbs").eq(index).find('img').css('border','3px solid #fff');
		if(index >= 4)
		{
			scroll_pos=$(".thumbnail").scrollLeft()+115;
			$(".thumbnail").animate({scrollLeft:scroll_pos},500);
		}
		if(temp == 1)
		{
			$(".thumbnail").animate({scrollLeft:0},500);
			temp=0;
		}
		if(index == lastIndex)
		{
			temp=1;
		}
		
		$(".thumbs img").click(
		function()
		{
			clearInterval(loop);
			index=$(this).parent().index();
			$(".thumbs img").css("border","rgba(0,0,0,0.4)");
			$(this).css('border','3px solid #fff');
			img_add=$(this).attr('src');
			list=img_add.split('/',3);
			img_name=list[2];
			$(".image img").fadeOut(300,function()
			{
				$(".image").html("<img class='images' src='images/"+img_name+"'>");
				$(".image img").fadeOut(0);
				$(".image img").fadeIn(300);
			}
			);
			if(status == 'on')
			{
				loop=setInterval(slider,2000);
			}
			
		}
		);
		
		
	}
	
	img_name=$('.images').attr('src');
	$('body').append("<div class='big'><div><img class='images1' src='"+img_name+"'><img class='left' src='images/icons/left.png'><img class='right' src='images/icons/right.png'><img class='close' src='images/icons/close.png'><img class='pause' src='images/icons/pause.png'><img class='play' src='images/icons/play.png'></div></div>");
	$('.big').hide();
	$('.btnExpand').click(
	function()
	{
		$('.big').fadeIn(250);
	}
	);
	$(".big").css({
		'background-color':'rgba(0,0,0)',
		'width':'100%',
		'height':'100%',
		'position':'fixed',
		'top':'0',
		'left':'0'
	});
	$(".big div").css({
		'margin':'0 auto',
		'width':'1000px',
		'height':'700px',
		'position':'relative',
		'margin-top':'35px'
	});
	$('.images1').css({
		'height':'700px',
		'width':'1000px'
	});
	$('.close').css({
		'width':'13px',
		'position':'absolute',
		'top':'8px',
		'right':'8px',
	});
	$('.left').css({
		'width':'23px',
		'position':'absolute',
		'top':'314px',
		'left':'10px'
	});
	$('.right').css({
		'width':'23px',
		'position':'absolute',
		'top':'314px',
		'right':'10px'
	});
	$('.play , .pause').css({
		'width':'12px',
		'position':'absolute',
		'top':'318px',
		'right':'40px'
	});
	$('.play').css({
		'display':'none'
	});
	$(".close").click(
	function()
	{
		$('.big').fadeOut(250,function()
		{
			$(this).hide();
		}
		);
	}
	);
	$(".btnPause,.pause").click(
		function()
		{
			status='off';
			$(".btnPause,.pause").fadeOut();
			$(".btnPlay,.play").fadeIn();
			clearInterval(loop);
		}
		);
		$(".btnPlay,.play").click(
		function()
		{
			status='on';
			$(".btnPlay,.play").fadeOut();
			$(".btnPause,.pause").fadeIn();
			loop=setInterval(slider,2000);
		}
		);
		$(".btnRight, .right").click(
		function()
		{
			clearInterval(loop);
			if(index==lastIndex)
			{
				index=$(".thumbs").first().index();
			}
			else
			{
				index=index+1;
			}
		
			img_add=$(".thumbs").eq(index).find('img').attr('src');
			list=img_add.split('/',3);
			img_name=list[2];
			$(".image img").fadeOut(250,function()
			{
				$(".image").html("<img class='images' src='images/"+img_name+"'>");
				$(".image img").fadeOut(0);
				$(".image img").fadeIn(250);
			}
			);
			
			$('.images1').fadeOut(250,function(){
			$(this).attr('src','images/'+img_name);
			$(this).fadeIn();
			});
		
			$(".thumbs img").css('border','3px solid rgba(0,0,0,0.4)');
			$(".thumbs").eq(index).find('img').css('border','3px solid #fff');
			if(status == 'on')
			{
				loop=setInterval(slider,2000);
			}
		}
		);
		
		$(".btnLeft , .left").click(
		function()
		{
			clearInterval(loop);
			if(index==$(".thumbs").first().index())
			{
				index=$(".thumbs").last().index();
			}
			else
			{
				index=index-1;
			}
			
			img_add=$(".thumbs").eq(index).find('img').attr('src');
			list=img_add.split('/',3);
			img_name=list[2];
			$(".image img").fadeOut(300,function()
			{
				$(".image").html("<img class='images' src='images/"+img_name+"'>");
				$(".image img").fadeOut(0);
				$(".image img").fadeIn(300);
			}
			);
			
			$('.images1').fadeOut(250,function(){
			$(this).attr('src','images/'+img_name);
			$(this).fadeIn();
			});
			
			$(".thumbs img").css('border','3px solid rgba(0,0,0,0.4)');
			$(".thumbs").eq(index).find('img').css('border','3px solid #fff');
			if(status == 'on')
			{
				loop=setInterval(slider,2000);
			}
		}
		);
}
);