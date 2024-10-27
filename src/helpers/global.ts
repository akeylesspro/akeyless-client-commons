export const calculateBearing = (startLat, startLng, endLat, endLng) => {
    if (startLat === endLat || startLng === endLng) {
        return 0;
    }
    if (startLat === undefined || startLng === undefined || endLat === undefined || endLng === undefined) {
        return 0;
    }
    const startLatRad = (startLat * Math.PI) / 180;
    const startLngRad = (startLng * Math.PI) / 180;
    const endLatRad = (endLat * Math.PI) / 180;
    const endLngRad = (endLng * Math.PI) / 180;

    const dLon = endLngRad - startLngRad;
    const y = Math.sin(dLon) * Math.cos(endLatRad);
    const x = Math.cos(startLatRad) * Math.sin(endLatRad) - Math.sin(startLatRad) * Math.cos(endLatRad) * Math.cos(dLon);
    const bearing = (Math.atan2(y, x) * 180) / Math.PI;

    return (bearing + 360) % 360;
};
