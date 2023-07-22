import * as yup from 'yup';

export const advertisementValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  reward_points: yup.number().integer(),
  organization_id: yup.string().nullable(),
});
