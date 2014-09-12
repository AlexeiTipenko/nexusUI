/** 
	@class number      
	number box
	```html
	<canvas nx="number"></canvas>
	```
	<canvas nx="number" style="margin-left:25px"></canvas>
*/

function number(target, transmitCommand) {
					
	//self awareness
	var self = this;
	this.defaultSize = { width: 50, height: 25 };
	
	//get common attributes and methods
	getTemplate(self, target, transmitCommand);
	
	/** @property {float}  val   float value of number box
	*/
	this.val = 0
	
	this.throttle = nx.throttle;
	this.clip = nx.clip;
	
	this.init = function() {
		self.draw();
	}

	this.draw = function() {
		self.erase();
		self.makeRoundedBG();
		with (self.context) {
			strokeStyle = self.colors.border;
			fillStyle = self.colors.fill;
			lineWidth = self.lineWidth;
			stroke();
			fill();
			
			fillStyle = self.colors.black;
			textAlign = "left";
			font = self.height*.6+"px courier";
      		textBaseline = 'middle';
			fillText(self.val, 10, self.height/2-1);
		}
	}

	this.move = function(e) {
		if (self.clicked) {
			self.val += (self.deltaMove.y*-.1);
			self.val = nx.prune(self.val,1);
			self.draw();
			self.nxTransmit(self.val);
		}
	}
	

	this.animate = function(aniType) {
		
		switch (aniType) {
			case "bounce":
				nx.aniItems.push(self.aniBounce);
				break;
			case "none":
				nx.aniItems.splice(nx.aniItems.indexOf(self.aniBounce));
				break;
		}
		
	}
	
	this.aniBounce = function() {
		if (!self.clicked && self.nodePos[0]) {
			self.nodePos[0] += (self.deltaMove.x/2);
			self.nodePos[1] += (self.deltaMove.y/2);
			self.deltaMove.x = nx.bounce(self.nodePos[0], self.bgLeft + self.nodeSize, self.width - self.bgLeft- self.nodeSize, self.deltaMove.x);
			self.deltaMove.y = nx.bounce(self.nodePos[1], self.bgTop + self.nodeSize, self.height - self.bgTop - self.nodeSize, self.deltaMove.y);
			self.draw();
			self.nxTransmit(self.value);
		}
	}
}