/***
 * 工具方法
 */

if (!this.myPlugin) {
    this.myPlugin = {}
}

//  this.myPlugin.inherit = function(son, father) {
//     // 兼容性写法
//     var F = function() {}
//     F.prototype = father.prototype;
//     son.prototype = new F();
//     son.prototype.constructor = son;
//     son.prototype.uber = father.prototype;

//     //  es5 写法 圣杯模式
//     //  son.prototype = Object.create(father.prototype);
//     //  son.prototype.constructor = son;
//     //  son.prototype.uber = father.prototype;
//  }

// 高级写法
this.myPlugin.inherit = (function () {
    var F = function () {}
    return function (son, father) {
        F.prototype = father.prototype;
        son.prototype = new F();
        son.prototype.constructor = son;
        son.prototype.uber = father.prototype;
    }
}());

/**
 * clone
 * params{}
 */
this.myPlugin.clone = function (target, deep) {
    if (Array.isArray(target)) {
        //复制数组
        if (deep) {
            var newArray = [];
            for (let i = 0; i < target.length; i++) {
                newArray.push(clone(target[i], deep));
            }
            return newArray;
        } else {
            return target.slice();
        }
    } else if (typeof target === 'object') {
        // 处理对象
        let newTarget = {};
        for (let prop in target) {
            if (deep) {
                newTarget[prop] = clone(target[prop], deep);
            } else {
                newTarget[prop] = target[prop];
            }
        }
        return newTarget;
    } else {
        // 函数原始类型不处理
        return target;
    }
}


/**
 * 函数防抖
 */

 this.myPlugin.debounce = function (callback, time) {
    let timer;
    return function () {
        timer ? clearTimeout(timer) : '';
        const args = arguments;
        timer = setTimeout(() => {
            callback.apply(null, args);
        }, time);
    }
}

/**
 * 函数节流
 */
this.myPlugin.throttle = function (callback, time) {
    let t;
    return function () {
        if(!t || new Date().getTime() - t >= time) {
            callback.apply(null, arguments);
            t = new Date().getTime();
        }
    }
}


/**
 * 管道函数
 */
this.myPlugin.pipe = function () {
    const args = Array.from(arguments);

    return function (val) {
        return args.reduce((result, func) => {
            return func(result);
        }, val);
        // for (let i = 0; i < args.length; i++) {
        //     const func = args[i];
        //     val = func(val);
        // }
        // return val;
    }
}