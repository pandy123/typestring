export declare class StringBuffer {
    /**字符的存储列表 */
    private _values;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 当前数值的长度
     */
    readonly length: number;
    /**
     * 追加一个数组字符串
     */
    pushArray(arr: Array<string>, offset?: number): StringBuffer;
    /**
     * 追加一个字符串
     * @param str
     */
    pushString(str: string): StringBuffer;
    /**
     * 追加字符串后，加入换行符
     * @param arr
     */
    pushLine(...arr: Array<string>): StringBuffer;
    /**清空字符 */
    clear(): void;
    /**生成字符串 */
    toString(): string;
    /**
     * 释放
     */
    dispose(): void;
}
