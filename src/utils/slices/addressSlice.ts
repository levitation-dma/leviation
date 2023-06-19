import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Action1, Action2, Action3, Action4, AddressState } from '../../interface/stepProp';
import { RootState } from '../store';



const initialState: AddressState = {
 data:{
  name: '',
  email: '',
  phone: '',
  address1: '',
  address2: '',
  city: '',
  State: '',
  zip: '',
  country: '',
  file1: undefined,
  file2: [],
  location: ''
 }
}


const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setStep1(state, action: PayloadAction<Action1>) {
      const {name,email,phone} = action.payload
      state.data.name = name;
      state.data.email = email;
      state.data.phone = phone;
    },
    setStep2(state, action: PayloadAction<Action2>) {
      const {address1,address2,city,State,zip,country} = action.payload
      state.data.address1 = address1;
      state.data.address2 = address2;
      state.data.city = city;
      state.data.State = State;
      state.data.zip = zip;
      state.data.country = country;
    },
    setStep3(state, action: PayloadAction<Action3>) {
      const {file1} = action.payload
      state.data.file1 = file1;
    },
    setStep4(state, action: PayloadAction<Action4>) {
      const {location} = action.payload
      state.data.location = location;
    }
  },
});

export const {
  setStep1,
  setStep2,
  setStep3,
  setStep4
} = addressSlice.actions;

export const selectAddress = (state: RootState ) => state.address.data;

export default addressSlice.reducer;

