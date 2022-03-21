
function updateAdminView(){
    document.getElementById("app").innerHTML=`
   
 
    <div class="w-1/2  flex justify-between items-center px-4 pointer-events-auto">
  <h3 class="text-3xl font-roboto ">Welcome to Admin page </h3>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded ml-4 cursor-pointer"
        onclick="model.app.page='user'; updateView()"
        >
        Back to Userpage
      </button>
    </div>

 ${createTitleInput()}
 ${createDescriptionInput()}
 ${createFileInput()}


${createCategoryOptions()}

 ${createPaymentRadioBtns()}
 ${createHappeningDatePicker(()=>createDatePicker())}
 ${createTimePicker()}
 ${createAnnouncementDatePicker(()=>createDatePicker())}
 ${createTimePicker()}


    `;
}

function createTitleInput(){
    let titleInputHtml=`
    <div class="w-1/2 pointer-events-auto">
    <label for="happeningTitle" class="block mb-1 text-sm text-gray-600"
      >Happening title</label
    >
    <input
      type="text"
      name="name"
      class="w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
      placeholder="Enter Your Name"
      oninput="model.inputs.adminPage.happening.title=this.value"
      value="${model.inputs.adminPage.happening.title}"
    />
  </div>
    `;
    return titleInputHtml;
}

function createDescriptionInput(){
    let descriptionInputHtml=`
    <div class="w-1/2  pointer-events-auto">
    <label for="description" class="block mb-1 text-sm text-gray-600"
      >Description</label
    >
 
    <textarea
      type="text"
      name="name"
      class="w-full px-4 py-4 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
      rows="5"
      placeholder="Enter some long form content."
      placeholder="Description"
      oninput="model.inputs.adminPage.happening.description=this.value"
      value="model.inputs.adminPage.happening.description"
    ></textarea>
  </div>
    `;
    return descriptionInputHtml;
}

function createFileInput(){
    let fileInputHtml=`
    
    <div class="w-1/2  pointer-events-auto">
      <label for="image" class="block mb-1 text-sm text-gray-600"
        >ImageFile</label
      >
      <input
        type="file"
        id="image"
        accept=".jpg, .jpeg, .png"
        class="block w-full py-0 text-gray-900 bg-gray-50 rounded border border-gray-300 cursor-pointer light:text-gray-400 focus:outline-none focus:border-transparent light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
        placeholder="Enter Your Name"
        onchange="readFile(event)"
      />
      <!--   <div class="mt-1 text-sm text-gray-500 light:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
        burayi validation icin kullanabiliriz...
        -->

      
    </div>
    `;
    return fileInputHtml;
}

function readFile(event){
  let imageUrl=URL.createObjectURL(event.target.files[0]);

  console.log("imageUrl: ",typeof imageUrl); 
  model.inputs.adminPage.happening.imageFileObject=imageUrl;
  //imageFile a atadgiimz url i herhangi bir image in src sine atayarak onu gosterebiliriz...

}


function createCategoryOptions(){
    let categoryOptionsHtml=``;
    categoryOptionsHtml+=` 
    <div class="w-1/2  pointer-events-auto">
    <label for="category" class="block mb-1 text-sm text-gray-600"
      >Category</label
    >
    <select
      id="category"
      class="w-full border bg-white rounded px-3 py-2 outline-none"
      onchange="model.inputs.adminPage.happening.categoryId=this.value"
    >
`;
    let {categories}=model.data;
   for(let i=0; i<categories.length; i++){
       let category=categories[i];
      
       categoryOptionsHtml+=`
       <option class="py-1" value="${category.id}" >${category.title}</option>
       
       `;    }
        categoryOptionsHtml+=`</select>
        </div>`;
       

    return categoryOptionsHtml;
}

function createPaymentRadioBtns(){
    let paymentRadioBtnsHtml=``;
     paymentRadioBtnsHtml+=`
    
    <div class="w-1/2 pointer-events-auto">
    <label for="paymentCategory" class="block mb-1 text-sm text-gray-600"
      >Payment category</label>  <div class="flex">
    `;
let {paymentTypes}=model.data;
    for(let i=0; i<paymentTypes.length; i++){
        let paymentType=paymentTypes[i];
paymentRadioBtnsHtml+=`
<div class="form-check flex items-center mb-2 mr-4">
        <input
 ${getChecked(paymentType.isChecked)}
      type="radio" value="${paymentType.id}"
         onclick="toggleCheckedPaymentType(this,${paymentType.id})"   
        
          id="radio-example-1"
          name="radio"
          class="form-check-input h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2"
        />
        <label for="${paymentType.title}" class="text-gray-600 text-sm"
          >${paymentType.title}</label>
      </div>   `}
      //once tiklanan elemani bul, sonra .checked diyerek checked durumunu senin bu dinamik data icin tuttugun variable ina ata...ama once hangisine tiklandigin bulman icin id uzeirnden git
      paymentRadioBtnsHtml+=`
      </div>
  </div>
      `;
    return paymentRadioBtnsHtml;
}

//radiobutton ile checkbox i karistirma checkbox default olarak toggle var ama radio buttonda yok,, radio button tek secimler icindir
 // console.log("this.checked: ",checkedElement.checked);
//console.log("checkedId; ",checkedId);
//bir dizi den id si verilen objeyi bulma fonksiyon yazacagiz....
//find ile de olur map ile de olur 
function toggleCheckedPaymentType(checkedElement,checkedId){
model.inputs.adminPage.happening.paymetnType=checkedId;
//Normalde ortak data da bulunan paymentTypes i burda mi yapacagiz yoksa onu inputs altndaki paymentType uzerinden mi yapacagiz o kisma bakacagiz ama simdilik bu sekilde dursun...
model.data.paymentTypes=model.data.paymentTypes.map((payment,index)=> parseInt(payment.id)===checkedId ? {id:payment.id, title:payment.title, isChecked:!(payment.isChecked) } : payment);
updateView();
}

