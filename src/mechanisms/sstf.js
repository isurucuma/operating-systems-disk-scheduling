var arr = [53, 98, 183, 37, 122, 14, 124, 65, 67];

//shortest seek time first
function sstf(arr) {
    var headFirst = arr[0];
    arr.sort(function (a, b) {
        return a - b;
    });
    var headStart = 0;
    var headMove = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == headFirst) {
            headStart = i;
            break;
        }
    }

    while (true) {
        //
        if (headStart === 1 || headStart === arr.length) {
            break;
        }

        //define local a, b which are the distance between the next and the previous of the current index
        if (arr[headStart - 1] === "undefined") {
            a = arr[headStart] - arr[headStart];
        } else {
            a = arr[headStart] - arr[headStart - 1];
        }
        if (arr[headStart + 1] === "undefined") {
            b = arr[headStart] - arr[headStart];
        } else {
            b = arr[headStart + 1] - arr[headStart];
        }

        //compare a & b
        if (a < b) {
            headMove += a;
            var temp = headStart;
            arr.splice(headStart, 1);
            headStart = temp - 1;
        } else if (a > b) {
            headMove += b;
            arr.splice(headStart, 1);
        }
    }

    //check if headStart = at the beginning going forward or at the last going backward
    if (headStart === 1) {
        for (var i = 1; i < arr.length; i++) {
            headMove += Math.abs(arr[i] - arr[i - 1]);
        }
    } else if (headStart === arr.length) {
        for (var i = arr.length - 1; i > 1; i--) {
            headMove += Math.abs(arr[i - 1] - arr[i]);
        }
    }

    return headMove;
}
console.log(sstf(arr));
