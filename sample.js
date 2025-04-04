const show = new Grocery()
let product=document.getElementById('product');
let price=document.getElementById('price');
let btn=document.getElementById('btn');
let editid;


btn.addEventListener('click',()=>{
   $('#delete-all').css('display','block')
    if(btn.textContent=='edit'){
        show.editing(editid,product.value,price.value)
         structure()
         btn.textContent='add'; editid;product.value='',price.value=''
        return;
    }
   
    show.push(product.value,price.value)
    product.value='',price.value=''
    structure()
})

function structure(){
    $("#taskList").empty();
    show.arr.forEach(x=>{    
        let li=document.createElement('li')
        li.innerHTML =`<span>${x.productname}</span><span>${x.price}</span> <button onclick =" edit(${x.id},'${x.productname}',${x.price})" class="edit">✏️</button> <button onclick="dele(event,${x.id})" class='dele'>🗑️ </button>`
        document.getElementById('taskList').append(li)
    })
}

function edit(id,productnames,prices){
    editid=id
    btn.textContent='edit'
    product.value=productnames;price.value=prices
}

function dele(event,id){
    show.deleting(id); event.target.parentElement.remove()
}

$('#delete-all').click(function(){
    $("#taskList").empty();
    show.arr=[];$('#delete-all').css('display','none')
})
