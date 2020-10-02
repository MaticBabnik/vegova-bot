module.exports = {
    randomItems: (items, num = 1) => {
        const res = []
        for (let i = 0; i < num; i++) {
            const index = Math.floor(Math.random() * items.length )
            console.log(index)
            res.push(...items.splice(index, 1))
        }
        return res
    }
}