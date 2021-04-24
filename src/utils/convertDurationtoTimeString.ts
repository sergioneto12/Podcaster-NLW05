export function convertDurationToTimeString(durantion: number) {
    const hours = Math.floor(durantion/(60*60));
    const minutes = Math.floor(durantion % (60*60) / 60);
    const seconds = durantion % 60;

    const finalResult = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0')).join(":");

    return finalResult;
}