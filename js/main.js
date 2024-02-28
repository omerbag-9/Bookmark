var websiteName = document.getElementById("webName")
var websiteUrl = document.getElementById("webUrl")
var webList = []

if(localStorage.getItem('dataList') != null){
    webList=JSON.parse(localStorage.getItem('dataList'))
    displayData()
}

function addwebsite(){
    var website = {
        webName:websiteName.value,
        webUrl:websiteUrl.value
    }
    webList.push(website)
    localStorage.setItem('dataList',JSON.stringify(webList))
    displayData()
}

function displayData(){
    temp=''
    for(var i =0 ; i<webList.length;i++){
        temp+=`<tr>
        <td>`+i+`</td>
        <td>`+webList[i].webName+`</td>
        <td><button class="btn-visit"><i class="fa-solid fa-eye"></i> <a href="`+webList[i].webUrl+`" target="_blank" class="text-white text-decoration-none">visit</a></button></td>
        <td><button class="btn-delete" onclick="deleteweb(`+i+`)" type="button"><i class="fa-solid fa-trash-can"></i> delete</button></td>
    </tr>`
    }
    document.getElementById('Mydata').innerHTML= temp
}

function deleteweb(x){
    webList.splice(x,1)
    localStorage.setItem('dataList',JSON.stringify(webList))
    displayData()
}


function showmodel(){
    var btn1=document.getElementById('show')
    btn1.setAttribute('data-bs-toggle' ,'modal')
    btn1.setAttribute('data-bs-target' ,'#exampleModal')
}


function addBook(){
    if(websiteName.value =='' || websiteUrl.value==''){
        showmodel()
    }
    else if(websiteName.value !='' && websiteUrl.value !=''){
        addwebsite() 
    }
    console.log(websiteName.value)
}

function showmodel(){
    let exampleModal = document.getElementById("exampleModal")
    let modal = new bootstrap.Modal(exampleModal)
    modal.show()


}