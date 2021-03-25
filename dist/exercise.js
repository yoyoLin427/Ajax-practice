$(document).ready(function() {
  $('#ajax-form button[type="submit"]').click((event) => {
    event.preventDefault()//不做原本buttom要做的事情
    /* Step 9:
    * edit the `$.get()` in the last code snippet with this code snippet
    * edit [element selector]s to appropriate values
    * the second argument of `$.get()` specifies the data sent to server
    * notice the link from html `fname` to server `fname`
    * `fname` in `./dist/exercise.html` vs. `fname` in `./ser.js`
    * packing data explicitly is troublesome, but it brings flexibility
    * open `[host]:[port]/exercise.html` in a browser and open the network tab of the developer console
    * click the ajax submit button and see the request
    * 修改上一個程式碼片段的 `$.get()` ，加上下面的程式碼的內容
    * 修改 `element selector` 成適合的值
    * `$.get()` 的第二個參數，用來將資料送給伺服器
    * 特別注意 html 中的 `fname` 和伺服器端的 `fname` 兩者之間的連結
    * `./dist/exercise.html` 中的 `fname` vs. `./ser.js` 中的 `fname`
    * 自己打包資料確實很麻煩，但是也帶來更大的彈性
    * 在瀏覽器中打開 `[host]:[port]/exercise.html`，開啟瀏覽器的開發者工具並切到 network 的分頁
    * 點擊 ajax 的提交按鈕，並且觀察 request
    */
    //按按鈕之後會get 然後後面的東西(fname,lname)會放在qurey之後送給伺服器 
    //ser.js ser.js的step5會去看有誰要get他 然後send
    $.get('./step5', {
      fname: $('#ajax-form [name=fname]').val(),
      lname: $('#ajax-form [name=lname]').val(),
    }, (data) => { //data是ser.js send過來ㄉ
      $('#ajax-output').html(data) //對id:ajax-output這個div 傳送html的東西 ()裡面放要傳送的東西
    })
    //get裡面傳了三個參數!!後面兩個是函式,最後一個在get結束後才會執行


    // Step 11 code goes here
  })
});
