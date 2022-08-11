export default function FCFS(arr, head) {
    let size = arr.length;
    let seek_count = 0;
    let distance, cur_track;

    for (let i = 0; i < size; i++) {
        cur_track = arr[i];

        // Calculate absolute distance
        distance = Math.abs(cur_track - head);

        // Increase the total count
        seek_count += distance;

        // Accessed track is now new head
        head = cur_track;
    }

    return { seek_count, arr };
}

// request array
let arr = [176, 79, 34, 60, 92, 11, 41, 114];
let head = 50;

console.log(FCFS(arr, head));