function getChecked(ischecked){

    return ischecked ? "checked" : "";
   
}

function createHappeningDatePicker(datePicker){
    let happeningDatePickerHtml=`
    <div class="w-1/2">
    <label for="description" class="block mb-1 text-sm text-gray-600"
      >Select happening date</label
    >
    ${datePicker()}
    `;
    return happeningDatePickerHtml;
}


function datePickerInput(name){
    return `
    <input
    name="${name}"
    type="text"
    type="datetime-local"
    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500 datepicker-input  pointer-events-auto"
    placeholder="Select date ${name}"
   
    onchange="myFunc(event)"
  />
    
    `;
}
// value="${new Date().toLocaleDateString("nb-no")}"
function myFunc(event){
    console.log("event: ",event);
}

function createDatePicker(){
    let datePicker=``;
    let dateSvg=``;
     datePicker+=`
<div date-rangepicker="" class="flex items-center">
      <div class="relative">`;
      
     dateSvg=`   <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
     <svg
       class="w-5 h-5 text-gray-500 light:text-gray-400"
       fill="currentColor"
       viewBox="0 0 20 20"
       xmlns="http://www.w3.org/2000/svg">
       <path
         fill-rule="evenodd"
         d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
         clip-rule="evenodd"
       ></path>
     </svg>
   </div>`;

//Burda cok guzel bir ornek yaptik, sadece 1 kelime farkliligi olan 5 satir kodu fonkksiyon haline getirdik farkli olan yeri de parametreden alarak dinamik yaptik.....datePickerInput(name)
datePicker+=dateSvg+`
    ${datePickerInput("start")}
      </div>
      <span class="mx-4 text-gray-500">to</span>
      <div class="relative">
      `+ dateSvg + `
      ${datePickerInput("end")}
  </div>
</div>
</div>`;  
    return datePicker;
}


function removeSpacesAndDoLowerFirstLetter(text){
    let getTextWithoutSpaces=text.replace(/ /g, "");
   let getLowerFirstLetter=text[0].toLowerCase();
   text=getTextWithoutSpaces.replace(text[0], getLowerFirstLetter);
    return text;
}


function createTimeLabel(timeText,widthSize){
return `
<label for="${removeSpacesAndDoLowerFirstLetter(timeText)}" class="block w-${widthSize} text-sm text-gray-600"
>${timeText}</label
>
`;
}

function createTimeMinutes(name){
    return `
    <select
    name="${name}"
    class="bg-transparent text-xl appearance-none outline-none mr-4 text-gray-600"
    >
    <option value="0">00</option>
    <option value="30">30</option>
    </select>
    `;
    }
    
    function createTimePeriodAMPM(name){
        let am=name.slice(0,2);
       let pm= name.slice(2,4)
        return `
        <select
        name="${name}"
        class="bg-transparent text-xl appearance-none outline-none text-gray-600">
        <option value="${am}">${am.toUpperCase()}</option>
        <option value="${pm}">${pm.toUpperCase()}</option>
      </select>
        `;
    }
//label lar in sadece 2 tane farkliliklari var onlari parametreden alip bir fonksiyon yapip kod tekrarinini onune gecebiliriiz....
function createTimePicker(){
    let happeningTimePicker=``;
     happeningTimePicker+=`
    
    <div class="w-1/2 flex flex-col">
    <div class="w-1/1 flex space-x-5 justify-start">
     ${createTimeLabel("Start time",40)}
      ${createTimeLabel("End time",64)}
    </div>
    <div class="container mx-auto mt-1 mb-5 space-x-5 flex">
      <div class="mt-2 p-5 w-40 bg-white rounded-lg shadow-xl">
        <div class="flex items-center justify-center">
          <select
            name="hours"
            class="bg-transparent text-xl appearance-none outline-none block text-gray-600"   >     `;

          getTimePickerOptions();      
            happeningTimePicker+=`    </select>
          <span class="text-xl mr-3 text-gray-600">:</span>
         ${createTimeMinutes("minutes")}

          ${createTimePeriodAMPM("ampm")}
        </div>
      </div>

      <div class="mt-2 p-5 w-40 bg-white rounded-lg shadow-xl">
        <div class="flex">
          <select
            name="hours"
            class="bg-transparent text-xl appearance-none outline-none text-gray-600">     `;

        getTimePickerOptions();
       function getTimePickerOptions(){
        for(let i=1; i<13; i++){
            happeningTimePicker+=`
            <option value="${i}">${i}</option>`;
        }
      return happeningTimePicker;
       }
         
            happeningTimePicker+=`
            </select>
            <span class="text-xl mr-3 text-gray-600">:</span>
            ${createTimeMinutes("minutes")}
            ${createTimePeriodAMPM("ampm")}
          </div>
        </div>
      </div>
    </div>
            `;
    return happeningTimePicker;
}


//datePicker parametresi aslinda normal createDatePicker fonksiyonudur...
function createAnnouncementDatePicker(datePicker){
    let announcementDatePickerHtml=`
    
    <!--Announcement date -->


    <div class="w-1/2">

        <label for="announcementDate" class="block mb-1 text-sm text-gray-600"
          >Announcement date</label>
        ${datePicker()}
  
    `;
    return announcementDatePickerHtml;
}






