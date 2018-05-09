
export class TypeString {
   /**字符的存储列表 */
   private _values: Array<string>;

   /**
    * 构造函数
    */
   public constructor() {
      this._values = new Array();
   }

   /**
    * 当前数值的长度
    */
   public get length() {
      return this._values.length;
   }

   /**
    * 追加一个数组字符串
    */

   public pushArray(arr: Array<string>, offset: number = 0): TypeString {
      for (var i = 0, count = arr.length; i < count; i++) {
         var index = i + offset;
         if (arr[index]) {
            this._values.push(arr[index]);
         }
      }
      return this;
   }

   /**
    * 追加一个字符串
    * @param str 
    */
   public pushString(str: string): TypeString {
      this._values.push(str);
      return this;
   }

   /**
    * 追加字符串后，加入换行符
    * @param arr 
    */
   public pushLine(...arr: Array<string>): TypeString {
      this.pushArray(arr, 0);
      this.pushString('\r\n');
      return this;
   }

   /**清空字符 */
   public clear() {
      this._values = new Array<string>();
   }

   /**生成字符串 */
   public toString() {
      return this._values.join("");
   }

   /**
    * 释放
    */
   public dispose() {
      var count = this.length;
      for (var i = 0; i < count; i++) {
         this._values[i] = null as any;
      }
      this._values = null as any;
   }
}