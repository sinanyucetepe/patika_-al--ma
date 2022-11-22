let items = ['item 1','item 2','item 3','item 4'];

let list =document.querySelector('#myList');

items.forEach(function(item){
    CreateItem(item);    
});

list.addEventListener('click',function(item){


    if(item.target.tagName=='LI'){
        item.target.classList.toggle('checked'); 
        ToogleDeleteButton();
    }
});

function ToogleDeleteButton(){
    let checkList =document.querySelectorAll('.checked');

    if(checkList.length>0){
        document.querySelector('#deleteAll').classList.remove('d-none')
    }else{
        document.querySelector('#deleteAll').classList.add('d-none')
    }

}

document.querySelector('#btnCreate').onclick=function(){

    let item =document.querySelector('#txtItem').value;
    if(item===''){
        alert('Please enter input');
        return;
    }
    CreateItem(item);
};

function CreateItem(item){
    let li =document.createElement('li');
    let t=document.createTextNode(item);
    li.className='list-group-item';
    li.appendChild(t);
    list.appendChild(li);


    let span= document.createElement('span');
    let text =document.createTextNode('\u00D7');
    span.className='close';
    span.appendChild(text);
    li.appendChild(span)

    span.onclick=function(){
        let li =this.parentElement;
        li.style.display='none';
        li.classList.remove('checked');
    }
}


document.querySelector('#deleteAll').onclick= function(){
    let elements = document.querySelectorAll('.checked');

    elements.forEach(function(item){

        item.style.display='none';
    });
}




