declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

interface Campus {
  name: string;
  address: string;
  location: string;
  programs: string[];
  coordinates: [number, number];
}

interface ClientLayoutProps {
  children: React.ReactNode;
}

interface MapProps {
  campuses: Campus[];
  selectedCampus: Campus | undefined;
  onCampusSelect?: (campus: Campus) => void;
}

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}
