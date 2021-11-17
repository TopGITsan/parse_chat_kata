export const kata1 = "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
export const kata2 = `14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.`;
export const kata3 = "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n14:27:00 Customer : Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.\n14:27:47 Agent : Vestibulum tempor diam eu leo molestie eleifend.\n14:28:28 Customer : Contrary to popular belief, Lorem Ipsum is not simply random text."
export const kata4 = "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.";
export const kata44 = "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:27:00 Customer : Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.14:27:47 Agent : Vestibulum tempor diam eu leo molestie eleifend.14:28:28 Customer : Contrary to popular belief, Lorem Ipsum is not simply random text.";
export const kata5 = "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : I received it at 12:24:48, ut blandit lectus.";
export const kata6 = "14:24:32 Luca Galasso : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Emanuele Querzola : I received the package, ut blandit lectus."

const hourRegex =  new RegExp('([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]');

const extractDate = function(s) {
  const arr = s.split(' ');
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(hourRegex.test(element))
      return element;
  }
}

function extractArrayOfStrings(text){
  let chatStart, chatEnd, remainingText;
  const hourLength =8;
  remainingText = text;
  let arr = [];
    
  while(remainingText.length > 0 && chatStart !== -1){
      let s='';
      chatStart = remainingText.search(/(?=(\d{2}:\d{2}:\d{2}))/);
      
      s = s+remainingText.substr(chatStart,hourLength);
      remainingText = remainingText.substring(chatStart+hourLength);
      
      chatEnd = remainingText.search(/(?=(\d{2}:\d{2}:\d{2}))/);
      
      if(chatEnd !== -1) {
        s =s+ remainingText.substring(chatStart, chatEnd);
      } else {
        s =s+ remainingText.substring(chatStart);
      }
      
      remainingText = remainingText.substring(chatEnd);
      chatStart = remainingText.search(/(?=(\d{2}:\d{2}:\d{2}))/);
      arr.push(s.trim());
  }
  
  return arr;
}

const getStringWithoutHour = (s, length) =>{
  return s.substr(length).trim();
}
const getFullname = (sWithoutHour)=>{
  return sWithoutHour.split(':')[0].trim();
}
const getSentance = (sWithoutHour)=>{
  return sWithoutHour.split(':')[1].trimStart();
}
// console.log(" Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n".replace(/^s+/,""));
function extractDataFromChat(s,n,res){
  const h = extractDate(s);
  const stringWithoutHour = getStringWithoutHour(s,h.length);
  const fullName = getFullname(stringWithoutHour);
  const sentance = getSentance(stringWithoutHour);
  
  return {
    "date": h,
    "mention": `${h} ${fullName} : `,
    "sentence": sentance,
    "type":  n === 0 ? 'customer' : res[0]['fullName'] === fullName ? 'customer' : 'agent',
    "fullName": fullName,
  }
}

function extractData(arrOfChats){
  const res = []
  for (let i = 0; i < arrOfChats.length; i++) {
    const e = arrOfChats[i];
    let data = extractDataFromChat(e,i,res);
    res.push(data);
  }
  return res;
} 

const parseResult = (res)=>{
  return res.map(e=> ({date: e.date, mention: e.mention, sentence:e.sentence, type: e.type}));
}

export function solution(kata) {
  const dataArrOfChats =  extractArrayOfStrings(kata);
  const resultWithFullName = extractData(dataArrOfChats);
  return parseResult(resultWithFullName);
}

// console.log("solution: ", solution(kata6));

