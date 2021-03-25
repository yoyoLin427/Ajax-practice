#!/usr/bin/env node

// include `express`
// 載入 `express`
const express = require('express')

// create an express, aka web server, instance
// 建立一個 express (也就是網頁伺服器)實體
const app = express()
const port = 4270

// handle `/step1` url
// 處理 `/step1` 網址
app.get('/step1', (req, res) => {
  // response browser
  // 回應瀏覽器
  res.send('<h1>hello world</h1>')
})

// start the server
// 啟動伺服器
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})


// handle other urls
// 處理其它網址
app.use(express.static(__dirname + '/dist'))




//node.js 的檔案系統，能夠幫助存取、讀取檔案
var fs = require('fs');
app.post('/list_all_students', (req, res) => {

  /*
  $.getJSON(url,[data],[callback])
  url：載入的頁面地址
  data: 可選項，傳送到伺服器的資料，格式是key/value
  callback:可選項，載入成功後執行的回撥函式
  */ 
  fs.readFile('students.sample.json', function(err, data){
    if (err) {
      return console.error(err);
    }
    

    //將JSON格式轉回物件
    var list = JSON.parse(data);
    var str_list = '';
    for (var stu in list) {
      //console.log(stu + 'student:' + list[stu]);
      str_list = str_list + JSON.stringify(stu) + ':' + JSON.stringify(list[stu]) + '</br>'
    }
    res.send(str_list);
  });
  
})



// include `body-parser`
// 載入 `body-parser`
const bodyParser = require('body-parser')

// setup `body-parser`
// 設定 `body-parser`
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/search', (req, res) => {

  /*
  $.getJSON(url,[data],[callback])
  url：載入的頁面地址
  data: 可選項，傳送到伺服器的資料，格式是key/value
  callback:可選項，載入成功後執行的回撥函式
  */ 
  fs.readFile('students.sample.json', function(err, data){
    if (err) {
      return console.error(err);
    }
    

    //將JSON格式轉回物件
    var list = JSON.parse(data);
    var ans = 'can not find';
    for (var stu in list) {
      if(req.body.stuID == stu)
      {
        console.log('success find');
        ans = 'Hello,'+JSON.stringify(list[stu]);
      }
    }

    
    console.log('要找',req.body.stuID);
    res.send(ans);
  });
  
})

app.post('/add', (req, res) => {

  /*
  $.getJSON(url,[data],[callback])
  url：載入的頁面地址
  data: 可選項，傳送到伺服器的資料，格式是key/value
  callback:可選項，載入成功後執行的回撥函式
  */ 
  fs.readFile('students.sample.json', function(err, data){
    if (err) {
      return console.error(err);
    }
    

    //將JSON格式轉回物件
    var list = JSON.parse(data);
    console.log(list);
    	
    list[req.body.stuID] = req.body.stu_name;
    console.log(list);
    //因為寫入文件（json）只認識字符串或二進制數，所以需要將json對象轉換成字符串
    var str = JSON.stringify(list);
    //將字串符傳入您的 json 文件中
          fs.writeFile('students.sample.json', str, function (err) {
              if (err) {
                  console.error(err);
              }
              console.log('Add new user to userInfo...')
          })
    
    
    res.send('已添加,請按[list all students]確認新名單');
  });
  
})

app.post('/del', (req, res) => {

  /*
  $.getJSON(url,[data],[callback])
  url：載入的頁面地址
  data: 可選項，傳送到伺服器的資料，格式是key/value
  callback:可選項，載入成功後執行的回撥函式
  */ 
  fs.readFile('students.sample.json', function(err, data){
    if (err) {
      return console.error(err);
    }
    

    //將JSON格式轉回物件
    var list = JSON.parse(data);

    var ans = 'error:沒有這筆資料';
    for (var stu in list) {
      if(req.body.stuID == stu)
      {
        console.log('success find');
        console.log(list);
        delete list[req.body.stuID];
        console.log(list);

        //因為寫入文件（json）只認識字符串或二進制數，所以需要將json對象轉換成字符串
          var str = JSON.stringify(list);
          //將字串符傳入您的 json 文件中
                fs.writeFile('students.sample.json', str, function (err) {
                    if (err) {
                        console.error(err);
                    }
                    console.log('Add new user to userInfo...')
                })
        ans = '已刪除,請按[list all students]確認新名單';


      }
    }


    
    
    
    res.send(ans);
  });
  
})