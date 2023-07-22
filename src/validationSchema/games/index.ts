import * as yup from 'yup';

export const gameValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  organization_id: yup.string().nullable(),
});
