window.onload = function () {
  var Length,
    Width,
    r,
    Area,
    shapeType,
    LengthS2,
    flag = true;
  while (flag) {
    shapeType = prompt(
      "please enter the Shape you need to Calculate its Area!(circle,triangle,square,rectangle,parallelogram,trapezium,ellipse,exit)"
    );
    switch (shapeType) {
      case "circle":
        r = prompt("please enter the radius");
        Area = 3.14 * r * r;
        alert("The Area is" + Area);
        break;
      case "triangle":
        Length = prompt("please enter the Base");
        Width = prompt("please enter the Hight");
        Area = 0.5 * Length * Width;
        alert("The Area is" + Area);
        break;
      case "square":
        Length = prompt("please enter the Lenght");
        Area = Length * Length;
        alert("The Area is" + Area);
        break;
      case "rectangle":
        Length = prompt("please enter the Length");
        Width = prompt("please enter the Width");
        Area = Length * Width;
        alert("The Area is" + Area);
        break;
      case "parallelogram":
        Length = prompt("please enter the Base");
        Width = prompt("please enter the Hight");
        Area = Length * Width;
        alert("The Area is" + Area);
        break;
      case "trapezium":
        Length = prompt("please enter the Length of side 1");
        LengthS2 = prompt("please enter the Length of side 2");
        Width = prompt("please enter the Hight");
        Area = 0.5 * (Length * Width) * Width;
        alert("The Area is" + Area);
        break;
      case "ellipse":
        Length = prompt("please enter the Minor Access");
        Width = prompt("please enter the Major Access");
        Area = 3.14 * (Length * Width);
        alert("The Area is" + Area);
        break;
      case "exit":
        flag = false;
    }
  }
};
