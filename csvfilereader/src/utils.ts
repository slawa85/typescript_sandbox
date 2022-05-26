export function stringToDate(stringDate: string): Date {
    const [day, month, year] = stringDate.split('/');

    return new Date(Number(year), Number(month) - 1, Number(day));
}
