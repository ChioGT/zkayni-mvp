import data from '../data/semaphoreId.json';

export const GetSemaphoreId = (secreto) => {
    return new Promise((resolve, reject) => {

        const item = data.find((el) => el._privateKey === secreto);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el beneficiario"
            })
        }       
        
    });
}