(function(w,d){
	// change styles here
	var defaultSettings = {
		position: "fixed",
	    width: "38px",
	    height: "38px",
	    right: "30px",
	    bottom: "40px",
	    cursor: "pointer",
	    backgroundColor: "#2f343a",
	}

	// DOM
	function goTop(options){
		var self = this;
		self = Object.assign(self,options,defaultSettings);
		self._setStyles();
		self._setEvent();
	}

	goTop.prototype = {
		_setStyles: function(){
			var self = this;
			var toTopDom = d.getElementById(self.container);
			// using a for loop to get all styles that set previously
			for(var i in self){
				// using "if" to determine the right element that we want
				if(i!= "container" && i!="_setStyles" && i!="_setEvent"){
					toTopDom.style[i] = self[i]; 
				}
			}		
		},
		_setEvent: function(){
			var self = this;
			var toTopDom = d.getElementById(self.container);
			var hoverBgColor = d.getElementById(self.hoverBgColor);
			// using addEventListener() method to trigger the mouseover/mouseleave event
			hoverBgColor.addEventListener('mouseover', function(){
				hoverBgColor.style.backgroundColor = 'grey';
			});
			hoverBgColor.addEventListener('mouseleave', function(){
				hoverBgColor.style.backgroundColor = '#2f343a';
			});
			toTopDom.onclick = function(){
			   // clearInterval() to prevent continuous executing
			   clearInterval(intervalID);
			   // using setInterval() and d.documentElement.scrollTop to execute back to top function
			   var intervalID = setInterval(function(){
			   	if(d.documentElement.scrollTop > 0){
			   		d.documentElement.scrollTop = d.documentElement.scrollTop -20;
			   	}
			   	else{
			   		clearInterval(intervalID);
			   	}
			   },1);
			}
		}
	}
	w.goTop = goTop;
})(window,document)

