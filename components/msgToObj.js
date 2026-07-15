import timeNotation from './timeNotation.js'
import getTimestamp from './getTimestamp.js';


// 2020-08-28 03:37PM, Yong Hwa : @@@! 알로화!!! 반가워ㅠㅠ!! 잘지냈지?? 버블로 잘 지내보자!🤙🏾
const msgToObj = (msgStr) => {
    let temp1 = msgStr.split(' : ');
    let temp2 = temp1[0].split(', ');
    let temp3 = temp2[0].split(' ');

    let date = temp3[0];
    let time = timeNotation(temp3[1]);
    let fromArtist = temp2[1] != '나';
    

    //var type, content;
    var isMedia = false, content = temp1[1];
    if (temp1[2]){
        //console.log(temp1.length);
        for (let i = 2; temp1[i]; i++){
            content += (' : '+temp1[i]);
        }
        //console.log(content);
    }

    if (content.includes('(사진)')) {
        isMedia = true;
        content = 'pic'+'_'+getTimestamp(temp2[0]);
    }
    else if (content.includes('(음성)') || content.includes('(음성 메시지)')) {
        isMedia = true;
        content = 'voice'+'_'+getTimestamp(temp2[0]);
    }
    else if (content.includes('(동영상)')) {
        isMedia = true;
        content = 'vid'+'_'+getTimestamp(temp2[0]);
    }

    return ({
        date: date,
        message: {
            time: time,
            isMedia: isMedia,
            content: content,
            fromArtist: fromArtist,
        }
    });
}

export default msgToObj;
