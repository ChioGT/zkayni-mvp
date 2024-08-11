import data from '../data/data.json';

export const GetData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
        
    });
}
