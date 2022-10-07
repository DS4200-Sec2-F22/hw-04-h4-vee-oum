//add new point to svg frame
function Addpoint(){
    //get information from dropdown
    let xvals = document.getElementById("x_values");
    let yvals = document.getElementById("y_values");
    //turn to text
    let xvalsText = xvals.options[xvals.selectedIndex].text;
    let yvalsText = yvals.options[yvals.selectedIndex].text;
    let x_coord = xvalsText * 50;
    let y_coord = 500 - (yvalsText * 50);
    let circ_id = `id="(${xvalsText}, ${yvalsText})"`
    let newPoint = `<circle ${circ_id} cx="${x_coord}" cy="${y_coord}" r="10"/>`;
    document.getElementById("frame").innerHTML += newPoint;
    // adds the functionality to all the points 
    addFunctionality();

}
//shows text when point clicked
function clickedPoint(point){
    let ClickedPoint= document.getElementById(point.target.id);
    let PointCoordinate = document.getElementById("clicked_coordinates");
    // if point already selected, remove, else select it
    if (ClickedPoint.classList.contains("selected")) {
		ClickedPoint.classList.remove("selected");
        PointCoordinate.innerHTML = " ";
	}
	else {
		ClickedPoint.classList.add("selected");
        PointCoordinate.innerHTML = "Last point clicked:" + point.target.id;
	}
}
//itterate through all circles to add functionality to points
function addFunctionality() {
    let allPoints = document.getElementsByTagName("circle");

    for (const element of allPoints) {
    element.addEventListener('click', clickedPoint)
    }
}
addFunctionality();
