//import your components

// Context Import
import { UseGlobalContext } from "./context/AuthContext";
// Context Export
export { UseGlobalContext };

// Supabase Create Client

import { supabase } from "@/supabase/configs";

// Supabase Export

export { supabase };

// Elements Imports

import Button from "@/components/elements/Button";
import Input from "@/components/elements/Input";

// Elements Export

export { Button, Input };

// Modules Imports

import Form from "@/components/modules/Form";
import BackButton from "@/components/modules/backButton"

// Modules Export

export { Form, BackButton };

// Template Imports
import SideMenu from "./components/templates/side-menu";

// Template Imports
export { SideMenu };
