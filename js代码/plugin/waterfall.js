if (!window.myPlugin) {
    window.myPlugin = {}
}

window.myPlugin.createWaterFall = function (option) {
    const defaultOption = {
        minGap: 10, //水平方向的最小间隙
        imgSrcs: [], //图片路径的数组
        imgWidth: 220, //单张图片的宽度
        container: document.body
    };
    option = Object.assign({}, defaultOption, option);
    // 存放所有的图片元素对象
    const imgs = [];
    //处理父级元素
    handleParent();
    //创建图片元素
    createImgs();
    //设置图片元素的坐标


    //窗口尺寸变化事件
    const debounce = myPlugin.debounce(setImgPosition, 300);
    window.onresize = debounce;

    /**
     * 设置每一张图片的坐标
     */
    function setImgPosition() {
        const info = getHorizontaInfo();
        // 存放每一列下一张图片的top值
        const arr = new Array(info.number);
        arr.fill(0);
        imgs.forEach(img => {
            //设置图片的坐标
            const minTop = Math.min.apply(null, arr);
            img.style.top = minTop + 'px';
            //获取最下值的索引
            const index = arr.indexOf(minTop);
            arr[index] += img.clientHeight + info.gap;

            //横坐标
            img.style.left = index * (option.imgWidth + info.gap) + 'px';
        });
        //设置容器高度
        const maxTop = Math.max.apply(null, arr);
        option.container.style.height = maxTop - info.gap + 'px';
    }

    /**
     * 得到图片水平方向上的信息
     */
    function getHorizontaInfo() {
        const obj = {};
        //容器宽度
        obj.containerWidth = option.container.clientWidth;
        //计算图片数量
        obj.number = Math.floor((obj.containerWidth + option.minGap) / (option.imgWidth + option.minGap));
        //计算水平空隙
        obj.gap = (obj.containerWidth - obj.number * option.imgWidth) / (obj.number - 1);
        return obj;
    }

    /**
     * 创建图片元素
     */
    function createImgs() {
        const debounce = myPlugin.debounce(setImgPosition, 50);
        for(let i = 0; i < option.imgSrcs.length; i ++) {
            const img = document.createElement('img');
            img.src = option.imgSrcs[i];
            img.style.width = option.imgWidth + 'px';
            img.style.position = 'absolute';
            //实现过渡
            img.style.transition = '.5s';
            imgs.push(img);
            img.onload = debounce;
            option.container.appendChild(img);
        }
    }

    /**
     * 处理父元素，因为图片都是绝对定位，父元素必须是一个定位元素
     */
    function handleParent() {
        //如果父元素不是定位元素，将其变为相对定位
        const style = getComputedStyle(option.container);
        if(style.position === 'static') {
            option.container.style.position = 'relative';
        }
    }
}