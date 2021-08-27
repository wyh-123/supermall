import { request } from "../network/request";
export function Getdetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
export function Getrecommend() {
    return request({
        url: '/recommend',
    })
}
/* 详情数据 */
/* 从res数据中取出要用的数据传给组件 */
export class Goods{
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.services = services;
        this.columns = columns;
        this.realPrice=itemInfo.lowNowPrice
    }
}
// 店铺数据
export class Shop {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods;
    }
}
/* 商品参数 */
export class GoodsParam {
    constructor(info, rule) {
      // 注: images可能没有值(某些商品有值, 某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
}
// 详情数据
