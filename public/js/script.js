

var sendBtn= document.getElementById('sendBtn') ;
var textbox= document.getElementById('textbox');
var chatContainer= document.getElementById('chatContainer');

var user= {};

var arrayOfPossibleMessage = [
    {message:"hi ", response:"hello"},
    {message:"hôm nay bạn thế nào",response :"Tôi ổn, còn bạn thì thế nào."},
    {message:"tên của bạn là gì", response: "Tên tôi là BOT."},
    {message: "ai đã làm ra bạn", response: "Trần Tấn Phát_2274802010644_CNTT04, Bùi Nguyên Tín_2274802010894_CNTT04"},
    {message: "giáo viên bộ môn phần mềm",response: "Thầy Tống Hùng Anh và cô Trần Thị Mỹ Vân"},
    {message: "bạn biết gì về thế giới",response: "tôi chưa được tiếp thu về thế giới bên ngoài"},
    {message: "bạn nhảy được không", response: "nếu bạn muốn thì tôi sẽ học nhảy"},
    {message: "bạn sống ở đâu", response: "ở trên trang web"},
    {message: "bạn có gia đình không", response: "không"}
]




function sendMessage(userMessage){

    var messageElement= document.createElement('div');
    messageElement.style.textAlign= "right";
    messageElement.style.margin= "10px";


    messageElement.innerHTML="<span> You: </span>"+
                            "<span>" +userMessage+ "</span>";

    chatContainer.appendChild(messageElement);

}



function chatbotResponse(userMessage){


    var chatbotmessage ="";

    if(userMessage == "chào"){
        chatbotmessage ="xin chào người dùng";
    }else if (userMessage== "ai đã làm ra bạn"){
        chatbotmessage="Trần Tấn Phát_2274802010644_CNTT04, Bùi Nguyên Tín_2274802010894_CNTT04"
    

    
    }else if (userMessage.length > 5 || userMessage =="chào"){
       var result = arrayOfPossibleMessage.filter(val => val.message.includes(userMessage.toLowerCase()))

       if (result.length >0){
            var response = result[0].response;
            chatbotmessage = response ;

       }else {
            chatbotmessage= "hãy gửi tin nhắn khác ";
       }
    }else{
        chatbotmessage = "hãy gửi tin nhắn có thông tin khác nhau";
    }


    var messageElement = document.createElement('div');
    messageElement.innerHTML="<span> BOT: </span>"+
                            "<span>" +chatbotmessage+ "</span>"


    setTimeout(()=> {

        messageElement.animate([{  easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000})
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop= chatContainer.scrollHeight;
    
    
    },1000);

    

    
}


sendBtn.addEventListener('click',function(e){

    var userMessage = textbox.value;

    if (userMessage == ""){
        alert('Hãy điền thông tin vào bảng');
    

    }else
    {
        let userMessageText =    userMessage.trim();
        user.message = userMessageText;
        textbox.value="";
        sendMessage(userMessageText);
        chatbotResponse(userMessageText);
    }

})

