import * as httpRequest from '~/utils/httpRequest';

export const Search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get(`users/search`, {
            params: {
                q,
                type,
            },
        });

        //trả hẵn về array data
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
