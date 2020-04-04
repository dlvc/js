if (!this.myPlugin) {
    this.myPlugin = {};
}

/**
 * 动画
 * @param {object} option 配置对象
 */

this.myPlugin.Animate = function (option) {
    //默认配置
    const defaultOption = {
        duration: 16, //默认间隔时间
        total: 1000, //默认总时间
        begin: {}, //初始值
        end: {} //终止值
    };
    //处理配置
    this.option = Object.assign({}, defaultOption, option);
    //计时器id
    this.timer = null;
    //运动总次数
    this.number = Math.ceil(this.option.total / this.option.duration);
    //当前运动次数
    this.curNumber = 0;
    //当前状态
    this.curData = myPlugin.clone(this.option.begin);
    //所有属性运动的总距离
    this.distance = {};
    //所有属性每次运动的距离
    this.everyDistance = {};
    for (let prop in this.option.begin) {
        this.distance[prop] = this.option.end[prop] - this.option.begin[prop];
        this.everyDistance[prop] = this.distance[prop] / this.number;
    }
}

/**
 * 开始动画
 */
this.myPlugin.Animate.prototype.start = function() {
    //计时器存在不做任何处理
    if(this.timer || this.curNumber === this.number) {
        return;
    }
    if(this.option.onstart) {
        this.option.onstart.call();
    }
    this.timer = setInterval(() => {
        //运动次数
        this.curNumber ++;
        //改变this.curData
        for(let prop in this.curData) {
            //处理精确问题
            console.log(this.curNumber, this.number);
            if(this.curNumber === this.number) {
                this.curData[prop] = this.option.end[prop];
            }
            this.curData[prop] += this.everyDistance[prop];
        }
        if(this.option.onmove) {
            this.option.onmove.call(this);
        }
        if(this.curNumber === this.number) {
            this.stop();
            if(this.option.onover) {
                this.option.onmove.call(this);
            }
        }
    }, this.option.duration);
}

/**
 * 停止动画
 */
this.myPlugin.Animate.prototype.stop = function() {
    clearInterval(this.timer);
    this.timer = null;
}

