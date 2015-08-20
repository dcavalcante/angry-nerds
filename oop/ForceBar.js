ForceBar.prototype = Object.create(Agent.prototype);
ForceBar.prototype.constructor = ForceBar;
ForceBar.prototype.update = function (deltaMillis){
    if(this.active){
        this.force += deltaMillis * 0.001 * this.speed * this.signal;
        if (this.force >= 1 && this.signal > 0){
            this.force = 1;
            this.signal *= -1;
        } else if (this.force <= 0 && this.signal < 0) {
            this.force = 0;
            this.signal *= -1;
        }
    }
    else {
        this.force = 0;
        this.signal = 1;
    }
};

function ForceBar(imgSource, initObj){ 
    Agent.call(this, imgSource, initObj);
    this.minY = initObj ? initObj.minY || 0 : 0;
    this.maxY = initObj ? initObj.maxY || 0 : 0;
    this.speed = initObj ? initObj.speed || 1 : 1;
    this.force = 0;
    this.active = false;
    this.signal = 1;
}