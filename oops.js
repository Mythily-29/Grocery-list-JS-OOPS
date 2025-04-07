class Grocery{
    constructor(){
        this.arr=[]
    }
    push(pname,price){
        this.arr.push({"id":this.arr.length+1,"productname":pname,"price":price})
    }
    editing(array){
        this.arr=array
    }
    deleting(id){
        this.arr=this.arr.filter(x=>{return x.id != id})
    }
}