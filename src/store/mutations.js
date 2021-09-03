export default {
    /* mutations唯一的目的就是修改state，但是最好只做一件事 */
    addCounter(state, payload) {
        payload.count++
    },
    addTocar(state, payload) {
        payload.checked = true;
        state.carlist.push(payload)
    }
}