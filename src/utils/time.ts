import dayjs from 'dayjs';

export const getTimeFormat = (date: Date): string => {
    const format = dayjs(date).format('MM/DD ddd HH:mm');

    return format;
}