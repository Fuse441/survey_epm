export interface IForm {
  regisNumber: string;
  insuranceCode: string;
  establishmentName: string;
  branch: string;
  typeBusiness: string;
  groupTypeBusiness: string;
  size: string;
  user: IUser_Information;
}

interface IUser_Information {
  address: string;
  province: string;
  district: string;
  subdistrict: string;
  zipCode: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  position: string;
}
