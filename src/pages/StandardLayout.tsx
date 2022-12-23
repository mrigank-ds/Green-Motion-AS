import Navigation from '../components/Navigation';
import { SearchTypeEnum, useAnswersState } from '@yext/answers-headless-react';
import { universalResultsConfig } from '../config/universalResultsConfig';
import { LayoutComponent } from '../PageRouter';
import SearchBar from '../components/SearchBar';
import SampleVisualSearchBar from '../components/VisualAutocomplete/SampleVisualSearchBar';

const navLinks = [
  {
    to: '/',
    label: 'All'
  },
  ...Object.entries(universalResultsConfig).map(([verticalKey, config]) => ({
    to: verticalKey,
    label: config.label || verticalKey
  }))
]

/**
 * A LayoutComponent that provides a SearchBar and Navigation tabs to a given page.
 */
const StandardLayout: LayoutComponent = ({ page }) => {
  const isVertical = useAnswersState(s => s.meta.searchType) === SearchTypeEnum.Vertical;
  const PreText : any = useAnswersState(state => state.vertical.verticalKey);
  var PlaceholderText = '';
  if(PreText==='products'){
    PlaceholderText = 'Have a look at our Products';
  }else if(PreText==='locations'){
    PlaceholderText = 'Find Our Shops';
  }else if(PreText==='faqs'){
    PlaceholderText = 'Your Frequently Asked Questions';
  }else if(PreText==='articles'){
    PlaceholderText = 'Have a look at our Articles';
  }

  
  return (
    <>
      {isVertical
        ? <SearchBar
          placeholder= {PlaceholderText ? PlaceholderText :'Search...'}
        />
        : <SampleVisualSearchBar />
      }
      <Navigation links={navLinks} />
      {page}
    </>
  )
}
export default StandardLayout;