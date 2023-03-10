import { useAnswersState, DirectAnswerType, DirectAnswer as DirectAnswerModel } from '@yext/answers-headless-react';
import renderHighlightedValue from './utils/renderHighlightedValue';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { CompositionMethod, useComposedCssClasses } from '../hooks/useComposedCssClasses';

interface DirectAnswerProps {
  customCssClasses?: DirectAnswerCssClasses,
  cssCompositionMethod?: CompositionMethod
}

interface DirectAnswerCssClasses {
  container?: string,
  container___loading?: string,
  fieldValueTitle?: string,
  featuredSnippetTitle?: string,
  content?: string,
  fieldValueDescription?: string,
  featuredSnippetDescription?: string,
  viewDetailsLink?: string,
  viewDetailsLinkContainer?: string,
  highlighted?: string
}

const builtInCssClasses: DirectAnswerCssClasses = {
  container: 'p-4 border rounded-lg shadow-sm',
  container___loading: 'opacity-50',
  fieldValueTitle: 'mb-4 text-gray-500',
  featuredSnippetTitle: 'mb-4 font-bold text-xl text-gray-800',
  content: '',
  fieldValueDescription: 'font-bold text-xl text-gray-800',
  featuredSnippetDescription: 'text-blue-600',
  viewDetailsLink: 'text-blue-600',
  viewDetailsLinkContainer: 'pt-4 text-gray-500',
  highlighted: 'text-blue'
};

export default function DirectAnswer(props: DirectAnswerProps): JSX.Element | null {
  const directAnswerResult = useAnswersState(state => state.directAnswer.result);
  console.log(directAnswerResult, "directAnswerResult");
  const isLoading = useAnswersState(state => state.searchStatus.isLoading || false);
  const composedCssClasses = useComposedCssClasses(builtInCssClasses, props.customCssClasses, props.cssCompositionMethod);
  if (!directAnswerResult) {
    return null;
  }
  const cssClasses = getCssClassesForAnswerType(composedCssClasses, directAnswerResult.type);

  const title = directAnswerResult.type === DirectAnswerType.FeaturedSnippet
    ? directAnswerResult.relatedResult.name
    : `${directAnswerResult.entityName} / ${directAnswerResult.fieldName}`
  const description: any  = directAnswerResult.type === DirectAnswerType.FeaturedSnippet
    ? renderHighlightedValue(directAnswerResult.snippet, { highlighted: cssClasses.highlighted })
    : directAnswerResult.value;
  const link = directAnswerResult.relatedResult.link;
  console.log(title,"Title");

  function getLinkText(directAnswerResult: DirectAnswerModel) {
    const isSnippet = directAnswerResult.type === DirectAnswerType.FeaturedSnippet;
    console.log(isSnippet, "isSnippet");
    const name = directAnswerResult.relatedResult.name;

    return <>
      {isSnippet && name && <div className={cssClasses.viewDetailsLinkContainer}>
        Read more about <a className={cssClasses.viewDetailsLink} href={link}>
          {directAnswerResult.relatedResult.name}
        </a>
      </div>}
      {!isSnippet && link && <div className={cssClasses.viewDetailsLinkContainer}>
        <a href={link} className={cssClasses.viewDetailsLink}>View Details</a>
      </div>}
    </>
  }

  const containerCssClasses = classNames(cssClasses.container, {
    [cssClasses.container___loading ?? '']: isLoading
  });

  console.log(description.props.children,"description");
  let NewDEscription = description.props.children;
  return (
    <div className={containerCssClasses}>
      {title &&
        <div className={cssClasses.title}>{title}</div>}
      <div className={cssClasses.content}>
        <div dangerouslySetInnerHTML={{ __html: (NewDEscription) }} />
        {/* <div className={cssClasses.highlighted}>{description} */}
          <br></br><a href='#'>Read More</a>
        {/* </div> */}
        {link && getLinkText(directAnswerResult)}
      </div>
    </div>
  )
}

function getCssClassesForAnswerType(cssClasses: DirectAnswerCssClasses, type: DirectAnswerType) {
  const isSnippet = type === DirectAnswerType.FeaturedSnippet;
  return {
    ...cssClasses,
    title: isSnippet ? cssClasses.featuredSnippetTitle : cssClasses.fieldValueTitle,
    description: isSnippet ? cssClasses.featuredSnippetDescription : cssClasses.fieldValueDescription
  }
}