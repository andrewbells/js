var user = prompt('You live w. K. You want to escape. Options: WAIT, RUN, FIGHT').toUpperCase();

switch (user) {
    case "WAIT":
        var stable = prompt("Is your psychological health alright -- YES/NO").toUpperCase();
        var tough = prompt("Are you able to withstand all this for longer? -- YES/NO").toUpperCase();
        if (stable === 'YES' || tough === 'YES' || (stable === 'YES' && tough === 'YES')) {
            console.log("You have enough power to wait for a better moment to strike. Good luck, but dont go mad!");
        } else {
           console.log('You will wait here forever!');
        }
        break;
    case "RUN":
        var fast = prompt("Are you fast? -- YES/NO").toUpperCase();
        var smart = prompt("Are you smart? -- YES/NO").toUpperCase();
        if (fast === 'YES' || smart === 'YES' || (fast === 'YES' && smart === 'YES')) {
            console.log('Run, Forrest, RUN! Green valleys of Valinor are waiting for you!');
        } else {
            console.log('You are not fast or smart enough to escape. Prepare to bear the punishment for your dare!');
        }
        break;
    case "FIGHT":
        var strong = prompt("Are you strong? -- YES/NO").toUpperCase();
        var mean = prompt("Are you mean? -- YES/NO").toUpperCase();
        if (strong === 'YES' || mean === 'YES' || (strong === 'YES' && mean === 'YES')) {
            console.log("She is beaten (morally) and lets you leave. Ypu better use this chance!");
        } else {
            console.log('You are to weak! Suffer!!!');
        }
        break;
    default:
        console.log('your commands do not make sense, try once more or put up');
        
}