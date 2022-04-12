//Psuedo way to have a menu pop in and out for customization
function hideorshow() {
  var x = document.getElementById("CustomizationContent");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}
//Changes color of background and text based on user selection.
function colorChange(){
  document.body.style.backgroundColor = document.getElementById("bgcolor").value;
  document.body.style.color = document.getElementById("textcolor").value;
  hideorshow();
}



function Form(props){
  return (
    <div>
      <div><button onClick={hideorshow} >Customize</button></div>
      <div id="CustomizationContent">
        <p>Update username:</p>
        <form onSubmit={props.changeUser}>
          <input type="text" name="user" />
          <p>Background Color</p><input type="color" id="bgcolor"/>
          <p>Text Color</p><input type="color" id="textcolor"/>
          <br></br>
          <button type="submit" onClick={colorChange}>Save</button>
        </form>
      </div>
    </div>
  );
}

export default Form;

