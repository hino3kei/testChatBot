function onMessage(event){
  var said = event.massage.text; 
  var msg;
  if(said === "test"){
    msg = "test OK";
  }else if(said === "hello"){
    msg = "Hello!";
  }else{
    msg = "‚í‚©‚è‚Ü‚¹‚ñB";
  }
  return {text: msg};
}