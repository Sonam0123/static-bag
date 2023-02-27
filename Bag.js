class Bag {
    constructor(weight) {
        if(!weight){
            throw new Error('bag needs weight')
        } 
        this.weight = weight

    }
    static maxWeight = 23

    checkWeight(){
        if(this.weight > Bag.maxWeight){
            throw new Error('bag is too heavy')
        }else{
            return "you're good"
        }
    }
}

module.exports = Bag