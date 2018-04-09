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
          	'r':'renren.com',
          	't':'tianya.com',
          	'y':'yahoo.com',
          	'u':'uc.com',
          	'i':'iqiyi.com',
          	'o':undefined,
          	's':'soho.com',
          	'z':'zhihu.com',
          	'm':'meizui.com'
          }
           var hashInlocalStorage = JSON.parse(localStorage.getItem('ggg') || 'null');
           if(hashInlocalStorage){
           	  hash =hashInlocalStorage;//取出存储在localstorage中的hash.
           }
          index=0;
          var main = document.getElementById('main');
          while(index<keys['length']){//index取值 0 1 2
          	div1 = document.createElement('div');
            main.appendChild(div1);
            row = keys[index]//数组1 2，3
            //console.log(row)
            index2 = 0;
            while(index2< row['length']){
             kbds = document.createElement('kbd');
             kbds.textContent = row[index2];
             buttons = document.createElement('button');
             buttons.textContent='E';
             buttons.id= row[index2];
             buttons.onclick = function(e){
             	//console.log(e.target.id);
             	k = e['target']['id']
             	console.log(k);
             	message = prompt('给我一个网站地址！');
             	hash[k] = message;// hash变更
             	localStorage.setItem('ggg',JSON.stringify(hash));
             }
             div1.appendChild(kbds);
             kbds.appendChild(buttons);
             index2 = index2+1;
            }
           
            index = index+1;
          }

           document.onkeypress = function(event){//参数随便取
             console.log('按键了！');
             console.log(event['key']);
             key = event['key'];
             //console.log(event);
             website = hash[key];
             //location.href = 'http://'+website;
             window.open('http://'+website,'_blank');
           }