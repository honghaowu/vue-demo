let http=require('http');
let fs = require('fs');
let url=require('url');
//
let sliders=require('./sliders.js');
//读取
function read(cb) { //用来读取数据的
    fs.readFile('./mock/book.json','utf8',function (err,data) {
        console.log(err,data);
      if(err || data.length === 0){
        cb([]); // 如果有错误 或者文件没长度 就是空数组
      }else{
        cb(JSON.parse(data)); // 将读出来的内容转化成对象
      }
    })
  }
// 写入
function write(data,cb){
    fs.writeFile('./mock/book.json',JSON.stringify(data),cb)
};
//每页加载的个数
let pageSize=5;

http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/
    let {pathname,query}=url.parse(req.url,true);
    // true 把query转为对象
    if(pathname==='/page'){
        let offset=parseInt(query.offset)||0;
        read(function(books){
            let result=books.reverse().slice(offset,offset+pageSize);
            let hasMore=true;
            if(books.length<=offset+pageSize){
                hasMore=false;
            }
            res.setHeader('Content-Type',"application/json;charset=utf-8");
            res.end(JSON.stringify({hasMore:hasMore,books:result}));
        });
    }
    //路径是sliders为轮播图的数据
    if(pathname==='/sliders'){
        res.setHeader('Content-Type',"application/json;charset=utf-8");
        return res.end(JSON.stringify(sliders))
    }
    if(pathname==="/hot"){
        read(function(books){
            console.log('books');
            let hot=books.reverse().slice(0,6);
            res.setHeader('Content-Type','application/json;charset=utf8');
            res.end(JSON.stringify(hot));
        });
    
    }
    if(pathname==="/book"){
        let id =parseInt(query.id);
        switch(req.method){ // 
            case 'GET':
            if(!isNaN(id)){// 获取一个
                read(function(books){
                   let book= books.find(item=>item.bookId==id);
                   if(!book) book={}
                   res.setHeader('Content-Type','application/json;charset=utf8');
                   res.end(JSON.stringify(book));
                });
            }else{
                read((books)=>{
                    res.setHeader('Content-Type','application/json;charset=utf8');
                    res.end(JSON.stringify(books.reverse()));
                })
            }
                break;
            case 'POST':
                let str ="";
                req.on('data',chunk=>{
                    str+=chunk;
                });
                req.on("end",()=>{
                    let book=JSON.parse(str);
                    read(function(books){
                        book.bookId=books.length?books[books.length-1].bookId+1:1;
                        books.push(book);
                        write(books,function(){
                            res.end(JSON.stringify(book));
                        });
                    });
                })
                break;
            case 'PUT':
                if(id){
                    let str="";
                    req.on('data',chunk=>{
                        str+=chunk;
                    });
                    req.on("end",()=>{
                        let book=JSON.parse(str);
                        read(function(books){
                            books=books.map(item=>{
                                if(item.bookId===id){
                                    return book;
                                }
                                return item;
                            });
                            write(books,function(){
                                res.end(JSON.stringify(book));
                            });
                        });
                    });
                }
                break;
            case 'DELETE':
                read(function(books){
                    books=books.filter(item=>item.bookId!==id);
                    write(books,function(){
                        res.end(JSON.stringify({}));
                    });
                });
                break;
        }
    }
}).listen(3000);
