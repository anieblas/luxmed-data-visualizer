import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


interface Doctor {
  id: number,
  title: string,
  name: string,
  lastname: string,
  sex: number
}

interface ExaminationType{
  name:string,
  serviceVariantId:number
}


interface Clinic {
  id: number, 
  city: string, 
  address: string, 
  name: string
}

interface ExaminationType{
  name:string,
  serviceVariantId:number
}

interface Consultation {
  title: string;
  visitId: number,
  isServiceWithOverbookingRegularDistribution: boolean,
  referralType: number,
  status: number,
  eventId: number,
  serviceInstanceId: number,
  assignedFromReservationId: boolean,
  eventType: number,
  doctor: Doctor,
  clinic: Clinic,
  shortExaminationNames: ExaminationType[],

}
//{, "dateTo": "2021-07-07T12:00:00", "isServiceWithOverbookingRegularDistribution": false, "shortExaminationNames": [{ "name": "Glukoza / Glucose badanie glukometrem - medycyna orzecznicza", "serviceVariantId": 9357 }], "clinic": { "id": 19, "city": "WARSZAWA", "address": "BOBROWIECKA 1", "name": "LX Warszawa-Bobrowiecka1(parking od ul.Ludwizanki;mapka:https://goo.gl/4vCp9a)" }, "referralType": 0, "status": 4, "clipId": null, "eventId": 351710112, "serviceInstanceId": 351710112, "assignedFromReservationId": false, "date": "2021-07-07T11:30:00", "title": "Diagnostic test", "actions": [], "eventType": 4 }


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchConsultations: builder.query<Consultation[], number | void>({
        query(limit = 10) {
          return `/events?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchConsultationsQuery } = apiSlice;
