import { FaqCard } from '../components/cards/FaqCards';
import { LocationCard } from '../components/cards/LocationCard';
import { VerticalConfig } from '../components/UniversalResults';
import LocationSection from '../sections/LocationSection';




export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {
  faqs: {
    label: 'FAQs',
    viewAllButton: true,
    cardConfig: {
      CardComponent: FaqCard,
    }
  },
  locations: {
    SectionComponent: LocationSection,
    label: 'Locations',
    viewAllButton: true,
    cardConfig: {
      CardComponent: LocationCard,
      showOrdinal: false
    }
  },
}