export interface Campus {
  name: string;
  location: string;
  address: string;
  coordinates: [number, number];
  offerings: string[];
}

export const campuses: Campus[] = [
  {
    name: "Manhattan-96th Street",
    location: "Manhattan",
    address: "321 E 96th, New York, NY",
    coordinates: [-73.9469, 40.7845],
    offerings: [
      "Architectural Drafting",
      "Automotive",
      "Barbering",
      "Carpentry",
      "Certified Nursing Assistant",
      "Computer Networking",
      "Culinary Arts",
      "Electrical",
      "Natural Hairstyling",
      "Plumbing",
      "Vision Technology",
      "Web Design",
      "Welding",
      "Advertising & Design",
      "Audio and Video Production",
      "Medical Billing and Coding",
      "Introduction to Construction Trades",
    ],
  },
  {
    name: "Canarsie H.S. Campus",
    location: "Brooklyn",
    address: "1600 Rockaway Pkwy, Brooklyn, NY",
    coordinates: [-73.8978189, 40.6410498],
    offerings: [
      "Computer Networking",
      "Introduction to Construction Trades",
      "Introduction to Cosmetology Nails and Waxing",
      "Medical Health Careers",
    ],
  },
  {
    name: "Concord H.S. Campus",
    location: "Staten Island",
    address: "109 Rhine Avenue, Staten Island, NY",
    coordinates: [-74.0754, 40.6033],
    offerings: [
      "Advertising & Design",
      "Introduction to Construction Trades",
      "Natural Hairstyling",
    ],
  },
  {
    name: "Long Island City H.S. Campus",
    location: "Queens",
    address: "14-30 Broadway, Queens, NY",
    coordinates: [-73.9419, 40.7566],
    offerings: ["Automotive", "Carpentry"],
  },
  {
    name: "Longwood Campus",
    location: "Bronx",
    address: "965 Longwood Avenue, Bronx, NY",
    coordinates: [-73.8913, 40.8197],
    offerings: [
      "Barbering",
      "Electrical",
      "Introduction to Construction Trades",
      "Natural Hairstyling",
    ],
  },
  {
    name: "Queens Transitional Center Campus",
    location: "Queens",
    address: "142-10 Linden Blvd, Queens NY",
    coordinates: [-73.799, 40.6915],
    offerings: [
      "Automotive",
      "Barbering",
      "Culinary Arts",
      "Advertising & Design",
    ],
  },
];

// Helper function to get all unique offerings across all campuses
export function getAllOfferings(): string[] {
  const offeringsSet = new Set<string>();
  campuses.forEach((campus) => {
    campus.offerings.forEach((offering) => offeringsSet.add(offering));
  });
  return Array.from(offeringsSet).sort();
}

// Helper function to get all locations
export function getAllLocations(): string[] {
  const locationsSet = new Set<string>();
  campuses.forEach((campus) => locationsSet.add(campus.location));
  return Array.from(locationsSet).sort();
}

// Helper function to get campuses by location
export function getCampusesByLocation(location: string): Campus[] {
  return campuses.filter((campus) => campus.location === location);
}

// Helper function to get campuses by offering
export function getCampusesByOffering(offering: string): Campus[] {
  return campuses.filter((campus) => campus.offerings.includes(offering));
}

// Helper function to get campus by name
export function getCampusByName(name: string): Campus | undefined {
  return campuses.find((campus) => campus.name === name);
}

// Helper function to get all coordinates for map display
export function getAllCoordinates(): [string, [number, number]][] {
  return campuses.map((campus) => [campus.name, campus.coordinates]);
}

// Helper function to get campus details by coordinates
export function getCampusByCoordinates(
  lat: number,
  lng: number
): Campus | undefined {
  return campuses.find(
    (campus) => campus.coordinates[1] === lat && campus.coordinates[0] === lng
  );
}
