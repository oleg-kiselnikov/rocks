const cragsLoaded = (newCrags) => {
    return {
        type: 'CRAGS_LOADED',
        payload: newCrags
    }
};

export {
    cragsLoaded
};