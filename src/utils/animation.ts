export const smooth = (
    begin: number,
    end: number,
    easing: number,
    time: number,
    result?: number
): number => {
    const notNullResult = result ? result : begin;

    if (end - notNullResult < 0.1) return end;
    if (time <= 0) return notNullResult;

    return smooth(
        begin,
        end,
        easing,
        time - 1,
        (end - notNullResult) * easing + notNullResult
    );
};
