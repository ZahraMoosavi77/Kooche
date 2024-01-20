//import your components

// Context Import
import { UseGlobalContext } from "./context/AuthContext";
import {
  ActionUserSearchContext,
  UserSearchContext,
  LocationContext,
  ActionLocationContext,
} from "@/context/map/mapContext";

// Context Export
export {
  UseGlobalContext,
  UserSearchContext,
  ActionUserSearchContext,
  LocationContext,
  ActionLocationContext,
};

// Costume Hook Imports
import { useGetGamesData } from "@/hooks/useGetGamesData";
import { useWindowSize } from "@/hooks/useWindowSize";

// Costume Hook Exports
export { useGetGamesData, useWindowSize };

// utils Imports
import { setUserLocation } from "@/utils/map/setUserLocation";
import { mapPopup } from "@/utils/map/mapPopup";

// utils Exports
export { setUserLocation, mapPopup };

// Supabase Create Client

import { secret } from "@/lib/supabase";

// Supabase Export

export { secret };

// Elements Imports

import Button from "@/components/elements/Button";
import Input from "@/components/elements/Input";
import Loading from "@/components/modules/Loading";

// Elements Export

export { Button, Input, Loading };

// Elements map Imports
// import MapContent from "@/components/elements/map/MapContent";
// import Marker from "@/components/elements/map/Marker";
// import MarkersContainer from "@/components/elements/map/MarkersContainer";
import SetView from "@/components/elements/map/SetView";

// Elements map Exports
export {  SetView };

// Elements navbar Imports
import MapSearch from "@/components/elements/navbar/MapSearch";
import MapSearchFilter from "@/components/elements/navbar/MapSearchFilter";
import MapSearchInput from "@/components/elements/navbar/MapSearchInput";
import MapSearchModal from "@/components/elements/navbar/MapSearchModal";
import MapSearchModalSingleSuggestion from "@/components/elements/navbar/MapSearchModalSingleSuggestion";
import MapSearchModalSuggestions from "@/components/elements/navbar/MapSearchModalSuggestions";
import NavbarFilterModal from "@/components/elements/navbar/NavbarFilterModal";
import NavbarFilterPlatform from "@/components/elements/navbar/NavbarFilterPlatform";
import NavbarKindFilter from "@/components/elements/navbar/NavbarKindFilter";
import NavbarLocation from "@/components/elements/navbar/NavbarLocation";
import NavbarLocationCity from "@/components/elements/navbar/NavbarLocationCity";
import NavbarLocationModal from "@/components/elements/navbar/NavbarLocationModal";
import NavbarLocationProvince from "@/components/elements/navbar/NavbarLocationProvince";
import NavbarPlatformsFilter from "@/components/elements/navbar/NavbarPlatformsFilter";
import NavbarResultNumber from "@/components/elements/navbar/NavbarResultNumber";
import NavbarSearchPlatformsTags from "@/components/elements/navbar/NavbarSearchPlatformsTags";
import NavbarSearchTags from "@/components/elements/navbar/NavbarSearchTags";

// Elements navbar Exports
export {
  MapSearch,
  MapSearchFilter,
  MapSearchInput,
  MapSearchModalSuggestions,
  MapSearchModalSingleSuggestion,
  MapSearchModal,
  NavbarFilterModal,
  NavbarFilterPlatform,
  NavbarKindFilter,
  NavbarLocation,
  NavbarLocationCity,
  NavbarLocationModal,
  NavbarLocationProvince,
  NavbarPlatformsFilter,
  NavbarResultNumber,
  NavbarSearchPlatformsTags,
  NavbarSearchTags,
};

// Layout Imports
import Navbar from "@/components/layouts/Navbar";

// Layout Exports
export { Navbar };

// Modules Imports

import Form from "@/components/modules/Form";
import BackButton from "@/components/modules/BackButton";

// Modules Export

export { Form, BackButton };

// Template Imports
import SideMenu from "./components/templates/side-menu";

// Template Imports
export { SideMenu };
