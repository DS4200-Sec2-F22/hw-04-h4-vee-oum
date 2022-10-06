//add new point to svg frame
function Addpoint(){
    //get information from dropdown
    let xvals = document.getElementById("x_values");
    let yvals = document.getElementById("y_values");
    //turn to text
    let xvalsText = xvals.options[xvals.selectedIndex].text;
    let yvalsText = yvals.options[yvals.selectedIndex].text;

    let newPoint = "<circle cx="+ xvalsText*40 + "cy="+ 400-40*yvalsText + "r=10" ;
    console.log('point printed') //not showing point on frame -- point might be showing up behind frame ??
    document.getElementById("frame").innerHTML += newPoint;

    addFunctionality();

}
//shows text when point clicked
function clickedPoint(point){
    let ClickedPoint= document.getElementById(point.target.id);
    let PointCoordinate = document.getElementById("clicked_coordinates");

    if (ClickedPoint.classList.contains("selected")) {
		ClickedPoint.classList.remove("selected");
	}
	else {
		ClickedPoint.classList.add("selected");
	}
	PointCoordinate.innerHTML = "Last point clicked:" + point.target.id;
}
//itterate through all circles to add functionality to points
function addFunctionality() {
    let allPoints = document.getElementsByTagName("circle");

    for (const element of allPoints) {
    element.addEventListener('click', clickedPoint)
}
}
//add functionality
addFunctionality();

