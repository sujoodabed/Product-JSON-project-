//هاي المحاضرة نفس محاضرة 7 لكن اضافات على الكود 

  /* type of storage in browser : ثلاث انواع لتخزين الداتا في المتصفح
  1-session: بمجرد ما اسكر التاب بتنحذف الداتا 
  2-local:  بضل تحتفظ بالداتا لحد ما امسحها انا لهاد السبب منتعامل معها هون  
  3-cokeis:  بتنمسح الداتا بعد وقت معين ساعة ساعتين
  */

 

 var addBtn= document.getElementById('addBtn');

 //var test =JSON.parse(localStorage.getItem('productList'));
//JSON.parse => حتى تحول  الاري من سترينج لنوعها الاصلي وهو الاوبجكت

 var productName          = document.getElementById('productName');
 var productCombany       = document.getElementById('productCombany');
 var productPrice         = document.getElementById('productPrice');
 var productDescreption   = document.getElementById('productDescreption');
 
 var input     = document.getElementsByClassName('form-control');
 
 var products ;

 // كود الشرط هو لانه بس نعمل ريلود للصفحة بروح كل يلي بالجدول حتى ما يروح وينعرض عندي ازا في عناصر عملنا هاد الكود
 if(localStorage.getItem('productList')==null){ // بفحص اللوكال ستوريج ازا فاضية او لاء 
    products=[]; // ازا فاضية بخلي المتغير بروداكت مصفوفة
 }
 else{    // ازا مش فاضية بوخد كل العناصر الموجودة في اللوكال ستوريج وبحطها بالمصفوفة وبعرضها
    products=JSON.parse(localStorage.getItem('productList')); 
    displayProduct(); 

 }
 
 addBtn.onclick=function(){
    
     addProduct();
     displayProduct(); 
     resetForm();
 
 }
 
 function addProduct(){
     var product ={
         productName:productName.value,
         productCombany:productCombany.value,
         productPrice:productPrice.value,
         productDescreption:productDescreption.value
     
        };
        products.push(product);
        localStorage.setItem('productList',JSON.stringify(products));
        // JSON.stringify => اللوكال ستوريج ما بتفهم الا سترينج عشان تتحول البرودكتس الى سترينج
        //localStorage.setItem('variable','value')
        // setItem : حتى اكتب في اللوكال ستوريج
        // getItem : حتى اوخد داتا من اللوكال ستوريج
 }
 
 
 function displayProduct(){
     
    var trs='';
    for(var i=0;i<products.length;i++){
 
   //back tech   => حتى اكتب هاد النص بطريقة افهم للقراءة وفهم الكود  باستخدام : `

      trs+=`<tr>
            <td>` +products[i].productName+ `</td>
            <td>` +products[i].productCombany+ `</td> 
            <td>` +products[i].productPrice+ `</td> 
            <td>` +products[i].productDescreption+ `</td>
            <td> <button class='btn btn-danger ' onclick='deletProduct(`+i+`)'> delet</button> </td> 
            </tr>`;
    }
    document.getElementById('tableBody').innerHTML=trs;
 
 
 }
 
 
 
 function resetForm(){ // حتى بعد ما اخلص تعبئة البيانات يرجع الجدول فاضي 
     for(var i=0;i<input.length;i++){
         input[i].value="";
     }
 
 }
 
 
 
 
 function deletProduct(index){
     products.splice(index,1)
     localStorage.setItem('productList',JSON.stringify(products)) // حتى يتم الحذف من اللوكال ستوريج كمان 
     displayProduct(); // حتى يرجع يعرض الجدول كمان مرة بعد الحذف 
 }



//CURD operation: في الشركات بطونا نعمل تاسك يكون في المهام التالية
/*
  add نضيف عناصر 
  retreive نعرض العناصر
  delate نحذف الغناصر
  search نبحث عن عنصر
  update تحديث اشي معين
  validation التحقق



*/


//type of event : تخص البحث
/*
onkeydown :اول ما اكتب حرف بنفذ الايفنت
onkeyup : بعد ما اخلص كتابة اول ما ارفع ايدي عن الكيبورد بنفذ الايفنت


*/



function search(searchTxt){
    
    var trs='';
    for(var i=0;i<products.length;i++){
        if (products[i].productName.toLowerCase() .includes(searchTxt.toLowerCase()))
 
   //startWith : ممكن نستخدمها عشان يكون البحث حسب اول حرف بدخله
   //toLowerCase : منستخدمها عشان ازا اليوزر بحث بحرف كابيتل او سمول تكون فس النتيجة 
      trs+=`<tr>
            <td>` +products[i].productName+ `</td>
            <td>` +products[i].productCombany+ `</td> 
            <td>` +products[i].productPrice+ `</td> 
            <td>` +products[i].productDescreption+ `</td>
            <td> <button class='btn btn-danger ' onclick='deletProduct(`+i+`)'> delet</button> </td> 
            </tr>`;
    }
    document.getElementById('tableBody').innerHTML=trs;
 
     
}



 
 
 