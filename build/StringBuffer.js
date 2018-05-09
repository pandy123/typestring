"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringBuffer = /** @class */ (function () {
    /**
     * 构造函数
     */
    function StringBuffer() {
        this._values = new Array();
    }
    Object.defineProperty(StringBuffer.prototype, "length", {
        /**
         * 当前数值的长度
         */
        get: function () {
            return this._values.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 追加一个数组字符串
     */
    StringBuffer.prototype.pushArray = function (arr, offset) {
        if (offset === void 0) { offset = 0; }
        for (var i = 0, count = arr.length; i < count; i++) {
            var index = i + offset;
            if (arr[index]) {
                this._values.push(arr[index]);
            }
        }
        return this;
    };
    /**
     * 追加一个字符串
     * @param str
     */
    StringBuffer.prototype.pushString = function (str) {
        this._values.push(str);
        return this;
    };
    /**
     * 追加字符串后，加入换行符
     * @param arr
     */
    StringBuffer.prototype.pushLine = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        this.pushArray(arr, 0);
        this.pushString('\r\n');
        return this;
    };
    /**清空字符 */
    StringBuffer.prototype.clear = function () {
        this._values = new Array();
    };
    /**生成字符串 */
    StringBuffer.prototype.toString = function () {
        return this._values.join("");
    };
    /**
     * 释放
     */
    StringBuffer.prototype.dispose = function () {
        var count = this.length;
        for (var i = 0; i < count; i++) {
            this._values[i] = null;
        }
        this._values = null;
    };
    return StringBuffer;
}());
exports.StringBuffer = StringBuffer;
//# sourceMappingURL=StringBuffer.js.map