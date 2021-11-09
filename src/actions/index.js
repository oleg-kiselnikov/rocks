const cragsLoaded = (newCrags) => {
    return {
        type: 'CRAGS_LOADED',
        payload: newCrags
    }
};

const cragsRequested = () => {
    return {
        type: 'CRAGS_REQUESTED'
    }
};

export {
    cragsLoaded,
    cragsRequested
};