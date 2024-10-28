

export const formatCarNumber = (car_number: string) => {
    var cn = car_number;
    if (cn?.length == 8) return `${cn[0]}${cn[1]}${cn[2]}-${cn[3]}${cn[4]}-${cn[5]}${cn[6]}${cn[7]}`;
    if (cn?.length == 7) return `${cn[0]}${cn[1]}-${cn[2]}${cn[3]}${cn[4]}-${cn[5]}${cn[6]}`;
    if (cn?.length == 6) return `${cn[0]}${cn[1]}-${cn[2]}${cn[3]}-${cn[4]}${cn[5]}`;
    if (cn?.length == 5) return `${cn[0]}-${cn[1]}${cn[2]}-${cn[3]}${cn[4]}`;
    return cn;
};
