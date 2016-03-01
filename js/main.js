window.onLoad = init();

function init()
{
	var tabs = '';
	var first = 1;
	var retrievedObject = '';

	bringDivName = function(this_item)
	{
		var temp = document.getElementsByClassName(this_item).parents();
		for (var i = 0; i < temp.length; i++) {
			if (temp[i].id == 'quick-reports'){
				return 'quick-reports';	
			}
			if (temp[i].id == 'my-team-folders'){
				return 'my-team-folders';	
			}
		};
	}




}
