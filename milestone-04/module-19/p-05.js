/**
 * You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger. If you notice a yellow colured traffic signal, you should stop. If you notice a a green coloured traffic signal, you should corss the road. So write a js code, where therer is a variable called signal. Its value can be green, yellow or red & we will get different activites as output depending on the variable. So Hurry up.
 */

let signal = "purple";
switch(signal){
    case "red":
        console.log("If you try to cross the road, you may be in danger.");
        break;
    case 'yellow':
        console.log("You Should stop and waiting for green coloured signal.");
        break;
    case "green":
        console.log("You Should cross the road as soon as posibile. ");
        break;
    default:
        console.log("If traffic signal is off you should cross road by the your own risk.");
}