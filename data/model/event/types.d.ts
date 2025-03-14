
export type SpecialEventResponse = {
  specialEventId: number;
  title: string;
  contents: SpecialEventContentResponse[];
  description?: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  modifiedAt?: string;
}

export type SpecialEventContentResponse = {
  specialEventContentId: string;
  contentUrl: string;
}