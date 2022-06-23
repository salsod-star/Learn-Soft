export const ACTIONS = {
  definition: "definition",
  synonym: "synonym",
  antonym: "antonym",
  recent: "recent",
  bookmark: "bookmark",
  wordOfTheDay: "wordOfTheDay",
};

export const initialState = {
  isDefinition: true,
  isSynonym: false,
  isAntonym: false,
  isRecent: false,
  isBookmark: false,
  isWordOfTheDay: false,
};

export const reducer = function (state, action) {
  switch (action.type) {
    case ACTIONS.definition:
      return {
        isDefinition: true,
        isSynonym: false,
        isAntonym: false,
        isRecent: false,
        isBookmark: false,
        isWordOfTheDay: false,
      };
    case ACTIONS.antonym:
      return {
        isDefinition: false,
        isSynonym: false,
        isAntonym: true,
        isRecent: false,
        isBookmark: false,
        isWordOfTheDay: false,
      };
    case ACTIONS.synonym:
      return {
        isDefinition: false,
        isSynonym: true,
        isAntonym: false,
        isRecent: false,
        isBookmark: false,
        isWordOfTheDay: false,
      };
    case ACTIONS.recent:
      return {
        isDefinition: false,
        isSynonym: false,
        isAntonym: false,
        isRecent: true,
        isBookmark: false,
        isWordOfTheDay: false,
      };
    case ACTIONS.bookmark:
      return {
        isDefinition: false,
        isSynonym: false,
        isAntonym: false,
        isRecent: false,
        isBookmark: true,
        isWordOfTheDay: false,
      };
    case ACTIONS.wordOfTheDay:
      return {
        isDefinition: false,
        isSynonym: false,
        isAntonym: false,
        isRecent: false,
        isBookmark: false,
        isWordOfTheDay: true,
      };
    default:
      return state;
  }
};
