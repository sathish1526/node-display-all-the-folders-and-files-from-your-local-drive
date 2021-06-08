const express = require('express');
const fs = require('fs');

let app = express();

var finalHtml="<div><h1 style='text-align:center;'>Display files from the local system</h1>";
app.get('/',(req,res)=>{
   fs.readdir('D:\\task\\node\\temp','utf-8',(err,file)=>{
       if(err) throw err;
       let imgPath;
    
       file.map(item =>{
           if (item.match(".txt")) {
               imgPath = "https://img.icons8.com/ios/452/text.png";
           }
           else if(item.match('.json')){
                imgPath="https://cdn.iconscout.com/icon/premium/png-256-thumb/json-file-4-553635.png";
           }
           else if (item.match(".jpeg") || item.match( ".jpg") || item.match(".png")) {
                imgPath = "https://www.pikpng.com/pngl/b/74-745720_download-img-icon-png-clipart.png";
            }
            else if (item.match( ".pdf")) {
                 imgPath = "https://e7.pngegg.com/pngimages/510/904/png-clipart-pdf-adobe-acrobat-computer-icons-pdf-icon-text-rectangle.png";
            }
            else if (item.match(".xlsx")) {
                 imgPath = "https://image.flaticon.com/icons/png/512/28/28841.png";
            }
            else if (item.match(".mp3")) {
                 imgPath = "https://findicons.com/files/icons/1580/devine_icons_part_2/512/mp3.png";
            }
            else if (item.match(".mp4") || item.match( ".wmv")) {
                 imgPath = "https://image.flaticon.com/icons/png/512/29/29083.png";
            }
            else if (item.match(".docx")) {
                imgPath = "https://cdn2.iconfinder.com/data/icons/text-file-essential/48/v-18-512.png";
            }
            else if (item.match(".html")) {
                imgPath = "https://image.flaticon.com/icons/png/512/152/152843.png";
            }
            else if (item.match(".css")) {
                imgPath = "https://cdn.iconscout.com/icon/free/png-512/css-116-555915.png";
            }
            else if (item.match( ".js")) {
                imgPath = "https://cdn.iconscout.com/icon/free/png-512/javascript-20-555998.png";
            }
            else {
                imgPath = 'https://www.vippng.com/png/detail/207-2078677_png-file-svg-white-folder-icon-png.png';
            }
           
            finalHtml += (`<div style="height: 71px; width:300px; display:inline-block;padding: 0.5rem;text-align:left;">
                                <div style="border: 1px solid #dadce0;box-sizing: border-box;padding: 13px 16px;position: relative; width: 100%;font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">
                                <div style="line-height: 20px;margin-left: 14px;padding-bottom: 4px; cursor: default;font-size: 13px;font-weight: 500;overflow: hidden; position: relative;white-space: nowrap;">
                                <img style="height:20px;" src="${imgPath}"/>
                                <span style="margin-left: 10px;display: inline-block;position: relative;top: -4px;">${item}</span>
                                </div>
                                </div>
                                </div> `);
       })
       
        
      
    });

    finalHtml += "</div>";

       
      res.send(finalHtml)

})
   


app.listen(3003);