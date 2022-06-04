window.onload = function () {
  var op,
    flag = true,
    name,
    phoneNo,
    i,
    counter = 1;
  var __FOUND = -1;
  var contactArray = [];
  var len = 10;

  while (flag) {
    op = prompt("please enter the operation you need!(add,search,exit)");
    switch (op) {
      case "add":
        if (counter < len) {
          name = prompt("please enter the name");
          phoneNo = Number(prompt("please enter the phone Number"));
          contactArray.push({
            name: name,
            phoneNo: phoneNo,
          });
          counter++;
        } else {
          alert("out of bound");
        }
        break;
      case "search":
        name = prompt("please enter the name");
        for (i = 0; i < contactArray.length; i++) {
          if (contactArray[i].name == name) {
            // __FOUND is set to the index of the element
            __FOUND = i;
            if (__FOUND >= 0)
             alert("yes found on index " + __FOUND +"with name: "+contactArray[i].name +" with phone number: "+contactArray[i].phoneNo);
            
            else {
              alert("no it is not found");
            }
          }
        }
        break;
      case "exit":
        flag = false;
        break;
    }
  }
};
