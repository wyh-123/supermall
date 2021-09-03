export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            /* 判断是否有相同的product */
            let oldproduct = context.state.carlist.find(item => {
                return item.iid === payload.iid
            })
            if (oldproduct) {
                resolve('商品数量加一')
                context.commit('addCounter', oldproduct)
            } else {
                resolve('添加购物车成功')
                payload.count = 1;
                context.commit('addTocar', payload)
            }
        })
    }
}