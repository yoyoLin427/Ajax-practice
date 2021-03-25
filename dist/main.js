$(document).ready(function() {

    //按下id=btn_listALL之後
    $('#btn_listALL').click((event) => {
        event.preventDefault()//不做原本buttom要做的事情
        console.log("press btn_listALL");

        /* 
        $(selector).post(URL,data,function(data,status,xhr),dataType)
        使用 HTTP POST 请求从服务器加载数据。
        所以ser.js會看有誰要post /list_all_students 在那邊做反應 
        ser.js send data過來
        */
        $.post("./list_all_students", (data) => {
            document.getElementById("listALL-output").innerHTML = data;
        })

    })
  });