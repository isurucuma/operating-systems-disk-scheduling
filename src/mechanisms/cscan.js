let size = 8;
let disk_size = 200;

function CSCAN(arr, head) {
    let seek_count = 0;
    let distance, cur_track;
    let left = [],
        right = [];
    let seek_sequence = [];

    // appending end values
    // which has to be visited
    // before reversing the direction
    left.push(0);
    right.push(disk_size - 1);

    // tracks on the left of the
    // head will be serviced when
    // once the head comes back
    // to the beggining (left end).
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

    // first service the requests
    // on the right side of the
    // head.
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

    // once reached the right end
    // jump to the beggining.
    head = 0;

    // adding seek count for head returning from 199 to 0
    seek_count += disk_size - 1;

    // Now service the requests again
    // which are left.
    for (let i = 0; i < left.length; i++) {
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

    document.write("Total number of seek operations = " + seek_count + "</br>");
    document.write("Seek Sequence is" + "</br>");
    for (let i = 0; i < seek_sequence.length; i++) {
        document.write(seek_sequence[i] + "</br>");
    }
}

// request array
let arr = [176, 79, 34, 60, 92, 11, 41, 114];
let head = 50;

document.write("Initial position of head: " + head + "</br>");
CSCAN(arr, head);

// This code is contributed by mukesh07.
