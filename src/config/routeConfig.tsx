import UniversalSearchPage from '../pages/UniversalSearchPage';
import FAQsPage from '../pages/FAQsPage';
import { universalResultsConfig } from './universalResultsConfig';
import LocationsPage from '../pages/LocationsPage';
import TermsAndConditionPage from '../pages/TermsAndConditionPages';




/**
 * This defines the pasth and page used for showing a vertical on front-end.
 */
export const routeConfig = [
  {
    path: '/',
    exact: true,
    page: <UniversalSearchPage universalResultsConfig={universalResultsConfig} />
  },
  // {
  //   path: '/faqs',
  //   page: <FAQsPage verticalKey='faqs'/>
  // },
  {
    path: '/locations',
    page: <LocationsPage verticalKey="locations" />
  },
  {
    path: '/terms_and_condition',
    page: <TermsAndConditionPage verticalKey="terms_and_condition" />
  }
];