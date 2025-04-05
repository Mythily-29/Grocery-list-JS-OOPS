class Grocery{
    constructor(){
        this.arr=[]
    }
    push(pname,price){
        this.arr.push({"id":this.arr.length+1,"productname":pname,"price":price})
    }
    editing(id,pname,prices){
        this.arr.map(x=>{
            if(x.id==id){
                x.productname=pname;
                x.price=prices
            }
        })
    }
    deleting(id){
        this.arr=this.arr.filter(x=>{return x.id != id})
    }
}