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


    $('#search-form button[type="submit"]').click((event) => {
        event.preventDefault()//不做原本buttom要做的事情
        console.log("press btn_search");

        $.post('./search', {
          stuID: $('#search-form [name=stuID]').val()
        }, (data) => { //data是ser.js send過來ㄉ
          $('#search-output').html(data) //對id:ajax-output這個div 傳送html的東西 ()裡面放要傳送的東西
        })
        //get裡面傳了三個參數!!後面兩個是函式,最後一個在get結束後才會執行
    
    
        // Step 11 code goes here
    })

    $('#add-form button[type="submit"]').click((event) => {
        event.preventDefault()//不做原本buttom要做的事情
        console.log("press btn_add");

        $.post('./add', {
          stuID: $('#add-form [name=stuID]').val(),
          stu_name: $('#add-form [name=stu_name]').val()
        }, (data) => { //data是ser.js send過來ㄉ
          $('#add-output').html(data) //對id:ajax-output這個div 傳送html的東西 ()裡面放要傳送的東西
        })
        //get裡面傳了三個參數!!後面兩個是函式,最後一個在get結束後才會執行
    
    
        // Step 11 code goes here
    })

    $('#del-form button[type="submit"]').click((event) => {
        event.preventDefault()//不做原本buttom要做的事情
        console.log("press btn_del");

        $.post('./del', {
          stuID: $('#del-form [name=stuID]').val()
        }, (data) => { //data是ser.js send過來ㄉ
          $('#del-output').html(data) //對id:ajax-output這個div 傳送html的東西 ()裡面放要傳送的東西
        })
        //get裡面傳了三個參數!!後面兩個是函式,最後一個在get結束後才會執行
    
    
        // Step 11 code goes here
    })
    
  });