import { INlpResponse } from "../../../../models/INlpResponse";
import { ISuggestion } from "../../../../models/ISuggestion";

interface ISearchBoxContainerState {

    /**
     * The enhanced query response
     */
    enhancedQuery: INlpResponse;

    /**
     * List of proposed suggestions in the dropdown list
     */
    proposedQuerySuggestions: ISuggestion[];

    /**
     * The list of suggestions explicitly selected by the user
     */
    selectedQuerySuggestions: ISuggestion[];

    /**
     * List of query suggestions shown with an empty search box "zero term"
     */
    zeroTermQuerySuggestions: ISuggestion[];

    /**
     * The current value of the input string
     */
    searchInputValue: string;

    /**
     * Term used as basis to get suggestion
     */
    termToSuggestFrom: string;

    /**
     * Indicates the component is retrieving suggestions
     */
    isRetrievingSuggestions: boolean;

    /**
     * Error message
     */
    errorMessage: string;

    /**
     * Show Clear button in the Search Box
     */
    showClearButton: boolean;
}

export default ISearchBoxContainerState;
