import * as yup from 'yup';

let phoneNoRegx = /^[A-Z]{3}$/;
let passwordRegx =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
let amountRegx = /^(\d+(\.\d+)?)$/;
let addressRegx =
  /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$|^[(bc1q)|(bc1p)][0-9A-Za-z]{37,62}$/;

const sendSchema = yup.object().shape({
  loginWithEmail: yup.boolean(),
  email: yup
    .string()
    .email()
    .when('loginWithEmail', {
      is: true,
      then: yup.string().email().required('Email is required'),
    }),
  // .required('Email Address is required'),
  amount: yup.string().required('Amount is required'),
  // .matches(
  //   passwordRegx,
  //   'Password should contain 8 characters with uppercase and lowercase letters, special character  and  numbers',
  // ),
});

const sendPhoneSchema = yup.object().shape({
  loginWithPhone: yup.boolean(),
  phone_Number: yup.string().when('loginWithPhone', {
    is: true,
    then: yup
      .string()
      .required('Phone Number is required')
      .length(11, 'Phone Number must be 11 digits'),
  }),
  amount: yup.string().required('Amount is required'),
  // .matches(
  //   passwordRegx,
  //   'Password should contain 8 characters with uppercase and lowercase letters, special character  and  numbers',
  // ),
});

const sendWalletAddSchema = yup.object().shape({
  walletAddVerify: yup.boolean(),
  wallet_Address: yup.string().when('walletAddVerify', {
    is: true,
    then: yup.string().required('Wallet Address is required'),
    // .length(11, 'Phone Number must be 11 digits'),
  }),
  amount: yup.string().required('Amount is required'),
  // .matches(
  //   passwordRegx,
  //   'Password should contain 8 characters with uppercase and lowercase letters, special character  and  numbers',
  // ),
});

const sendPayIDSchema = yup.object().shape({
  payIDVerify: yup.boolean(),
  pay_ID: yup.string().when('payIDVerify', {
    is: true,
    then: yup.string().required('Pay ID is required'),
    // .length(11, 'Phone Number must be 11 digits'),
  }),
  amount: yup.string().required('Amount is required'),
  // .matches(
  //   passwordRegx,
  //   'Password should contain 8 characters with uppercase and lowercase letters, special character  and  numbers',
  // ),
});

const withdrawalSchema = yup.object().shape({
  address: yup
    .string()
    .required(`Please enter Recipient's Address`)
    .min(10, 'Address must have a minimum of 10 characters'),
  memo: yup
    .string()
    // .required(`Please enter Recipient's Memo`)
    .min(10, 'Memo must have a minimum of 10 characters'),
  amount: yup
    .string()
    .matches(amountRegx, 'The field should have digits only')
    .required('Amount is required'),
  coin: yup.string(),
  // coin: yup.string().required(`Please Select Coin`),
  networkName: yup.string(),
  // networkName: yup.string().required(`Please Select Network`),
});

const loginSchema = yup.object().shape({
  loginWithEmail: yup.boolean(),
  email: yup
    .string()
    .email()
    .when('loginWithEmail', {
      is: true,
      then: yup.string().email().required('Email is required'),
    }),
  // .required('Email Address is required'),
  password: yup.string().required('Password is required'),
  // .matches(
  //   passwordRegx,
  //   'Password should contain 8 characters with uppercase and lowercase letters, special character  and  numbers',
  // ),
});

const otpVerificationSchema = yup.object().shape({
  otpCodeEmail: yup
    .string()
    .required('Email OTP code is required')
    .length(6, 'OTP code must be six digits'),
  otpCodePhone: yup
    .string()
    .required('Phone OTP code is required')
    .length(6, 'OTP code must be six digits'),
});

const otpPasswordVerifySchema = yup.object().shape({
  otpCode: yup
    .string()
    .required('Reset Password OTP code is required')
    .length(6, 'OTP code must be six digits'),
});

const otpLoginVerifySchema = yup.object().shape({
  otpCode: yup
    .string()
    .required('Login OTP code is required')
    .length(6, 'OTP code must be six digits'),
});

const registerSchema = yup.object().shape({
  registerWithEmail: yup.boolean(),
  email: yup
    .string()
    .email()
    .when('registerWithEmail', {
      is: true,
      then: yup.string().email().required('Email is required'),
    }),
  phoneNo: yup.string().when('registerWithEmail', {
    is: false,
    then: yup.string().required('Phone number is required'),
  }),
  // .required('Email Address is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      passwordRegx,
      'Password should contain 8 characters with uppercase letters and  numbers',
    ),
});

const passwordResetSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
});

const inputPassWordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required('Password is required')
    .matches(
      passwordRegx,
      'Password should contain 8 characters with uppercase letters and  numbers',
    ),
  confirmPassword: yup
    .string()
    .required('Password is required')
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
});

export {
  loginSchema,
  sendSchema,
  sendPhoneSchema,
  sendWalletAddSchema,
  sendPayIDSchema,
  otpLoginVerifySchema,
  otpPasswordVerifySchema,
  registerSchema,
  otpVerificationSchema,
  inputPassWordSchema,
  passwordResetSchema,
  withdrawalSchema,
};
