const johnTeam = [89,103,120];

const mikeTeam = [94,116,123];

let johnAvg = (89 + 103 + 120) / 3

let mikeAvg = (116 + 94 + 123) / 3 

switch(mikeAvg >= johnAvg) {
    case ( johnAvg >= mikeAvg) :
        console.log(`John has a higher average score of ${johnAvg}`);
        break;
    case (mikeAvg >= johnAvg) :
        console.log(`Mike has a higher average score of ${mikeAvg}`);
        break;
        case (mikeAvg == johnAvg) :
        console.log('Mike and John have the same average score');
        break;
    default:
        console.log('Sorry cannot figure it out') ;
        break;
}

// my quiz using switche 

