window.onload = function()
{
	var oItems = document.getElementsByClassName('swiper_img');
	var oPoints = document.getElementsByClassName('icon');
	var oPre = document.getElementById('goPre');
	var oNext = document.getElementById('goNext');

	var timer = 0;
	var index = 0;
	var clearActive = function()
	{
		for(var i = 0; i < oItems.length; i++)
		{
			oItems[i].className = 'swiper_img';
		}
		for(var i = 0; i < oPoints.length; i++)
		{
			oPoints[i].className = 'icon';
		}
	}

	var goIndex = function()
	{
		clearActive();
		oItems[index].className = 'swiper_img active';
		oPoints[index].className = 'icon active';
	}
	var goPre = function()
	{
		if(index == 0)
		{
			index = 2;
		}
		else
		{
			index --;
		}
		goIndex();
	}
	var goNext = function()
	{
		if(index < 2)
		{
			index ++;
		}
		else
		{
			index =0;
		}
		goIndex();
	}

	oPre.addEventListener('click',function(){
		goPre();
		timer = 0;
	})
	oNext.addEventListener('click',function(){
		goNext();
		timer = 0;
	})
	for(var i = 0; i < oPoints.length; i++)
	{
		oPoints[i].addEventListener('click',function(){
			var pointIndex = this.getAttribute('data-index');
			index = pointIndex;
			goIndex();
			timer = 0;
		})
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