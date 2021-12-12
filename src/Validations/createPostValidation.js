import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string().min(2).max(15).required(),
    breed: yup.string().required(),
    category: yup.string().required(),
    imageurl: yup.string().required(),
    description: yup.string().required(),
});
