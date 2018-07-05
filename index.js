var permlinenum = 0
function takeANumber(KatzDeliLine){
  permlinenum++;
  KatzDeliLine.push(permlinenum);
  return `You are number ${permlinenum} in line.`
}

function nowServing(DeliLine){
  if (DeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${DeliLine.shift()}.`
  }
}

function currentLine(DeliLine){
  if (DeliLine.length === 0){
    return "The line is currently empty."
  } else {
    var linenumber = ''
    for (let i = 0; i < DeliLine.length -1; i++){
    linenumber =`${linenumber} ${i + 1}. ${DeliLine[i]},`
    }
    linenumber = `${linenumber} ${DeliLine.length}. ${DeliLine[DeliLine.length - 1]}`
    return `The line is currently: ${linenumber}`
  }
}

let line = []

console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(nowServing(line))
console.log(takeANumber(line))
