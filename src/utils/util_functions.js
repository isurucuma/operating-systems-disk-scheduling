export function extract_array(user_input) {
    let arr = user_input.split(" ");
    return arr.map((item) => {
        return Number(item);
    });
}

export function validate_inputs(
    diskStartPoint,
    diskEndPoint,
    diskCurrentPosition,
    diskRequestInput
) {
    let diskStartPointProcessed = Number(diskStartPoint);
    let diskEndPointProcessed = Number(diskEndPoint);
    let diskCurrentPositionProcessed = Number(diskCurrentPosition);

    if (
        diskStartPointProcessed < 0 ||
        diskEndPointProcessed < 0 ||
        diskCurrentPositionProcessed < 0
    ) {
        throw new Error(
            "Disk start point, end point and current position must be greater than 0"
        );
    }
    if (diskStartPointProcessed > diskEndPointProcessed) {
        throw new Error("Disk start point must be less than end point");
    }
    if (diskCurrentPositionProcessed > diskEndPointProcessed) {
        throw new Error("Disk current position must be less than end point");
    }
    if (diskRequestInput.length === 0) {
        throw new Error("Disk request input must not be empty");
    }

    let diskRequestInputProcessed = extract_array(diskRequestInput);
    // console.log(diskRequestInputProcessed);
    return {
        diskStartPointProcessed,
        diskEndPointProcessed,
        diskCurrentPositionProcessed,
        diskRequestInputProcessed,
    };
}
