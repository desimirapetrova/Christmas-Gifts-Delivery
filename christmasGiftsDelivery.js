function solution() {
const[gifts,sent,discard]=document.querySelectorAll('section ul');
const input=document.querySelector('input');
document.querySelector('button').addEventListener('click',addGift);

function addGift(){
    const name=input.value;
    input.value='';

    const element=e('li',name,'gift');
    const sentBtn=e('button','Send','sendButton');
    const delBtn=e('button','Discard','discardButton');

    element.appendChild(sentBtn);
    element.appendChild(delBtn);
    
    sentBtn.addEventListener('click',()=>sendBtn(name,element));
    delBtn.addEventListener('click',()=>discardGift(name,element));

    
    gifts.appendChild(element);

    sortGifts();
}
function sendBtn(name,gift){
    gift.remove();
    const element=e('li',name,'gift');
    sent.appendChild(element);
}
function discardGift(name,gift){
    gift.remove();
    const element=e('li',name,'gift');
    discard.appendChild(element);
}
function sortGifts(){
    Array.from(gifts.children)//сортиране по азбучен ред
    .sort((a,b)=>a.textContent.localeCompare(b.textContent))
    .forEach(g=>gifts.appendChild(g));
}

function e(type,content,className){//create element
    const result=document.createElement(type);
    result.textContent=content;
    if(className){
        result.className=className;
    }
    return result;
}
}
