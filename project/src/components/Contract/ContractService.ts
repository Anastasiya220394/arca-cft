import { requestFetch } from '../../utils/requestFetch';



export const getSearchBuiltIn = (value: string) => (
    requestFetch({url: `api/v1/built-in-category?search=${value}`, method: 'POST' })
);

export const getSearchForOther = (value: string, report_type: string, builtIn: string) => (
    requestFetch({ url: `api/v1/fields?report_type=${report_type}&built_in_cateogry=${builtIn}&search=${value}`, method: 'POST' })
);

export const updateContract = (body: any) => (
    requestFetch({ 
        url: `api/v1/cft-definitions/update`, 
        method: 'POST',
        body: body
     })
);
