function updateUserView(){
    document.getElementById("app").innerHTML=`
    <div  class="w-1/2  flex justify-end items-center px-4 pointer-events-auto">
    <svg class="w-9 h-9 cursor-pointer text-blue-500 hover:text-blue-700"  fill="none"  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
    onclick="model.app.page='admin'; updateView()"
    ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded ml-4 cursor-pointer "
onclick="model.app.page='admin'; updateView()"
>
 Add New Happening
</button>
</div>
   

</hr>

<img id="myimage" height="200">
    `;
}