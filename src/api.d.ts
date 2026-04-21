declare function fetchAPI(date: Date): string[];
declare function submitAPI(formData: {
  date: string;
  time: string;
  guests: number;
  occasion: string;
}): boolean;
