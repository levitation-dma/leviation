interface Data{
    name: string;
    email: string;
    phone: string;
    address1: string;
    address2: string;
    city: string;
    State: string;
    zip: string;
    country: string;
    file1: string | undefined;
    file2: string[] | null;
    location: string | null;
}





  export interface AddressState {
    data:Data
  }

 export interface Action1{
    name: string;
    email: string;
    phone: string;
  }
  
  export interface Action2{
    address1: string;
    address2: string;
    city: string;
    State: string;
    zip: string;
    country: string;
  }
  
  export interface Action3{
    file1: string | undefined;
  }
  
  export interface Action4{
   
    location: string | null;
  }



export interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}