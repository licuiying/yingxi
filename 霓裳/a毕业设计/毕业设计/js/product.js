window.onload = function()
{
	var oItems = document.getElementsByClassName('swiper_img');

	var timer = 0;
	var index = 0;
	var clearActive = function()
	{
		for(var i = 0; i < oItems.length; i++)
		{
			oItems[i].className = 'swiper_img';
		}
	}

	var goIndex = function()
	{
		clearActive();
		oItems[index].className = 'swiper_img active';
	}
	var goPre = function()
	{
		if(index == 0)
		{
			index = 1;
		}
		else
		{
			index --;
		}
		goIndex();
	}
	var goNext = function()
	{
		if(index < 1)
		{
			index ++;
		}
		else
		{
			index =0;
		}
		goIndex();
	}

	setInterval(function(){
		timer ++;
		if(timer == 50)
		{
			goNext();
			timer = 0;
		}
	},100);
};