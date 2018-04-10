          //初始化数据
         var keys = {
          	'0':{0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
          	'1':{0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
          	'2':{0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
          	'length':3
          }
          var hash = {
          	'q':'qq.com',
          	'w':'weibo.com',
          	'e':'ele.me',
          	'r':'ruanyifeng.com',
          	't':'tencent.com',
          	'y':'youtube.com',
          	'u':'yahoo.com',
          	'i':'iqiyi.com',
            'o':'opera.com',
            'p':'plus.com',
            'a':'amazon.com',
            's':'soho.com',
            'd':'dangdang.com',
            'f':'facebook.com',
            'g':'google.com',
            'h':'huawei.com',
            'j':'jd.com',
            'k':'klook.com',
            'l':'lancome.com',
          	'z':'zara.com',
          	'x':'xiedaimala.com',
          	'c':'china.com',
            'v':'v2ex.com',
            'b':'blibli.com',
            'n':'nature.com',
          	'm':'mac.com',
          }
          //取出存储在localstorage中的hash.
           var hashInlocalStorage = getFromLocalStorage('ggg');
           if(hashInlocalStorage){
           	  hash =hashInlocalStorage;
           }
             function getFromLocalStorage(name){ //封装函数
              return JSON.parse(localStorage.getItem(name) || 'null');
             }

           //2.遍历keys,生成kbd标签。
             // function tag(tagName,attr){
             //   var element = document.createElement(tagName);
             //   for (var key in attr){ //  key : className  textContent
             //    element[key] = attr[key]
             //   }
             //   return element;
             // }
             function tag(tagName) {
               return document.createElement(tagName);
             }

             for(var index = 0; index< keys['length']; index++){

              var main = document.getElementById('main');
              var div1 = tag('div');
              main.appendChild(div1);

              var row = keys[index]//数组1 2，3

              for(var index2= 0;index2<row['length'];index2++){

                var buttons = tag('button');
                buttons.textContent='E';
                buttons.id = row[index2];
                buttons.onclick = function(e){
               var btn2 = e['target'];
              //console.log(btn2);
              var img2 = btn2.previousSibling;
              //console.log(img2);
              k = btn2['id']
              message = prompt('给我一个网站地址！');
              hash[k] = message;// hash变更
              console.log(k);
              img2.src= 'http://'+ message+ '/favicon.ico';
              img2.onerror = function(e){
                 e.target.src ='//i.loli.net/2018/04/10/5acc50d3b9956.jpg';
              }
              localStorage.setItem('ggg',JSON.stringify(hash));
             }

                var img = tag('img');
                if(hash[row[index2]]){
                img.src= 'http://'+ hash[row[index2]] + '/favicon.ico';
                }else{
              img.src= '//i.loli.net/2018/04/10/5acc50d3b9956.jpg';
              }
              img.onerror = function(e){
                 e.target.src ='//i.loli.net/2018/04/10/5acc50d3b9956.jpg';
              }
                var kbds = tag('kbd');
                kbds.textContent = row[index2];
                kbds.appendChild(img);
                kbds.appendChild(buttons);

                div1.appendChild(kbds);
              }
           
            }
               ///3.监听键盘
           document.onkeypress = function(event){//参数随便取
             console.log('按键了！');
             console.log(event['key']);
           var   key = event['key'];
             //console.log(event);
            var website = hash[key];
             //location.href = 'http://'+website;
             window.open('http://'+website,'_blank');
           }