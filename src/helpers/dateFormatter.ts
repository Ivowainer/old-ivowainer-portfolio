type dateType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const dateFormatter = (date: string) => {
    const cleanDate = date.split("T")[0].toString().split("-");
    const month = date.split("-")[1];

    switch (Number(month)) {
        case 1:
            return `${cleanDate[2]} January`;

        case 2:
            return `${cleanDate[2]} February`;

        case 3:
            return `${cleanDate[2]} March`;

        case 4:
            return `${cleanDate[2]} April`;

        case 5:
            return `${cleanDate[2]} May`;

        case 6:
            return `${cleanDate[2]} June`;

        case 7:
            return `${cleanDate[2]} July`;

        case 8:
            return `${cleanDate[2]} August`;

        case 9:
            return `${cleanDate[2]} September`;

        case 10:
            return `${cleanDate[2]} Octuber`;

        case 11:
            return `${cleanDate[2]} November`;

        case 12:
            return `${cleanDate[2]} December`;

        default:
            return `${cleanDate[2]} January`;
    }
};
