export const Action = Object.freeze({
    ByRatingDescend: 'ByRatingDescend',
    ByRatingAscend: 'ByRatingAscend',
    ByYearAscend: 'ByYearAscend',
    ByYearDescend: 'ByYearDescend',
    Randomize: 'Randomize',
    ByAuthor: 'ByAuthor',
    ByTitle: 'ByTitle',
    ByAuthorDescend: 'ByAuthorDescend',
    ByTitleDescend: 'ByTitleDescend',
});

export function sortByTitle() {
    return dispatch => {
        dispatch(sortTitle());
    }
}

export function sortByTitleDescend() {
    return dispatch => {
        dispatch(sortTitleDescend());
    }
}

export function sortByAuthorDescend() {
    return dispatch => {
        dispatch(sortBooksByYearAscend());
        dispatch(sortAuthorDescend());

    }
}

export function sortAuthorDescend() {
    return {type : Action.ByAuthorDescend};
}

export function sortTitle() {
    return { type: Action.ByTitle };
}

export function sortTitleDescend() {
    return { type: Action.ByTitleDescend };

}

export function sortByAuthor() {
    return dispatch => {
        dispatch(sortBooksByYearAscend());
        dispatch(sortAuthor());
    };
}

export function sortAuthor() {
    return { type: Action.ByAuthor };
}

export function randomize() {
    return { type: Action.Randomize };
}

export function randomizeBooks() {
    return dispatch => {
        dispatch(randomize());
    };
}

export function sortBooksByYearAscend() {
    return dispatch => {
        dispatch(booksByYearAscend());
    };
}

export function sortBooksByYearDescend() {
    return dispatch => {
        dispatch(booksByYearDescend());
    };
}

export function booksByYearAscend() {
    return { type: Action.ByYearAscend };
}

export function booksByYearDescend() {
    return { type: Action.ByYearDescend };
}

export function sortBooksByRatingDescend() {
    return dispatch => {
        dispatch(booksByRatingDescend());
    };
}

export function booksByRatingDescend() {
    return { type: Action.ByRatingDescend };
}

export function sortBooksByRatingAscend() {
    return dispatch => {
        dispatch(booksByRatingAscend());
    };
}

export function booksByRatingAscend() {
    return { type: Action.ByRatingAscend };
}