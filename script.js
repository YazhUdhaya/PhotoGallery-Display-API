function getPhotoData({id,author,download_url,height,width}){

   // console.log(data[i].author);
        // console.log(`${data[i].height} X${data[i].width}`);
        // console.log(data[i].url);
        // console.log(data[i].download_url);
        // console.log(data[i].id);

 document.getElementById("photoGraphDetail").innerHTML += ` <div class="col-4 mt-4">
  <div class="card">
    <img src="${download_url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Author Name : ${author}</h5>
      <p class="card-text">${height} X ${width} &nbsp;&nbsp;&nbsp<span class="card-text"> #${id} </span></p>
    </div>
  </div>
</div>`

}
async function displayPhotoData(){
let res = await fetch(`https://picsum.photos/v2/list?page=2&limit=100`,{method:"GET"})
let data = await res.json();
    console.log(data);
    document.getElementById("photoGraphDetail").innerHTML ="";
    const pagination = document.querySelector(".pagination");
    const noOfPages = Math.ceil(data.length/10);

    for(let i=1;i<= noOfPages;i++){
      
      const page = document.createElement("button")
        page.innerHTML = i;
        pagination.append(page);
        page.onclick = () => {           
            const pageUsers = data.slice((i-1)*10, i*10);
            document.getElementById("photoGraphDetail").innerHTML  = "";
            pageUsers.forEach((user)=>getPhotoData(user));
        };
      
}
const firstTenUsers = data.slice(0,10);
    firstTenUsers.forEach((user) => getPhotoData(user));

}
document.addEventListener('DOMContentLoaded',displayPhotoData);