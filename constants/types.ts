import L from "leaflet";
import { Dispatch, SetStateAction } from "react";

declare global {
  interface MarkerProps {
    location: Location;
    markerGroup: L.LayerGroup;
  }

  interface Location {
    id: string;
    game_location: Center;
    games: Game[];
  }

  interface Game {
    id: string | null;
    categories: { name: string } | null;
    cities: { name: string } | null;
    exchange: boolean | null;
    imageUrl: string | null;
    name: string;
    platforms: { name: string } | null;
    preferedExchange: string | null;
    price: string | null;
    status: { name: string } | null;
  }

  interface SearchTerms {
    gameNameTerm: string;
    platformsTerm: PlatformProp;
    isForSell: boolean;
    isForExchange: boolean;
  }

  interface UserLocation {
    cityName: string;
    provinceName: string;
    cityCenter: Center;
  }

  interface ChildrenProp {
    children: React.ReactNode;
  }

  interface MapSearchModalProp {
    onClose: EventProp;
  }

  interface NavbarFilterModalProp {
    onClose: EventProp;
  }

  interface MapSearchModalSuggestionsProps {
    gameName: string;
    setGameName: (gameName: string) => void;
    onClose: EventProp;
  }

  interface MapSearchModalSingleSuggestionProps
    extends MapSearchModalSuggestionsProps {
    searchTerm: string;
  }

  interface Filters {
    isForExchangeFilter: boolean;
    isForSellFilter: boolean;
  }

  interface NavbarKindFilterProps {
    updateFilters: FilterProp;
    filters: Filters;
  }

  interface NavbarSinglePlatformFilterProps {
    setPlatformState: FilterProp;
    platformName: string;
    platformState: boolean;
  }

  interface NavbarPlatformsFilterProps {
    updatePlatformsFilters: FilterProp;
    platforms: PlatformProp;
  }

  interface FilterState extends Filters {
    platforms: PlatformProp;
  }

  interface NavbarSearchPlatformsTagsProps {
    platformName: string;
  }

  interface NavbarLocationCityProps extends UserLocation {
    cityName: string;
    onClose: EventProp;
    isProvinces: EventProp;
    provinceName: string;
    cityCenter: Center;
  }

  interface NavbarLocationProvinceProps {
    province: {
      id: string;
      name: string;
      cities: LocationDetail[];
    };
    isProvinces: EventProp;
    setCities: (data: LocationState) => void;
  }

  interface NestedLocationDetail {
    id: string;
    name: string;
    cities: LocationDetail[];
  }

  interface NavbarLocationModalProps {
    onClose: EventProp;
    provinces: NestedLocationDetail[];
  }

  interface LocationDetail {
    id: string;
    name: string;
    center: Center;
  }

  interface LocationState {
    province: string;
    citiesList: LocationDetail[];
  }

  type Center = [number, number];
  type EventProp = () => void;
  type FilterProp = (name: string, checked: boolean) => void;
  type PlatformProp = Record<string, boolean>;
}
