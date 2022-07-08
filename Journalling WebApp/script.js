messages.messages.forEach(function(item, i, arr){
    
    let newMessage = document.createElement("div");
    newMessage.className = item.from;
    newMessage.innerHTML = "<p>"+item.text+"</p>";

    message_section.append(newMessage);

    var clear = document.createElement("div"); 
    clear.className = "clear";
    message_section.append(clear);

    let messageDate = document.createElement("div");
    messageDate.className = item.from + "-date";
    messageDate.innerHTML = item.date;
    message_section.append(messageDate);

    var clear = document.createElement("div"); 
    clear.className = "clear";

    message_section.append(clear);
});