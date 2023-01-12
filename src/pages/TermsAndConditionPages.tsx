import ResultsCount from '../components/ResultsCount';
import AlternativeVerticals from '../components/AlternativeVerticals';
import AppliedFilters from '../components/AppliedFilters';
import DirectAnswer from '../components/DirectAnswer';
import VerticalResults from '../components/VerticalResults';
import SpellCheck from '../components/SpellCheck';
import LocationBias from '../components/LocationBias';
// import { FaqCard } from '../components/cards/FaqCards';
import { TermsAndConditionCards } from '../components/cards/TermsAndConditionCard';
import usePageSetupEffect from '../hooks/usePageSetupEffect';

export default function TermsAndConditionPage({ verticalKey }: {
  verticalKey: string
}) {
  usePageSetupEffect(verticalKey);

  return (
    <div>
      <DirectAnswer />
      <SpellCheck />
      <ResultsCount />
      <AppliedFilters
        hiddenFields={['builtin.entityType']}
      />
      <AlternativeVerticals
        currentVerticalLabel='FAQs'
        verticalsConfig={[
          { label: 'Events', verticalKey: 'events' },
          { label: 'Jobs', verticalKey: 'jobs' },
          { label: 'Locations', verticalKey: 'locations' }
        ]}
      />
      <VerticalResults
        CardComponent={TermsAndConditionCards}
      />
    </div>
  )
}