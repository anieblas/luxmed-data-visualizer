export interface Doctor {
    id: number,
    title: string,
    name: string,
    lastname: string,
    sex: number
}

export interface ExaminationType {
    name: string,
    serviceVariantId: number
}

export interface Clinic {
    id: number,
    city: string,
    address: string,
    name: string
}

export interface ExaminationType {
    name: string,
    serviceVariantId: number
}

export interface Consultation {
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

export interface Result {
    name: string;
    value: string;
    measurement: string;
    minScope: number;
    maxScope: number;
    minScopeFormatted: string;
    maxScopeFormatted: string;
    status: number;
}

export interface Comment {
    doctor: Doctor;
    comment?: string;
    dateTime?: string;
}

export interface Examination {
    results: Result[];
    examinationDocumentId: number;
    availabilityStatus: number;
    comment: Comment;
    referralType: number;
    name: string;
    isNew: boolean;
    id: number;
    type: number;
}

