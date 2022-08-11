export default function SSTF(queue, head) {

    var n = queue.length;
    head = 50;

    if (n <= 0) {
        return;
    }
    let seek_time = 0.0;
    var minimum = 0.0;
    //This are storing the information of seek sequence
    var skeek = Array(n + 1).fill(0);
    //Create 2d array which is used to store distance and visited status
    var auxiliary = Array(n).fill(0).map(() => new Array(n).fill(0));
    // Loop controlling variable
    var i = 0;
    var j = 0;
    var location = 0;
    for (i = 0; i < n; ++i) {
        // set initial distance
        auxiliary[i][0] = 0;
        // set the visiting element status
        auxiliary[i][1] = 0;
    }
    for (i = 0; i < n; i++) {
        skeek[i] = head;
        // Find distance using head value
        for (j = 0; j < n; ++j) {
            auxiliary[j][0] = queue[j] - head;
            if (auxiliary[j][0] < 0) {
                auxiliary[j][0] = -auxiliary[j][0];
            }
        }
        minimum = Number.MAX_VALUE;
        location = -1;
        //Find the minimum element location that is not visited
        for (j = 0; j < n; ++j) {
            if (auxiliary[j][1] === 0 && auxiliary[j][0] <= minimum) {
                // Get the new minimum distance element location
                location = j;
                minimum = auxiliary[j][0];
            }
        }
        // Update the visited status of new get element
        auxiliary[location][1] = 1;
        // Update head data into current track value
        head = queue[location];
        // Add current distance into seek
        seek_time += auxiliary[location][0];
    }
    if (head !== 0) {
        // Add last skee info
        skeek[n] = head;
    }
    // process.stdout.write("\n Seek Sequence : ");
    //Display given queue elements

    let finalArr = [];

    for (i = 1; i <= n; i++) {
        finalArr.push(skeek[i]);
        // process.stdout.write(" " + skeek[i] + "");
    }
    //Display result
    // console.log("\n Total Seek Time : " + seek_time);
    // console.log("\n Arr : " + finalArr);

    let seek_count = seek_time;
    let arr = finalArr;

    return { seek_count, arr };
}

// SSTF([176, 79, 34, 60, 92, 11, 41, 114], 50);