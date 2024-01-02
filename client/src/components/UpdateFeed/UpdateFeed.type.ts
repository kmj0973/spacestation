export type UpdateFeedType = {
  _id: string;
  category: string;
  imgUrls: Array<{
    url: string;
    tagPosition: Array<{
      x: number | null;
      y: number | null;
    }>;
    tagInfo: Array<{
      name: string;
      url: string;
    }>;
  }>;
  content: string;
  hashtag: string[];
  geoLocation: {
    content: string;
    position: {
      lat: number;
      lng: number;
    };
  };
};
