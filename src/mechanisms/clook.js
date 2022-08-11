// Javascript implementation of the approach

let size = 8;

// Function to perform C-LOOK on the request
// array starting from the given head
function CLOOK(arr, head) {
    let seek_count = 0;
    let distance, cur_track;

    let left = [];
    let right = [];
    let seek_sequence = [];

    // Tracks on the left of the
    // head will be serviced when
    // once the head comes back
    // to the beginning (left end)
    for (let i = 0; i < size; i++) {
        if (arr[i] < head) left.push(arr[i]);
        if (arr[i] > head) right.push(arr[i]);
    }

    // Sorting left and right vectors
    left.sort(function (a, b) {
        return a - b;
    });
    right.sort(function (a, b) {
        return a - b;
    });

    // First service the requests
    // on the right side of the
    // head
    for (let i = 0; i < right.length; i++) {
        cur_track = right[i];

        // Appending current track
        // to seek sequence
        seek_sequence.push(cur_track);

        // Calculate absolute distance
        distance = Math.abs(cur_track - head);

        // Increase the total count
        seek_count += distance;

        // Accessed track is now new head
        head = cur_track;
    }

    // Once reached the right end
    // jump to the last track that
    // is needed to be serviced in
    // left direction
    seek_count += Math.abs(head - left[0]);
    head = left[0];

    // Now service the requests again
    // which are left
    for (let i = 0; i < left.length; i++) {
        cur_track = left[i];

        // Appending current track to
        // seek sequence
        seek_sequence.push(cur_track);

        // Calculate absolute distance
        distance = Math.abs(cur_track - head);

        // Increase the total count
        seek_count += distance;

        // Accessed track is now the new head
        head = cur_track;
    }

    document.write(
        "Total number of seek " + "operations = " + seek_count + "</br>"
    );

    document.write("Seek Sequence is" + "</br>");

    for (let i = 0; i < seek_sequence.length; i++) {
        document.write(seek_sequence[i] + "</br>");
    }
}

// Request array
let arr = [176, 79, 34, 60, 92, 11, 41, 114];
let head = 50;

document.write("Initial position of head: " + head + "</br>");

CLOOK(arr, head);
