export const filterPrice=(price)=>{
    if (!price) {//在这里进行一次传递数据判断.如果传递进来的为空值,返回其空字符串.解决其问题
        return '';
    }
    return price.toFixed(2)
}