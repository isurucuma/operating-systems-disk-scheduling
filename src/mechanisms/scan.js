let size = 8;
let disk_size = 200;

export default function SCAN(arr, head, direction) {
    let seek_count = 0;
    let distance, cur_track;
    let left = [],
        right = [];
    let seek_sequence = [];

    // appending end values
    // which has to be visited
    // before reversing the direction
    if (direction === "left") left.push(0);
    else if (direction === "right") right.push(disk_size - 1);

    for (let i = 0; i < size; i++) {
        if (arr[i] < head) left.push(arr[i]);
        if (arr[i] > head) right.push(arr[i]);
    }

    // sorting left and right vectors
    left.sort(function (a, b) {
        return a - b;
    });
    right.sort(function (a, b) {
        return a - b;
    });

    // run the while loop two times.
    // one by one scanning right
    // and left of the head
    let run = 2;
    while (run-- > 0) {
        if (direction === "left") {
            for (let i = left.length - 1; i >= 0; i--) {
                cur_track = left[i];

                // appending current track to seek sequence
                seek_sequence.push(cur_track);

                // calculate absolute distance
                distance = Math.abs(cur_track - head);

                // increase the total count
                seek_count += distance;

                // accessed track is now the new head
                head = cur_track;
            }
            direction = "right";
        } else if (direction === "right") {
            for (let i = 0; i < right.length; i++) {
                cur_track = right[i];

                // appending current track to seek sequence
                seek_sequence.push(cur_track);

                // calculate absolute distance
                distance = Math.abs(cur_track - head);

                // increase the total count
                seek_count += distance;

                // accessed track is now new head
                head = cur_track;
            }
            direction = "left";
        }
    }

    arr = seek_sequence;
    console.log(arr)
    console.log(seek_count)

    return { seek_count, arr };

    // document.write("Total number of seek operations = " + seek_count + "</br>");
    // document.write("Seek Sequence is" + "</br>");
    // for (let i = 0; i < seek_sequence.length; i++) {
    //     document.write(seek_sequence[i] + "</br>");
    // }
}

// request array

// let arr = [176, 79, 34, 60, 92, 11, 41, 114];
// let head = 50;
// let direction = "left";

// SCAN(arr, head, direction);
