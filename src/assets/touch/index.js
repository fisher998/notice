class vueTouch {
    constructor (el,bindCls, targetCls) {
        const _this = this;
        this.el = el;
        this.bindCls = bindCls;
        this.targetCls = targetCls;
        this.touchDelay = 100;
        this.replaceReg =/\sgrew$/;
        this.matchCls = /item-box|circular-box/;
        this.stopCls = /app/;
        this.moveMax = 10;
        this.timer = null;
        this.holdEl = null;
        this.start = ( e ) => {
            let el = e.target;
            let loop = true;
            let i = 0;
            while (loop) {
                i ++;
                if(i > 30) {loop = false}
                if(el.className) {
                    if(_this.matchCls.test(el.className)) {
                        loop = false;
                    } else if (_this.stopCls.test(el.className)) {
                        loop = false;
                        el = false;
                    } else {
                        el = el.parentNode;
                    }
                } else {
                    el = el.parentNode;
                }
            }
            _this.holdEl = el;
            if(_this.holdEl) _this.holdEl.setAttribute('class', _this.holdEl.getAttribute('class') + ' ' + _this.targetCls)
        }
        this.end = ( e ) => {
            if(_this.holdEl) _this.holdEl.setAttribute('class', _this.holdEl.getAttribute('class').replace(_this.replaceReg, ''));
        }
       this.el.addEventListener('touchstart',this.start, false);
       this.el.addEventListener('touchend',this.end, false);
       this.el.addEventListener('touchMove',this.move, false);
    }
}

export default vueTouch; 